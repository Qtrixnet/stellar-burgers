import {store} from "../store";
import {
  IAddIngredient, IDeleteAllIngredients,
  IDeleteIngredient,
  IDeleteSelectedIngredient,
  ISelectIngredient, ISortIngredients,
} from "../actions/ingredients";
import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {
  IDeleteOrderData,
  ISetOrderDataLoading,
  ISetOrderDataLoadingFailed,
  ISetOrderDataLoadingSuccess
} from "../actions/order";
import {
  IWSAllOrdersConnectionStart,
  IWSUserOrdersConnectionStart,
} from "../actions/orders";
import {IChangeIngredientsPopupState, IChangeOrderDetailsPopupState, IChangeOrderPopupState} from "../actions/popup";
import {
  ISetForgotPasswordLoading,
  ISetForgotPasswordLoadingFailed,
  ISetForgotPasswordLoadingSuccess, ISetForgotPasswordState,
  ISetGetUserDataLoading,
  ISetGetUserDataLoadingFailed,
  ISetGetUserDataLoadingSuccess,
  ISetLoginLoading,
  ISetLoginLoadingFailed,
  ISetLoginLoadingSuccess,
  ISetLogoutLoading,
  ISetLogoutLoadingFailed,
  ISetLogoutLoadingSuccess,
  ISetRefreshTokenLoading, ISetRefreshTokenLoadingFailed, ISetRefreshTokenLoadingSuccess,
  ISetRegistrationLoading,
  ISetRegistrationLoadingFailed,
  ISetRegistrationLoadingSuccess,
  ISetResetPasswordLoading,
  ISetResetPasswordLoadingFailed,
  ISetResetPasswordLoadingSuccess,
  ISetSendUserDataLoading,
  ISetSendUserDataLoadingFailed,
  ISetSendUserDataLoadingSuccess
} from "../actions/user";

export interface IIngredient {
  calories: number,
  carbohydrates: number,
  fat: number,
  image: string,
  image_large: string,
  image_mobile: string,
  name: string,
  price: number,
  proteins: number,
  type: string,
  uuid: string,
  __v: string,
  _id: string,
}

export type TIngredientId = Pick<IIngredient, '_id'>;

export type TIngredientType = Pick<IIngredient, 'type'>;

export interface IBurgerConstructorProps {
  onDropHandler: (ingredientId: IIngredient) => void,
}

export interface IModalProps {
  handlePopupClose: () => void,
  children: React.ReactChild | React.ReactNode,
  title?: string
}

export interface IModalOverlayProps {
  handlePopupClose: () => void,
}

export interface IChosenIngredientProps {
  ingredient: IIngredient,
  id: string,
  moveIngredient: (dragIndex: number, hoverIndex: number) => void,
  index: number,
}

export interface IIngredientProps {
  ingredient: IIngredient,
}

export interface IIngredientDetailsProps {
  title?: string,
}

export interface IOrderComponentProps {
  order: IOrder,
  isHistory: boolean,
}

export interface IOrderFullInfoProps {
  isPopup: boolean,
  isAllOrders: boolean,
}

export interface IFeedWrapperProps {
  children: React.ReactChild | React.ReactNode,
}

export interface IGetCoords {
  top: number,
  left: number,
}

export interface IAbsoluteCoords {
  title: string,
  value: number,
}

export interface IOrder {
  createdAt: string,
  ingredients: string[],
  name: string,
  number: number,
  status: string,
  updatedAt: string,
  _id: string,
}

export interface IUser {
  email: 'string',
  name: 'string',
}

export interface IOrderState {
  orderDetails: object | null,
  orderRequest: boolean,
  orderFailed: boolean,
}

export interface IOrdersState {
  wsAllOrders: boolean,
  wsUserOrders: boolean,
  orders: IOrder[],
  userOrders: IOrder[],
  allOrdersError?: Event,
  userOrdersError?: Event,
  total: number,
  totalToday: number,
}

export interface IIngredientsState {
  ingredients: IIngredient[],
  selectedIngredient: IIngredient | null,
  chosenIngredients: IIngredient[],
  ingredientsRequest: boolean,
  ingredientsFailed: boolean,
}

export interface IUserState {
  registrationRequest: boolean,
  registrationRequestFailed: boolean,
  loginRequest: boolean,
  loginRequestFailed: boolean,
  forgotPasswordRequest: boolean,
  forgotPasswordRequestFailed: boolean,
  resetPasswordRequest: boolean,
  resetPasswordRequestFailed: boolean,
  getUserDataRequest: boolean,
  getUserDataRequestFailed: boolean,
  logoutRequest: boolean,
  logoutRequestFailed: boolean,
  refreshTokenRequest: boolean,
  refreshTokenRequestFailed: boolean,
  sendUserDataRequest: boolean,
  sendUserDataRequestFailed: boolean,
  isPasswordForgot: boolean,
  accessToken: string | null,
  userData: object | null
}

export interface IPopupState {
  isOrderDetailsPopupOpen: boolean,
  isIngredientsPopupOpen: boolean,
  isOrderPopupOpen: boolean,
}

export interface ISocketActions {
  wsInit: string,
  onOpen: string,
  onClose: string,
  onError: string,
  onMessage: string
}

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  | ISelectIngredient
  | IDeleteSelectedIngredient
  | IAddIngredient
  | IDeleteIngredient
  | IDeleteAllIngredients
  | ISortIngredients
  | ISetOrderDataLoading
  | ISetOrderDataLoadingSuccess
  | ISetOrderDataLoadingFailed
  | IDeleteOrderData
  | IWSAllOrdersConnectionStart
  | IWSUserOrdersConnectionStart
  | IChangeOrderDetailsPopupState
  | IChangeIngredientsPopupState
  | IChangeOrderPopupState
  | ISetRegistrationLoading
  | ISetRegistrationLoadingSuccess
  | ISetRegistrationLoadingFailed
  | ISetLoginLoading
  | ISetLoginLoadingSuccess
  | ISetLoginLoadingFailed
  | ISetForgotPasswordLoading
  | ISetForgotPasswordLoadingSuccess
  | ISetForgotPasswordLoadingFailed
  | ISetResetPasswordLoading
  | ISetResetPasswordLoadingSuccess
  | ISetResetPasswordLoadingFailed
  | ISetGetUserDataLoading
  | ISetGetUserDataLoadingSuccess
  | ISetGetUserDataLoadingFailed
  | ISetSendUserDataLoading
  | ISetSendUserDataLoadingSuccess
  | ISetSendUserDataLoadingFailed
  | ISetLogoutLoading
  | ISetLogoutLoadingSuccess
  | ISetLogoutLoadingFailed
  | ISetRefreshTokenLoading
  | ISetRefreshTokenLoadingSuccess
  | ISetRefreshTokenLoadingFailed
  | ISetForgotPasswordState;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch;
