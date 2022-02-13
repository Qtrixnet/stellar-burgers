import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
import mainApi from '../../utils/Api';

const App = () => {
  const orderData = useSelector(state => state.orderData.orderDetails);
  const isIngredientsPopupOpen = useSelector(state => state.popupState.isIngredientsPopupOpen);
  const isOrderDetailsPopupOpen = useSelector(state => state.popupState.isOrderDetailsPopupOpen);
  const ingredientsRequest = useSelector(state => state.ingredientsData.ingredientsRequest);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  const handlePopupClose = () => {
    isOrderDetailsPopupOpen ? dispatch(changeOrderDetailsPopupState(false)) : dispatch(changeIngredientsPopupState(false));
    isOrderDetailsPopupOpen ? dispatch(deleteOrderData()) : dispatch(deleteSelectedIngredient())
  }

  //* Отправка имейла для восстановления пароля
  const handlePasswordForgot = (email) => {
    mainApi.sendEmail(email)
      .then(res => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //* Установка нового пароля
  const handlePasswordSave = (password) => {
    mainApi.resetPassword(password)
      .then(res => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //* Регистрация
  const handleRegister = (email, name, password) => {
    // mainApi.register(email, name, password)
    //   .then(res => {
    //     console.log(res)
    //     localStorage.setItem('refreshToken', res.refreshToken)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }

  //* Логин
  const handleLogin = (email, password) => {
    // mainApi.login(email, password)
    //   .then(res => {
    //     console.log(res)
    //     localStorage.setItem('refreshToken', res.refreshToken)
    //     history.push('/')
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }

  return (
    <div className={`${appStyles.app}`}>
      {
        ingredientsRequest ? (<Loader />) :
          <>
            <Header />
            <Main onPasswordForgot={handlePasswordForgot} onPasswordSave={handlePasswordSave} onRegister={handleRegister} onLogin={handleLogin} />
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