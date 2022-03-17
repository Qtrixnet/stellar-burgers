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
          <ul className={orderInfoStyles.list_accent}>
            <li className="text text_type_digits-default pb-2">
              1234567890
            </li>
            <li className="text text_type_digits-default pb-2">
              1234567890
            </li>
            <li className="text text_type_digits-default pb-2">
              1234567890
            </li>
            <li className="text text_type_digits-default pb-2">
              1234567890
            </li>
            <li className="text text_type_digits-default pb-2">
              1234567890
            </li>
          </ul>
        </div>
        <div className={orderInfoStyles.atWork}>
          <p className="text text_type_main-medium pb-6">
            В работе:
          </p>
          <ul className={orderInfoStyles.list}>
            <li className="text text_type_digits-default pb-2">
              1234567890
            </li>
            <li className="text text_type_digits-default pb-2">
              1234567890
            </li>
            <li className="text text_type_digits-default pb-2">
              1234567890
            </li>
          </ul>
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
        <span className={`${orderInfoStyles.digits} text text_type_digits-large`}>138</span>
      </div>
    </div>
  );
};

export default OrderInfo;
