import {rootReducer} from './reducers';
import thunk from 'redux-thunk';
import {compose, createStore, applyMiddleware} from 'redux';
import {socketMiddleware} from './middleware/socketMiddleware';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ALL_ORDERS,
  WS_GET_USER_ORDERS,
  WS_USER_ORDERS_CONNECTION_START,
  WS_USER_ORDERS_CONNECTION_SUCCESS,
  WS_USER_ORDERS_CONNECTION_ERROR, WS_USER_ORDERS_CONNECTION_CLOSED
} from './actions/orders';
import {ALL_ORDERS_URL, USER_ORDERS_URL} from "../utils/constants";

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const wsAllOrdersActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ALL_ORDERS
};

const wsUserOrdersActions = {
  wsInit: WS_USER_ORDERS_CONNECTION_START,
  onOpen: WS_USER_ORDERS_CONNECTION_SUCCESS,
  onClose: WS_USER_ORDERS_CONNECTION_CLOSED,
  onError: WS_USER_ORDERS_CONNECTION_ERROR,
  onMessage: WS_GET_USER_ORDERS
};

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(ALL_ORDERS_URL, wsAllOrdersActions), socketMiddleware(USER_ORDERS_URL, wsUserOrdersActions)));

export const store = createStore(rootReducer, enhancer);
