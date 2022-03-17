import React from 'react';
import OrderFullInfoStyles from './order-full-info.module.css';

const OrderFullInfo = () => {
  return (
    <div className={OrderFullInfoStyles.container}>
      <div className={OrderFullInfoStyles.order_info}>
        <p className="text text_type_digits-default">#034533</p>
        <h2 className="text text_type_main-medium">Black Hole Singularity острый бургер</h2>
        <p className="text text_type_main-default">Выполнен</p>
        <h2 className="text text_type_main-medium">Состав:</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default OrderFullInfo;
