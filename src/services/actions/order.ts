import mainApi from '../../utils/Api';
import {deleteAllIngredients} from './ingredients';
import {TIngredientId} from "../types/types";

export const GET_ORDER_DATA: 'GET_ORDER_DATA' = 'GET_ORDER_DATA';
export const GET_ORDER_DATA_FAILED: 'GET_ORDER_DATA_FAILED' = 'GET_ORDER_DATA_FAILED';
export const GET_ORDER_DATA_SUCCESS: 'GET_ORDER_DATA_SUCCESS' = 'GET_ORDER_DATA_SUCCESS';
export const DELETE_ORDER_DATA: 'DELETE_ORDER_DATA' = 'DELETE_ORDER_DATA';

export const setOrderDataLoading = () => ({type: GET_ORDER_DATA})
export const setOrderDataLoadingSuccess = (data: any) => ({type: GET_ORDER_DATA_SUCCESS, payload: data})
export const setOrderDataLoadingFailed = () => ({type: GET_ORDER_DATA_FAILED})
export const deleteOrderData = () => ({type: DELETE_ORDER_DATA})

export function getOrderData(ingredientsIds: TIngredientId[]) {
  return function (dispatch: any) {
    dispatch(setOrderDataLoading())

    mainApi.sendIngredients(ingredientsIds)
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