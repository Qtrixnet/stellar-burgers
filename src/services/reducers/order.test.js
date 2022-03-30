import {orderReducer} from './order';
import {DELETE_ORDER_DATA, GET_ORDER_DATA, GET_ORDER_DATA_FAILED, GET_ORDER_DATA_SUCCESS} from "../actions/order";

describe('order reducer', () => {
  it('should return the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual({
      orderDetails: null,
      orderRequest: false,
      orderFailed: false,
    })
  })

  it('should handle GET_ORDER_DATA', () => {
    expect(
      orderReducer({}, {
        type: GET_ORDER_DATA,
      })
    ).toEqual({
      orderRequest: true,
      orderFailed: false,
    })
  })

  it('should handle GET_ORDER_DATA_FAILED', () => {
    expect(
      orderReducer({}, {
        type: GET_ORDER_DATA_FAILED,
      })
    ).toEqual({
      orderRequest: false,
      orderFailed: true,
    })
  })

  it('should handle GET_ORDER_DATA_SUCCESS', () => {
    expect(
      orderReducer({}, {
        type: GET_ORDER_DATA_SUCCESS,
      })
    ).toEqual({
      orderRequest: false,
      // orderDetails: action.payload,
    })
  })

  it('should handle DELETE_ORDER_DATA', () => {
    expect(
      orderReducer({}, {
        type: DELETE_ORDER_DATA,
      })
    ).toEqual({
      orderDetails: null,
    })
  })
})