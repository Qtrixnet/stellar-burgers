import {AppDispatch, ISocketActions, RootState} from "../types/types";
import type {Middleware, MiddlewareAPI} from 'redux';

export const socketMiddleware = (wsUrl: string, wsActions: ISocketActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action) => {
      const {dispatch, getState} = store;
      const {type} = action;
      const {wsInit, onOpen, onClose, onError, onMessage} = wsActions;
      const {userData} = getState();
      if (type === wsInit && userData) {
        socket = new WebSocket(`${wsUrl}?token=${userData?.accessToken?.replace('Bearer ', '')}`);
      }
      if (type === onClose) {
        socket && socket.close(1000,	'CLOSE_NORMAL')
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({type: onOpen, payload: event});
        };

        socket.onerror = event => {
          dispatch({type: onError, payload: event});
        };

        socket.onmessage = event => {
          const {data} = event;
          const parsedData = JSON.parse(data);
          const {success, ...restParsedData} = parsedData;

          dispatch({type: onMessage, payload: restParsedData});
        };

        socket.onclose = event => {
          dispatch({type: onClose, payload: event});
        };
      }

      next(action);
    };
  }) as Middleware;
};