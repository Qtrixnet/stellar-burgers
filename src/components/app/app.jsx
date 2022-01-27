import { useEffect, useState } from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import mainApi from '../../utils/Api'
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import { IngredientsContext } from '../../services/ingredientsContext';
import { OrderContext } from '../../services/orderContext';
import { ChosenIngredientsContext } from '../../services/chosenIngredientsContext';
import { SelectedIngredientContext } from '../../services/selectedIngredientContext';

export default function App() {
  const [ingredientsData, setIngredientsData] = useState([])
  const [isIngredientsPopupOpen, setIsIngredientsPopupOpen] = useState(false)
  const [isOrderDetailsPopupOpen, setIsOrderDetailsPopupOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIngredient, setSelectedIngredient] = useState({ element: {} });
  const [orderData, setOrderData] = useState({})
  const [chosenIngredients, setChosenIngredients] = useState([]);

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(thunk));

  const store = createStore(rootReducer, enhancer);

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
        <ChosenIngredientsContext.Provider value={chosenIngredients}>
          <SelectedIngredientContext.Provider value={selectedIngredient}>
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
                      setChosenIngredients={setChosenIngredients}
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
          </SelectedIngredientContext.Provider>
        </ChosenIngredientsContext.Provider>
      </OrderContext.Provider>
    </IngredientsContext.Provider>
  );
};