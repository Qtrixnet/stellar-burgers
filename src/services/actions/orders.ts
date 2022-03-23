export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ALL_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';

export const WS_USER_ORDERS_CONNECTION_START: 'WS_USER_ORDERS_CONNECTION_START' = 'WS_USER_ORDERS_CONNECTION_START';
export const WS_USER_ORDERS_CONNECTION_SUCCESS: 'WS_USER_ORDERS_CONNECTION_SUCCESS' = 'WS_USER_ORDERS_CONNECTION_SUCCESS';
export const WS_USER_ORDERS_CONNECTION_ERROR: 'WS_USER_ORDERS_CONNECTION_ERROR' = 'WS_USER_ORDERS_CONNECTION_ERROR';
export const WS_USER_ORDERS_CONNECTION_CLOSED: 'WS_USER_ORDERS_CONNECTION_CLOSED' = 'WS_USER_ORDERS_CONNECTION_CLOSED';
export const WS_GET_USER_ORDERS: 'WS_GET_USER_ORDERS' = 'WS_GET_USER_ORDERS';

export interface IWSAllOrdersConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWSUserOrdersConnectionStart {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_START;
}

export const wsAllOrdersConnectionStart = () => {
  return {
    type: WS_CONNECTION_START
  };
};

export const wsUserOrdersConnectionStart = () => {
  return {
    type: WS_USER_ORDERS_CONNECTION_START
  };
};

export const wsAllOrdersConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED
  };
};

export const wsUserOrdersConnectionClosed = () => {
  return {
    type: WS_USER_ORDERS_CONNECTION_CLOSED
  };
};
