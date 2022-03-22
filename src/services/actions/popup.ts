export const CHANGE_ORDER_DETAILS_POPUP_STATE: 'CHANGE_ORDER_DETAILS_POPUP_STATE' = 'CHANGE_ORDER_DETAILS_POPUP_STATE';
export const CHANGE_INGREDIENTS_POPUP_STATE: 'CHANGE_INGREDIENTS_POPUP_STATE' = 'CHANGE_INGREDIENTS_POPUP_STATE';
export const CHANGE_ORDER_POPUP_STATE: 'CHANGE_ORDER_POPUP_STATE' = 'CHANGE_ORDER_POPUP_STATE';

export interface IChangeOrderDetailsPopupState {
  readonly type: typeof CHANGE_ORDER_DETAILS_POPUP_STATE;
  readonly payload: boolean;
}

export interface IChangeIngredientsPopupState {
  readonly type: typeof CHANGE_INGREDIENTS_POPUP_STATE;
  readonly payload: boolean;
}

export interface IChangeOrderPopupState {
  readonly type: typeof CHANGE_ORDER_POPUP_STATE;
  readonly payload: boolean;
}

export const changeOrderDetailsPopupState = (status: boolean) => ({
  type: CHANGE_ORDER_DETAILS_POPUP_STATE,
  payload: status
})
export const changeIngredientsPopupState = (status: boolean) => ({
  type: CHANGE_INGREDIENTS_POPUP_STATE,
  payload: status
})
export const changeOrderPopupState = (status: boolean) => ({type: CHANGE_ORDER_POPUP_STATE, payload: status})