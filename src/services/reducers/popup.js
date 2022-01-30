import {
  CHANGE_ORDER_DETAILS_POPUP_STATE,
  CHANGE_INGREDIENTS_POPUP_STATE
} from '../actions/popup';

const initialState = {
  isOrderDetailsPopupOpen: false,
  isIngredientsPopupOpen: false,
};

export const popupReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_ORDER_DETAILS_POPUP_STATE: {
      return {
        ...state,
        isOrderDetailsPopupOpen: action.payload,
      };
    }
    case CHANGE_INGREDIENTS_POPUP_STATE: {
      return {
        ...state,
        isIngredientsPopupOpen: action.payload
      };
    }
    default: {
      return state;
    }
  }
};