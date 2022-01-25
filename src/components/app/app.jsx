import { useEffect, useState } from 'react';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header'
import Main from '../main/main';
import mainApi from '../../utils/Api'
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import { IngredientsContext } from '../../services/ingredientsContext';
import { OrderContext } from '../../services/orderContext'

export default function App() {
  const [ingredientsData, setIngredientsData] = useState([])
  const [isIngredientsPopupOpen, setIsIngredientsPopupOpen] = useState(false)
  const [isOrderDetailsPopupOpen, setIsOrderDetailsPopupOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIngredient, setSelectedIngredient] = useState({ element: {} });
  const [orderData, setOrderData] = useState({})

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
    <IngredientsContext.Provider value={ingredientsData}>
      <OrderContext.Provider value={orderData}>
        <div className={`${appStyles.app} pb-10`}>
          {
            isLoading ? (<h1 className="text text_type_main-large">Загружаем заказы...</h1>) :
              <>
                <AppHeader />
                <Main
                  setSelectedIngredient={setSelectedIngredient}
                  setIsOrderDetailsPopupOpen={setIsOrderDetailsPopupOpen}
                  setIsIngredientsPopupOpen={setIsIngredientsPopupOpen}
                  setOrderData={setOrderData}
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
                      <IngredientDetails popupCloseHandler={setIsIngredientsPopupOpen} ingredientsData={selectedIngredient} />
                    </Modal>
                  )
                }
              </>
          }
        </div >
      </OrderContext.Provider>
    </IngredientsContext.Provider>
  );
};