import orderDetailsStyles from './order-details.module.css';
import doneGif from '../../images/done.gif';
import PropTypes from 'prop-types';

export default function OrderDetails({ orderData }) {

  return (
    <div>
      <h3 className={`text text_type_digits-large pt-15 ${orderDetailsStyles.title}`}>{orderData.orderNumber}</h3>
      <p className="text text_type_main-medium pt-8 pb-15">
        идентификатор заказа
      </p>
      <img className="pb-15" src={doneGif} alt="чекаут" />
      <p className="text text_type_main-default pb-2">
        {orderData.isOrderCooking ? 'Ваш заказ начали готовить' : 'Ваш заказ в очереди на приготовление'}
      </p>
      {orderData.isOrderCooking && (<p className="text text_type_main-default text_color_inactive pb-15">
        Дождитесь готовности на орбитальной станции
      </p>)}
    </div>
  );
};

OrderDetails.propTypes = {
  orderData: PropTypes.bool.isRequired,
}; 