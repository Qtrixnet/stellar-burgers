import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import mainApi from '../../utils/Api'
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';

export default function App() {
  const [isIngredientsPopupOpen, setIsIngredientsPopupOpen] = useState(false)
  const [isOrderDetailsPopupOpen, setIsOrderDetailsPopupOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const orderData = useSelector(state => state.orderData.orderDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true)
    mainApi.getIngredients()
      .then(ingredientsData => {
        if (ingredientsData) {
          dispatch({ type: 'GET_INGREDIENTS', payload: ingredientsData.data });
        }
      })
      .catch(err => { console.log(err) })
      .finally(() => setIsLoading(false))
  }, [dispatch])

  return (
    <div className={`${appStyles.app} pb-10`}>
      {
        isLoading ? (<h1 className="text text_type_main-large">Загружаем заказы...</h1>) :
          <>
            <AppHeader />
            <Main
              setIsOrderDetailsPopupOpen={setIsOrderDetailsPopupOpen}
              setIsIngredientsPopupOpen={setIsIngredientsPopupOpen}
            />
            {
              isOrderDetailsPopupOpen && (
                <Modal popupCloseHandler={setIsOrderDetailsPopupOpen}>
                  {orderData && <OrderDetails />}
                </Modal>
              )
            }
            {
              isIngredientsPopupOpen && (
                <Modal title='Детали ингредиентов' popupCloseHandler={setIsIngredientsPopupOpen}>
                  <IngredientDetails popupCloseHandler={setIsIngredientsPopupOpen} />
                </Modal>
              )
            }
          </>
      }
    </div >

  );
};