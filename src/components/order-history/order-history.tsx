import React, {FC} from 'react';
import orderHistoryStyles from './order-history.module.css';
import OrderComponent from "../order-component/order-component";
import {RootStateOrAny, useSelector} from "react-redux";
import {IOrder} from "../../services/types/types";

const OrderHistory: FC = () => {
  const userOrders = useSelector((state: RootStateOrAny) => state.ordersData.userOrders)
  return (
    <ul className={orderHistoryStyles.list}>
      {
        userOrders?.map((order: IOrder, idx: number) => (
          <OrderComponent key={idx} isHistory={true} order={order}/>
        ))
      }
    </ul>
  )
};

export default OrderHistory;
