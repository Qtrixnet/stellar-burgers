import {orderReducer} from './order';
import {DELETE_ORDER_DATA, GET_ORDER_DATA, GET_ORDER_DATA_FAILED, GET_ORDER_DATA_SUCCESS} from "../actions/order";
import {IOrderState} from "../types/types";

describe('order reducer', () => {
  const initialState: IOrderState = {
    orderDetails: null,
    orderRequest: false,
    orderFailed: false,
  };

  it('should return the initial state', () => {
    // @ts-ignore
    expect(orderReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle GET_ORDER_DATA', () => {
    const action = {
      type: GET_ORDER_DATA,
    }

    expect(
      orderReducer(initialState, action)
    ).toEqual({
      ...initialState,
      orderRequest: true,
    })
  })

  it('should handle GET_ORDER_DATA_FAILED', () => {
    const prevState = {
      ...initialState,
      orderRequest: true,
    }

    const action = {
      type: GET_ORDER_DATA_FAILED,
    }

    expect(
      orderReducer(prevState, action)
    ).toEqual({
      ...prevState,
      orderRequest: false,
      orderFailed: true,
    })
  })

  it('should handle GET_ORDER_DATA_SUCCESS', () => {
    const prevState = {
      ...initialState,
      orderRequest: true,
    }

    const action = {
      type: GET_ORDER_DATA_SUCCESS,
      payload: []
    }

    expect(
      orderReducer(prevState, action)
    ).toEqual({
      ...prevState,
      orderRequest: false,
      orderDetails: action.payload,
    })
  })

  it('should handle DELETE_ORDER_DATA', () => {
    const prevState = {
      ...initialState,
      orderDetails: [],
    }

    const action = {
      type: DELETE_ORDER_DATA,
    }

    expect(
      orderReducer(prevState, action)
    ).toEqual({
      ...prevState,
      orderDetails: null,
    })
  })
})