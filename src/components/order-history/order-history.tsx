import React, {FC, useEffect} from 'react';
import orderHistoryStyles from './order-history.module.css';
import OrderComponent from "../order-component/order-component";
import {IOrder} from "../../services/types/types";
import {wsUserOrdersConnectionClosed, wsUserOrdersConnectionStart} from "../../services/actions/orders";
import {useDispatch, useSelector} from "../../services/hooks/hooks";
import Loader from "../loader/loader";

const OrderHistory: FC = () => {
  const userOrders = useSelector((state) => state.ordersData.userOrders)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsUserOrdersConnectionStart());

    return () => {
      dispatch(wsUserOrdersConnectionClosed())
    }
  }, [dispatch])

  return (
    <ul className={orderHistoryStyles.list}>
      <>
        {
          userOrders.length > 0 ? (
            <>
              {
                userOrders.map((order: IOrder, idx: number) => (
                  <OrderComponent key={idx} isHistory={true} order={order}/>
                ))
              }
            </>
          ) : (<Loader/>)
        }
      </>
    </ul>
  )
};

export default OrderHistory;
