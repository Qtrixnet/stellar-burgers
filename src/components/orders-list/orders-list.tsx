import React from 'react';
import orderListStyles from './orders-list.module.css';
import OrderComponent from "../order-component/order-component";
import {useSelector, RootStateOrAny} from 'react-redux';
import {IOrder} from "../../services/types/types";

const OrderSList = () => {
  const orders = useSelector((state:RootStateOrAny) => state.ordersData.orders)
  return (
    <div className={orderListStyles.main_container}>
      <h1 className="mt-10 mb-5 text text_type_main-large">Лента заказов</h1>
      <div
        className={`${orderListStyles.orders_container} mt-10 ingredients-container`}>
        <ul className={`${orderListStyles.list} pt-6 pb-10 pr-4 pl-4`}>
          {
            orders?.map((order: IOrder, idx: number) => (
              <OrderComponent key={idx} order={order}/>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default OrderSList;
