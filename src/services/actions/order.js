import mainApi from '../../utils/Api';

export const GET_ORDER_DATA = 'GET_ORDER_DATA';
export const GET_ORDER_DATA_FAILED = 'GET_ORDER_DATA_FAILED';
export const GET_ORDER_DATA_SUCCESS = 'GET_ORDER_DATA_SUCCESS';
export const DELETE_ORDER_DATA = 'DELETE_ORDER_DATA'

export function getOrderData(ingredientsIds) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_DATA,
    })

    mainApi.sendIngredients(ingredientsIds)
      .then(data => {
        if (data) {
          dispatch({
            type: GET_ORDER_DATA_SUCCESS,
            payload: data
          })
          // dispatch({ type: 'CHANGE_ORDER_DETAILS_POPUP_STATE', payload: true })
        }
      })
      .catch(err => dispatch({
        type: GET_ORDER_DATA_FAILED
      }))
  }
}