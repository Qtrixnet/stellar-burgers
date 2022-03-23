import React, {FC, useEffect} from 'react';
import {wsUserOrdersConnectionClosed, wsUserOrdersConnectionStart} from "../../services/actions/orders";
import {useDispatch} from "../../services/hooks/hooks";

const UserOrdersWrapper: FC = ({children}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsUserOrdersConnectionStart());

    return () => {
      dispatch(wsUserOrdersConnectionClosed())
    }
  }, [dispatch])

  return (
    <>
      {children}
    </>
  );
};

export default UserOrdersWrapper;
