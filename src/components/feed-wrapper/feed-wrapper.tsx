import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "../../services/hooks/hooks";
import {wsAllOrdersConnectionClosed, wsAllOrdersConnectionStart} from "../../services/actions/orders";
import {IFeedWrapperProps} from "../../services/types/types";

const FeedWrapper: FC<IFeedWrapperProps> = ({children}) => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.ordersData.orders)

  useEffect(() => {
    orders.length <= 0 && dispatch(wsAllOrdersConnectionStart());

    return () => {
      orders.length > 0 && dispatch(wsAllOrdersConnectionClosed())
    }
  }, [dispatch])

  return (
    <>
      {children}
    </>
  );
};

export default FeedWrapper;
