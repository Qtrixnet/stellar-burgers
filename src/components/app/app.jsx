import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appStyles from './app.module.css';
import Header from '../header/header';
import Main from '../main/main';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import Loader from '../loader/loader';
import { getIngredients } from '../../services/actions/ingredients';
import { changeOrderDetailsPopupState, changeIngredientsPopupState } from '../../services/actions/popup';
import { deleteSelectedIngredient } from '../../services/actions/ingredients';
import { deleteOrderData } from '../../services/actions/order';

const App = () => {
  const orderData = useSelector(state => state.orderData.orderDetails);
  const isIngredientsPopupOpen = useSelector(state => state.popupState.isIngredientsPopupOpen);
  const isOrderDetailsPopupOpen = useSelector(state => state.popupState.isOrderDetailsPopupOpen);
  const ingredientsRequest = useSelector(state => state.ingredientsData.ingredientsRequest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  const handlePopupClose = () => {
    isOrderDetailsPopupOpen ? dispatch(changeOrderDetailsPopupState(false)) : dispatch(changeIngredientsPopupState(false));
    isOrderDetailsPopupOpen ? dispatch(deleteOrderData()) : dispatch(deleteSelectedIngredient())
  }

  return (
    <div className={`${appStyles.app}`}>
      {
        ingredientsRequest ? (<Loader />) :
          <>
            <Header />
            <Main />
            {
              isOrderDetailsPopupOpen && (
                <Modal handlePopupClose={handlePopupClose}>
                  {orderData ? <OrderDetails /> : <Loader />}
                </Modal>
              )
            }
            {
              isIngredientsPopupOpen && (
                <Modal handlePopupClose={handlePopupClose} title='Детали ингредиентов'>
                  <IngredientDetails />
                </Modal>
              )
            }
          </>
      }
    </div >

  );
};

export default App;