import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ALL_ORDERS,
  WS_GET_USER_ORDERS,
  WS_USER_ORDERS_CONNECTION_SUCCESS,
  WS_USER_ORDERS_CONNECTION_ERROR,
  WS_USER_ORDERS_CONNECTION_CLOSED
} from '../actions/orders';
import {IOrdersState} from "../types/types";
import {AnyAction} from "redux";

const initialState: IOrdersState = {
  wsAllOrders: false,
  wsUserOrders: false,
  orders: [],
  userOrders: [],
  total: 0,
  totalToday: 0,
};

export const orders = (state = initialState, action: AnyAction): IOrdersState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        allOrdersError: undefined,
        wsAllOrders: true
      };

    case WS_USER_ORDERS_CONNECTION_SUCCESS:
      return {
        ...state,
        userOrdersError: undefined,
        wsUserOrders: true
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        allOrdersError: action.payload,
        wsAllOrders: false
      };

    case WS_USER_ORDERS_CONNECTION_ERROR:
      return {
        ...state,
        userOrdersError: action.payload,
        wsUserOrders: false
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        allOrdersError: undefined,
        wsAllOrders: false,
        orders: [],
        total: 0,
        totalToday: 0,
      };

    case WS_USER_ORDERS_CONNECTION_CLOSED:
      return {
        ...state,
        userOrdersError: undefined,
        wsUserOrders: false,
        userOrders: [],
        total: 0,
        totalToday: 0,
      };

    case WS_GET_ALL_ORDERS:
      return {
        ...state,
        allOrdersError: undefined,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };

    case WS_GET_USER_ORDERS:
      return {
        ...state,
        allOrdersError: undefined,
        userOrders: action.payload.orders,
      }
    default:
      return state;
  }
}; 