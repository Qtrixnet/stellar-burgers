import {
  GET_ORDER_DATA
} from '../actions/order';

const initialState = {
  orderDetails: null
};

export const orderReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_ORDER_DATA: {
      return {
        ...state,
        orderDetails: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};