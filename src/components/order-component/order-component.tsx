import React from 'react';
import orderComponentStyles from "./order-component.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
// @ts-ignore
const OrderComponent = ({order}) => {
  return (
    <li className={`p-6 ${orderComponentStyles.list_item}`}>
      <div className={orderComponentStyles.header}>
        <p className="text text_type_digits-default">{`#${order.order}`}</p>
        <p className="text text_type_main-default text_color_inactive">{order.timestamp}</p>
      </div>
      <h2 className="text text_type_main-medium">{order.name}</h2>
      <div className={orderComponentStyles.footer}>
        <ul className={orderComponentStyles.ingredients_list}>
          {
            // @ts-ignore
            order.ingredients.map(ingredient => (
              <li className={orderComponentStyles.ingredients_list_item}>
                <img className={orderComponentStyles.ingredients_list_item_image} src={ingredient.image}
                     alt={ingredient.image}/>
              </li>
            ))
          }
        </ul>
        <div className={orderComponentStyles.total}>
          <span className="text text_type_digits-default">{order.total}</span>
          <CurrencyIcon type="primary"/>
        </div>
      </div>
    </li>
  );
};

export default OrderComponent;
