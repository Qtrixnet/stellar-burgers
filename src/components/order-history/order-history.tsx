import React, {FC} from 'react';
import orderHistoryStyles from './order-history.module.css';
import {allOrdersData} from "../orders-list/mock-data";
import OrderComponent from "../order-component/order-component";

const OrderHistory: FC = () => {
  return (
    <ul className={orderHistoryStyles.list}>
      {
        allOrdersData.map((order, idx) => (
          <OrderComponent key={idx} order={order}/>
        ))
      }
    </ul>
  )
};

export default OrderHistory;
