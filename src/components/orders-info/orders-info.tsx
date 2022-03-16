import React from 'react';
import orderInfoStyles from './orders-info.module.css';

const OrderInfo = () => {
  return (
    <div className={orderInfoStyles.container}>
      <div className={orderInfoStyles.order_numbers}>
        <div className={orderInfoStyles.ready}>
          <p className="text text_type_main-medium pb-6">
            Готовы:
          </p>
          <p className="text text_type_digits-default">1234567890</p>
          <p className="text text_type_digits-default">1234567890</p>
          <p className="text text_type_digits-default">1234567890</p>
          <p className="text text_type_digits-default">1234567890</p>
        </div>
        <div className={orderInfoStyles.atWork}>
          <p className="text text_type_main-medium pb-6">
            В работе:
          </p>
          <p className="text text_type_digits-default">1234567890</p>
          <p className="text text_type_digits-default">1234567890</p>
          <p className="text text_type_digits-default">1234567890</p>
          <p className="text text_type_digits-default">1234567890</p>
        </div>
      </div>
      <div className={orderInfoStyles.all_time}>
        <p className="text text_type_main-medium">
          Выполнено за все время:
        </p>
        <span className={`${orderInfoStyles.digits} text text_type_digits-large`}>28 752</span>
      </div>
      <div>
        <p className="text text_type_main-medium">
          Выполнено за сегодня:
        </p>
        <span className="text text_type_digits-large">138</span>
      </div>
    </div>
  );
};

export default OrderInfo;
