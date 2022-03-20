import React from 'react';
import orderComponentStyles from "./order-component.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from 'react-router-dom';

// @ts-ignore
const OrderComponent = ({order}) => {
  return (
    <li>
      <Link className={orderComponentStyles.link} to={`/`}>
        <div className={orderComponentStyles.header}>
          <p className="text text_type_digits-default">{`#${order.order}`}</p>
          <p className="text text_type_main-default text_color_inactive">{order.timestamp}</p>
        </div>
        <h2 className="text text_type_main-medium">{order.name}</h2>
        {
          order.status && <p className="text text_type_main-default">{order.status}</p>
        }
        <div className={orderComponentStyles.footer}>
          <ul className={orderComponentStyles.ingredients_list}>
            {
              // @ts-ignore
              order.ingredients.map((ingredient, idx) => (
                <li key={idx} className={orderComponentStyles.ingredients_list_item}>
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
      </Link>
    </li>
  );
};

export default OrderComponent;
