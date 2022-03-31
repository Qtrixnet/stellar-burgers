import {popupReducer} from './popup';
import {
  CHANGE_INGREDIENTS_POPUP_STATE,
  CHANGE_ORDER_DETAILS_POPUP_STATE,
  CHANGE_ORDER_POPUP_STATE
} from "../actions/popup";
import {IPopupState} from "../types/types";

describe('popup reducer', () => {
  const initialState: IPopupState = {
    isOrderDetailsPopupOpen: false,
    isIngredientsPopupOpen: false,
    isOrderPopupOpen: false,
  };
  
  it('should return the initial state', () => {
    // @ts-ignore
    expect(popupReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle CHANGE_ORDER_DETAILS_POPUP_STATE', () => {
    const action = {
      type: CHANGE_ORDER_DETAILS_POPUP_STATE,
      payload: true
    }
    expect(
      popupReducer(initialState, action)
    ).toEqual({
      ...initialState,
      isOrderDetailsPopupOpen: true,
    })
  })

  it('should handle CHANGE_INGREDIENTS_POPUP_STATE', () => {
    const action = {
      type: CHANGE_INGREDIENTS_POPUP_STATE,
      payload: true
    }
    expect(
      popupReducer(initialState, action)
    ).toEqual({
      ...initialState,
      isIngredientsPopupOpen: true,
    })
  })

  it('should handle CHANGE_ORDER_POPUP_STATE', () => {
    const action = {
      type: CHANGE_ORDER_POPUP_STATE,
      payload: true
    }
    expect(
      popupReducer(initialState, action)
    ).toEqual({
      ...initialState,
      isOrderPopupOpen: true,
    })
  })
})