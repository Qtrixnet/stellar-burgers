import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';

export const rootReducer = combineReducers({
  ingredientsData: ingredientsReducer,
  orderData: orderReducer,
});