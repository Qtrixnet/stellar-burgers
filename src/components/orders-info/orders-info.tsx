import {FC} from 'react';
import orderInfoStyles from './orders-info.module.css';
import {IOrder} from "../../services/types/types";
import {useSelector} from "../../services/hooks/hooks";
import Loader from "../loader/loader";

const OrdersInfo: FC = () => {
  const total = useSelector((state) => state.ordersData.total)
  const totalToday = useSelector((state) => state.ordersData.totalToday)
  const orders = useSelector((state) => state.ordersData.orders)

  return (
    <div className={orderInfoStyles.container}>
      <>
        {
          orders.length > 0 ? (
            <>
              <div className={orderInfoStyles.order_numbers}>
                {
                  orders?.some((order: IOrder) => order.status === 'done') && (
                    <div className={orderInfoStyles.ready}>
                      <p className="text text_type_main-medium pb-6">
                        Готовы:
                      </p>
                      <div className={orderInfoStyles.numbers_container}>
                        <ul className={orderInfoStyles.list_accent}>
                          {
                            orders?.map((order: IOrder, idx: number) => {
                              if (idx < 10 && order.status === 'done') {
                                return (<li key={idx} className="text text_type_digits-default pb-2">
                                  {order.number}
                                </li>)
                              }
                              return null
                            })
                          }
                        </ul>
                        <ul className={orderInfoStyles.list_accent}>
                          {
                            orders?.map((order: IOrder, idx: number) => {
                              if (idx >= 10 && idx < 20 && order.status === 'done') {
                                return (<li key={idx} className="text text_type_digits-default pb-2">
                                  {order.number}
                                </li>)
                              }
                              return null
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  )
                }
                {
                  orders?.some((order: IOrder) => order.status === 'pending') && (
                    <div className={orderInfoStyles.atWork}>
                      <p className="text text_type_main-medium pb-6">
                        В работе:
                      </p>
                      <ul className={orderInfoStyles.list}>
                        {
                          orders?.map((order: IOrder, idx: number) => {
                            if (idx < 10 && order.status === 'pending') {
                              return (<li key={idx} className="text text_type_digits-default pb-2">
                                {order.number}
                              </li>)
                            }
                            return null
                          })
                        }
                      </ul>
                    </div>
                  )
                }
              </div>
              <div className={orderInfoStyles.all_time}>
                <p className="text text_type_main-medium">
                  Выполнено за все время:
                </p>
                <span className={`${orderInfoStyles.digits} text text_type_digits-large`}>{total}</span>
              </div>
              <div>
                <p className="text text_type_main-medium">
                  Выполнено за сегодня:
                </p>
                <span className={`${orderInfoStyles.digits} text text_type_digits-large`}>{totalToday}</span>
              </div>
            </>
          ) : (<Loader/>)
        }

      </>
    </div>
  );
};

export default OrdersInfo;
