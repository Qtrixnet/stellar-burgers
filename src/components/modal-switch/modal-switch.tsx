import modalSwitchStyles from "./modal-switch.module.css";
import {useLocation, Switch, Route, useHistory} from "react-router-dom";
import {useDispatch, useSelector, RootStateOrAny} from "react-redux";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import NotFound from "../../pages/not-found/not-found";
import ProtectedRoute from "../protected-route/protected-route";
import {
  changeOrderDetailsPopupState,
  changeIngredientsPopupState,
} from "../../services/actions/popup";
import {deleteSelectedIngredient} from "../../services/actions/ingredients";
import {deleteOrderData} from "../../services/actions/order";
import Main from "../main/main";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Loader from "../loader/loader";
import Feed from "../../pages/feed/feed";

const ModalSwitch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const orderData = useSelector((state: RootStateOrAny) => state.orderData.orderDetails);
  const isOrderDetailsPopupOpen = useSelector(
    (state: RootStateOrAny) => state.popupState.isOrderDetailsPopupOpen
  );
  const location = useLocation();
  const background = location.state && location.state.background;

  const handleOrderDetailsPopupClose = () => {
    dispatch(changeOrderDetailsPopupState(false))
    dispatch(deleteOrderData())
  }

  const handleIngredientsDetailsPopupClose = () => {
    dispatch(changeIngredientsPopupState(false));
    dispatch(deleteSelectedIngredient());
    background && history.goBack();
  }

  return (
    <div className={`${modalSwitchStyles.container} pb-10`}>
      <Switch location={background || location}>
        {
          // @ts-ignore
          <Route exact path="/">
            <Main/>
          </Route>
        }
        {
          <Route path="/login">
            <Login/>
          </Route>
        }
        {
          <Route path="/register">
            <Register/>
          </Route>
        }
        {
          <Route path="/forgot-password">
            <ForgotPassword/>
          </Route>
        }
        {
          <Route path="/reset-password">
            <ResetPassword/>
          </Route>
        }
        {
          <Route path="/ingredients/:id">
            <IngredientDetails title="Детали ингредиента"/>
          </Route>
        }
        <ProtectedRoute
          path="/profile"
        >
          <Profile/>
        </ProtectedRoute>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>

      {isOrderDetailsPopupOpen && (
        <Modal handlePopupClose={handleOrderDetailsPopupClose}>
          {orderData ? <OrderDetails/> : <Loader/>}
        </Modal>
      )}

      {background && (
        <Route
          path="/ingredients/:id"
          children={
            <Modal
              handlePopupClose={handleIngredientsDetailsPopupClose}
              title="Детали ингредиента"
            >
              <IngredientDetails/>
            </Modal>
          }
        />
      )}
    </div>
  );
};

export default ModalSwitch;
