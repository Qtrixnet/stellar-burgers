import { combineReducers } from 'redux';6
import { cartReducer } from './cart';

export const rootReducer = combineReducers({
  cart: cartReducer,
});606