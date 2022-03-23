import orderDetailsStyles from './order-details.module.css';
import doneGif from '../../images/done.gif';
import {FC} from 'react';
import {useSelector} from "../../services/hooks/hooks";

const OrderDetails:FC = () => {
  const orderData = useSelector((state) => state.orderData.orderDetails);
  return (
    <>
      {
        orderData ? (
          <div className={`${orderDetailsStyles.container}`}>
            <h3 className={`text text_type_digits-large pt-10 ${orderDetailsStyles.title}`}>{
              // @ts-ignore
              orderData.order.number
            }</h3>
            <p className="text text_type_main-medium pt-8 pb-15">
              идентификатор заказа
            </p>
            <img className="pb-15" src={doneGif} alt="чекаут" />
            <p className={`text text_type_main-default pb-2 ${orderDetailsStyles.text}`}>
              {
                // @ts-ignore
                orderData.success ? `Ваш '${orderData.name
                }' начали готовить` : 'Ваш заказ в очереди на приготовление'}
            </p>
            {// @ts-ignore
              orderData.success && (<p className="text text_type_main-default text_color_inactive pb-15">
              Дождитесь готовности на орбитальной станции
            </p>)
            }
          </div>
        ) : null
      }
    </>
  );
};

export default OrderDetails;