import {
  GET_ORDER_DATA,
  GET_ORDER_DATA_FAILED,
  GET_ORDER_DATA_SUCCESS,
  DELETE_ORDER_DATA
} from '../actions/order';

const initialState = {
  orderDetails: null,
  orderRequest: false,
  orderFailed: false,
};

// @ts-ignore
export const orderReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_ORDER_DATA: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case GET_ORDER_DATA_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case GET_ORDER_DATA_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderDetails: action.payload,
      };
    }
    case DELETE_ORDER_DATA: {
      return {
        ...state,
        orderDetails: null,
      };
    }
    default: {
      return state;
    }
  }
};