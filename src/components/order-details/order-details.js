import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import orderDetailsStyles from './order-details.module.css';
import doneGif from '../../images/done.gif'

export default function OrderDetails({onCloseButtonClick, orderData }) {

  return (
    <div className={`pt-15 pr-10 pl-10 pb-30 ${orderDetailsStyles.container}`}>
      <header className={orderDetailsStyles.header}>
        <div onClick={onCloseButtonClick} className={orderDetailsStyles.closeButton}>
          <CloseIcon type="primary" />
        </div>
      </header>
      <div>
        <h3 className={`text text_type_digits-large pt-15 ${orderDetailsStyles.title}`}>{orderData.orderNumber}</h3>
        <p className="text text_type_main-medium pt-8 pb-15">
          идентификатор заказа
        </p>
        <img className="pb-15" src={doneGif} alt="чекаут" />
        <p className="text text_type_main-default pb-2">
          {orderData.isOrderCoocking ? 'Ваш заказ начали готовить' : 'Ваш заказ в очереди на приготовление'}
        </p>
        {orderData.isOrderCoocking && <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>}
      </div>
    </div>
  );
};