import orderDetailsStyles from './order-details.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import doneGif from '../../images/done.gif';
import PropTypes from 'prop-types';

export default function OrderDetails({ orderData, popupCloseHandler}) {

  return (
    <div className={`${orderDetailsStyles.container} pt-15 pr-10 pl-10 pb-15`}>
      <header className={orderDetailsStyles.header}>
        <button onClick={() => popupCloseHandler(false)} className={orderDetailsStyles.closeButton}>
          <CloseIcon type="primary" />
        </button>
      </header>
      <h3 className={`text text_type_digits-large pt-10 ${orderDetailsStyles.title}`}>{orderData.orderNumber}</h3>
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
  orderData: PropTypes.object.isRequired,
  popupCloseHandler: PropTypes.func.isRequired,
};