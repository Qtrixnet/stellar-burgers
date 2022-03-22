import mainApi from '../../utils/Api';
import {deleteAllIngredients} from './ingredients';
import {AppDispatch, AppThunk, IOrder, TIngredientId} from "../types/types";

export const GET_ORDER_DATA: 'GET_ORDER_DATA' = 'GET_ORDER_DATA';
export const GET_ORDER_DATA_FAILED: 'GET_ORDER_DATA_FAILED' = 'GET_ORDER_DATA_FAILED';
export const GET_ORDER_DATA_SUCCESS: 'GET_ORDER_DATA_SUCCESS' = 'GET_ORDER_DATA_SUCCESS';
export const DELETE_ORDER_DATA: 'DELETE_ORDER_DATA' = 'DELETE_ORDER_DATA';

export interface ISetOrderDataLoading {
  readonly type: typeof GET_ORDER_DATA;
}

export interface ISetOrderDataLoadingSuccess {
  readonly type: typeof GET_ORDER_DATA_SUCCESS;
  readonly payload: IOrder;
}

export interface ISetOrderDataLoadingFailed {
  readonly type: typeof GET_ORDER_DATA_FAILED;
}

export interface IDeleteOrderData {
  readonly type: typeof DELETE_ORDER_DATA;
}

export const setOrderDataLoading = () => ({type: GET_ORDER_DATA})
export const setOrderDataLoadingSuccess = (data: IOrder) => ({type: GET_ORDER_DATA_SUCCESS, payload: data})
export const setOrderDataLoadingFailed = () => ({type: GET_ORDER_DATA_FAILED})
export const deleteOrderData = () => ({type: DELETE_ORDER_DATA})

export const getOrderData: AppThunk = (ingredientsIds: TIngredientId[], token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(setOrderDataLoading())

    mainApi.sendIngredients(ingredientsIds, token)
      .then(data => {
        if (data) {
          dispatch(setOrderDataLoadingSuccess(data))
        }
      })
      .then(() => {
        dispatch(deleteAllIngredients())
      })
      .catch(() => dispatch(setOrderDataLoadingFailed()))
  }
}