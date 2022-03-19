import React from 'react';
import OrderFullInfoStyles from './order-full-info.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const OrderFullInfo = () => {
  return (
    <div className={OrderFullInfoStyles.container}>
      <div className={OrderFullInfoStyles.order_info}>
        <p className={`text text_type_digits-default pb-10 ${OrderFullInfoStyles.order_number}`}>#034533</p>
        <h2 className="text text_type_main-medium pb-3">Black Hole Singularity острый бургер</h2>
        <p className={`text text_type_main-default pb-15 ${OrderFullInfoStyles.order_status}`}>Выполнен</p>
        <p className="text text_type_main-medium pb-6">Состав:</p>
        <ul className={OrderFullInfoStyles.list}>
          <li className={OrderFullInfoStyles.list_item}>
            <img className={OrderFullInfoStyles.image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt=""/>
            <h3 className={`text text_type_main-default ${OrderFullInfoStyles.title}`}>Флюоресцентная булка R2-D3</h3>
            <div className={`text text_type_digits-default ${OrderFullInfoStyles.item_currency}`}>
              <span>2</span>
              x
              <div className={OrderFullInfoStyles.item_currency_container}>
                <span>20</span>
                <CurrencyIcon type="primary"/>
              </div>
            </div>
          </li>
          <li className={OrderFullInfoStyles.list_item}>
            <img className={OrderFullInfoStyles.image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt=""/>
            <h3 className={`text text_type_main-default ${OrderFullInfoStyles.title}`}>Флюоресцентная булка R2-D3</h3>
            <div className={`text text_type_digits-default ${OrderFullInfoStyles.item_currency}`}>
              <span>2</span>
              x
              <div className={OrderFullInfoStyles.item_currency_container}>
                <span>20</span>
                <CurrencyIcon type="primary"/>
              </div>
            </div>
          </li>
          <li className={OrderFullInfoStyles.list_item}>
            <img className={OrderFullInfoStyles.image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt=""/>
            <h3 className={`text text_type_main-default ${OrderFullInfoStyles.title}`}>Флюоресцентная булка R2-D3</h3>
            <div className={`text text_type_digits-default ${OrderFullInfoStyles.item_currency}`}>
              <span>2</span>
              x
              <div className={OrderFullInfoStyles.item_currency_container}>
                <span>20</span>
                <CurrencyIcon type="primary"/>
              </div>
            </div>
          </li>
          <li className={OrderFullInfoStyles.list_item}>
            <img className={OrderFullInfoStyles.image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt=""/>
            <h3 className={`text text_type_main-default ${OrderFullInfoStyles.title}`}>Флюоресцентная булка R2-D3</h3>
            <div className={`text text_type_digits-default ${OrderFullInfoStyles.item_currency}`}>
              <span>2</span>
              x
              <div className={OrderFullInfoStyles.item_currency_container}>
                <span>20</span>
                <CurrencyIcon type="primary"/>
              </div>
            </div>
          </li>
        </ul>
        <div className={OrderFullInfoStyles.footer}>
          <p className="text text_type_main-default text_color_inactive">Вчера, 13:50 i-GMT+3</p>
          <div className={OrderFullInfoStyles.currency_container}>
            <span className="text text_type_digits-default">510</span>
            <CurrencyIcon type="primary"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFullInfo;
