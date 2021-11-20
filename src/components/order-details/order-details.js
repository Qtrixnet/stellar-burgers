import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import orderDetailsStyles from './order-details.module.css';
import doneGif from '../../images/done.gif'

export default function OrderDetails() {
  return (
    <div className={`pt-15 pr-10 pl-10 pb-30 ${orderDetailsStyles.container}`}>
      <header className={orderDetailsStyles.header}>
        <div className={orderDetailsStyles.closeButton}>
          <CloseIcon type="primary" />
        </div>
      </header>
      <div>
        <h3 className={`text text_type_digits-large pt-15 ${orderDetailsStyles.title}`}>034536</h3>
        <p className="text text_type_main-medium pt-8 pb-15">
          идентификатор заказа
        </p>
        <img className="pb-15" src={doneGif} alt="чекаут"/>
        <p className="text text_type_main-default pb-2">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </div>
  );
};