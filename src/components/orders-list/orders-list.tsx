import React from 'react';
import orderListStyles from './orders-list.module.css';
import {allOrdersData} from './mock-data';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const OrderList = () => {
  return (
    <div className={orderListStyles.main_container}>
      <h1 className="mt-10 mb-5 text text_type_main-large">Лента заказов</h1>
      <div
        className={`${orderListStyles.orders_container} mt-10 ingredients-container`}>
        <ul className={`${orderListStyles.list} pt-6 pb-10 pr-4 pl-4`}>
          {
            allOrdersData.map(order => (
              <article key={order.id} className={`p-6 ${orderListStyles.list_item}`}>
                <div className={orderListStyles.header}>
                  <p className="text text_type_digits-default">{`#${order.order}`}</p>
                  <p className="text text_type_main-default text_color_inactive">{order.timestamp}</p>
                </div>
                <h2 className="text text_type_main-medium">{order.name}</h2>
                <div className={orderListStyles.footer}>
                  <ul className={orderListStyles.ingredients_list}>
                    {
                      order.ingredients.map(ingredient => (
                        <li className={orderListStyles.ingredients_listItem}>
                          <img className={orderListStyles.ingredients_listItemImage} src={ingredient.image} alt={ingredient.image}/>
                        </li>
                      ))
                    }
                  </ul>
                  <div className={orderListStyles.total}>
                    <span className="text text_type_digits-default">{order.total}</span>
                    <CurrencyIcon type="primary"/>
                  </div>
                </div>
              </article>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default OrderList;
