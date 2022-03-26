import {AppDispatch, AppThunk, IOrder} from "../types/types";
import mainApi from "../../utils/Api";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ALL_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';

export const WS_USER_ORDERS_CONNECTION_START: 'WS_USER_ORDERS_CONNECTION_START' = 'WS_USER_ORDERS_CONNECTION_START';
export const WS_USER_ORDERS_CONNECTION_SUCCESS: 'WS_USER_ORDERS_CONNECTION_SUCCESS' = 'WS_USER_ORDERS_CONNECTION_SUCCESS';
export const WS_USER_ORDERS_CONNECTION_ERROR: 'WS_USER_ORDERS_CONNECTION_ERROR' = 'WS_USER_ORDERS_CONNECTION_ERROR';
export const WS_USER_ORDERS_CONNECTION_CLOSED: 'WS_USER_ORDERS_CONNECTION_CLOSED' = 'WS_USER_ORDERS_CONNECTION_CLOSED';
export const WS_GET_USER_ORDERS: 'WS_GET_USER_ORDERS' = 'WS_GET_USER_ORDERS';

export const GET_ORDER_INFO: 'GET_ORDER_INFO' = 'GET_ORDER_INFO';
export const GET_ORDER_INFO_SUCCESS: 'GET_ORDER_INFO_SUCCESS' = 'GET_ORDER_INFO_SUCCESS';
export const GET_ORDER_INFO_FAILED: 'GET_ORDER_INFO_FAILED' = 'GET_ORDER_INFO_FAILED';
export const CLEAN_ORDER_INFO: 'CLEAN_ORDER_INFO' = 'CLEAN_ORDER_INFO';

export interface IWSAllOrdersConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWSUserOrdersConnectionStart {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_START;
}

export const wsAllOrdersConnectionStart = () => {
  return {
    type: WS_CONNECTION_START
  };
};

export const wsUserOrdersConnectionStart = () => {
  return {
    type: WS_USER_ORDERS_CONNECTION_START
  };
};

export const wsAllOrdersConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED
  };
};

export const wsUserOrdersConnectionClosed = () => {
  return {
    type: WS_USER_ORDERS_CONNECTION_CLOSED
  };
};

export const getOrderInfoLoading = () => ({type: GET_ORDER_INFO})
export const getOrderInfoLoadingSuccess = (data: IOrder) => ({type: GET_ORDER_INFO_SUCCESS, payload: data})
export const getOrderInfoLoadingFailed = () => ({type: GET_ORDER_INFO_FAILED})
export const cleanOrderInfo = () => ({type: CLEAN_ORDER_INFO})

export const getOrderInfo: AppThunk = (orderNumber: number) => {
  return function (dispatch: AppDispatch) {
    dispatch(getOrderInfoLoading())

    mainApi.getOrderInfo(orderNumber)
      .then(data => {
        if (data) {
          dispatch(getOrderInfoLoadingSuccess(data.orders[0]))
        }
      })
      .catch(() => dispatch(getOrderInfoLoadingFailed()))
  }
}