import {combineReducers} from 'redux';
import {ingredientsReducer} from './ingredients';
import {orderReducer} from './order';
import {popupReducer} from './popup';
import {userReducer} from './user';
import {ordersReducer} from "./orders";

export const rootReducer = combineReducers({
  ingredientsData: ingredientsReducer,
  orderData: orderReducer,
  popupState: popupReducer,
  userData: userReducer,
  ordersData: ordersReducer
});