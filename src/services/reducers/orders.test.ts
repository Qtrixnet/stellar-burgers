import {ordersReducer} from './orders';
import {IOrdersState} from "../types/types";
import {
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ALL_ORDERS,
  WS_USER_ORDERS_CONNECTION_CLOSED,
  WS_USER_ORDERS_CONNECTION_ERROR,
  WS_USER_ORDERS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_GET_USER_ORDERS,
  GET_ORDER_INFO,
  GET_ORDER_INFO_SUCCESS,
  GET_ORDER_INFO_FAILED,
  CLEAN_ORDER_INFO
} from "../actions/orders";

describe('orders reducer', () => {
  const initialState: IOrdersState = {
    wsAllOrders: false,
    wsUserOrders: false,
    orders: [],
    userOrders: [],
    total: 0,
    totalToday: 0,
    orderInfoRequest: false,
    orderInfoFailed: false,
    orderInfo: null,
  };

  it('should be return initial state', () => {
    // @ts-ignore
    expect(ordersReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle WS_CONNECTION_SUCCESS', () => {
    const action = {
      type: WS_CONNECTION_SUCCESS,
    }
    expect(
      ordersReducer(initialState, action)
    ).toEqual({
      ...initialState,
      allOrdersError: undefined,
      wsAllOrders: true
    })
  })

  it('should handle WS_USER_ORDERS_CONNECTION_SUCCESS', () => {
    const action = {
      type: WS_USER_ORDERS_CONNECTION_SUCCESS,
    }
    expect(
      ordersReducer(initialState, action)
    ).toEqual({
      ...initialState,
      userOrdersError: undefined,
      wsUserOrders: true
    })
  })

  it('should handle WS_CONNECTION_ERROR', () => {
    const prevState = {
      ...initialState,
      wsALLOrders: true,
    }
    const action = {
      type: WS_CONNECTION_ERROR,
      payload: 'Error'
    }
    expect(
      ordersReducer(prevState, action)
    ).toEqual({
      ...prevState,
      allOrdersError: action.payload,
      wsAllOrders: false
    })
  })

  it('should handle WS_USER_ORDERS_CONNECTION_ERROR', () => {
    const prevState = {
      ...initialState,
      wsUserOrders: true
    }

    const action = {
      type: WS_USER_ORDERS_CONNECTION_ERROR,
      payload: 'Error'
    }

    expect(
      ordersReducer(prevState, action)
    ).toEqual({
      ...prevState,
      userOrdersError: action.payload,
      wsUserOrders: false
    })
  })

  it('should handle WS_CONNECTION_CLOSED', () => {
    const prevState = {
      ...initialState,
      wsALLOrders: true,
      orders: [{}, {}, {}],
      total: 1,
      totalToday: 1,
    }

    const action = {
      type: WS_CONNECTION_CLOSED,
    }

    expect(
      // @ts-ignore
      ordersReducer(prevState, action)
    ).toEqual({
      ...prevState,
      allOrdersError: undefined,
      wsAllOrders: false,
      orders: [],
      total: 0,
      totalToday: 0,
    })
  })

  it('should handle WS_USER_ORDERS_CONNECTION_CLOSED', () => {
    const prevState = {
      ...initialState,
      wsUserOrders: true,
      userOrders: [{}, {}, {}],
      total: 1,
      totalToday: 1,
    }

    const action = {
      type: WS_USER_ORDERS_CONNECTION_CLOSED,
    }

    expect(
      // @ts-ignore
      ordersReducer(prevState, action)
    ).toEqual({
      ...prevState,
      userOrdersError: undefined,
      wsUserOrders: false,
      userOrders: [],
      total: 0,
      totalToday: 0,
    })
  })

  it('should handle WS_GET_ALL_ORDERS', () => {
    const action = {
      type: WS_GET_ALL_ORDERS,
      payload: {
        orders: [],
        total: 1,
        totalToday: 1,
      }
    }

    expect(
      ordersReducer(initialState, action)
    ).toEqual({
      ...initialState,
      allOrdersError: undefined,
      orders: action.payload.orders,
      total: action.payload.total,
      totalToday: action.payload.totalToday,
    })
  })

  it('should handle WS_GET_USER_ORDERS', () => {
    const action = {
      type: WS_GET_USER_ORDERS,
      payload: {
        orders: [],
        total: 1,
        totalToday: 1,
      }
    }

    expect(
      ordersReducer(initialState, action)
    ).toEqual({
      ...initialState,
      allOrdersError: undefined,
      userOrders: action.payload.orders,
    })
  })

  it('should handle GET_ORDER_INFO', () => {
    const action = {
      type: GET_ORDER_INFO,
    }

    expect(
      ordersReducer(initialState, action)
    ).toEqual({
      ...initialState,
      orderInfoRequest: true,
      orderInfoFailed: false,
    })
  })

  it('should handle GET_ORDER_INFO_SUCCESS', () => {
    const prevState = {
      ...initialState,
      orderInfoRequest: true
    }

    const action = {
      type: GET_ORDER_INFO_SUCCESS,
      payload: [{}],
    }

    expect(
      ordersReducer(prevState, action)
    ).toEqual({
      ...prevState,
      orderInfoRequest: false,
      orderInfo: action.payload,
    })
  })

  it('should handle GET_ORDER_INFO_FAILED', () => {
    const prevState = {
      ...initialState,
      orderInfoRequest: true
    }

    const action = {
      type: GET_ORDER_INFO_FAILED,
    }

    expect(
      ordersReducer(prevState, action)
    ).toEqual({
      ...prevState,
      orderInfoRequest: false,
      orderInfoFailed: true,
    })
  })

  it('should handle CLEAN_ORDER_INFO', () => {
    const prevState = {
      ...initialState,
      orderInfo: {}
    }

    const action = {
      type: CLEAN_ORDER_INFO,
    }

    expect(
      // @ts-ignore
      ordersReducer(prevState, action)
    ).toEqual({
      ...prevState,
      orderInfoRequest: false,
      orderInfoFailed: false,
      orderInfo: null,
    })
  })
})