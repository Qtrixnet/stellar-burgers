import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import Loader from '../loader/loader';
import { getIngredients } from '../../services/actions/ingredients';

export default function App() {
  const orderData = useSelector(state => state.orderData.orderDetails);
  const isIngredientsPopupOpen = useSelector(state => state.popupState.isIngredientsPopupOpen);
  const isOrderDetailsPopupOpen = useSelector(state => state.popupState.isOrderDetailsPopupOpen);
  const ingredientsRequest = useSelector(state => state.ingredientsData.ingredientsRequest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  return (
    <div className={`${appStyles.app} pb-10`}>
      {
        ingredientsRequest ? (<Loader />) :
          <>
            <AppHeader />
            <Main />
            {
              isOrderDetailsPopupOpen && (
                <Modal>
                  {orderData ? <OrderDetails /> : <Loader />}
                </Modal>
              )
            }
            {
              isIngredientsPopupOpen && (
                <Modal title='Детали ингредиентов'>
                  <IngredientDetails />
                </Modal>
              )
            }
          </>
      }
    </div >

  );
};