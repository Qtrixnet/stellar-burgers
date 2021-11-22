import { useEffect, useState } from 'react';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header'
import Main from '../main/main';
import mainApi from '../../utils/Api'
import ModalOverlay from '../modal-overlay/modal-overlay';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import { orderData } from '../../utils/data';

export default function App() {
  const [ingredientsData, setIngredientsData] = useState([])
  const [isIngredientsPopupOpen, setIsIngredientsPopupOpen] = useState(false)
  const [isOrderDetailsPopupOpen, setIsOrderDetailsPopupOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIngredient, setSelectedIngredient] = useState({ element: {} });

  useEffect(() => {
    setIsLoading(true)
    mainApi.getIngredients()
      .then(ingredientsData => {
        if (ingredientsData) {
          setIngredientsData(ingredientsData.data)
        }
      })
      .catch(err => { console.log(err) })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className={`${appStyles.app} pb-10`}>
      {
        isLoading ? (<h1 className="text text_type_main-large">Загружаем заказы...</h1>) :
          <>
            <AppHeader />
            <Main
              setSelectedIngredient={setSelectedIngredient}
              setIsOrderDetailsPopupOpen={setIsOrderDetailsPopupOpen}
              setIsIngredientsPopupOpen={setIsIngredientsPopupOpen}
              ingredientsData={ingredientsData}
            />
            {
              isOrderDetailsPopupOpen && (
                <Modal popupCloseHandler={setIsOrderDetailsPopupOpen}>
                  <OrderDetails popupCloseHandler={setIsOrderDetailsPopupOpen} orderData={orderData} />
                  <ModalOverlay popupCloseHandler={setIsOrderDetailsPopupOpen} />
                </Modal>
              )
            }
            {
              isIngredientsPopupOpen && (
                <Modal popupCloseHandler={setIsIngredientsPopupOpen}>
                  <IngredientDetails popupCloseHandler={setIsIngredientsPopupOpen} title='Детали ингредиентов' ingredientsData={selectedIngredient} />
                  <ModalOverlay popupCloseHandler={setIsIngredientsPopupOpen} />
                </Modal>
              )
            }
          </>

      }
    </div >
  );
};