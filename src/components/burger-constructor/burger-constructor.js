import React from 'react';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { composeData } from '../../utils/data';
import burgerConstructorStyle from './burger-constructor.module.css';

export default function BurgerConstructor() {
  const total = composeData.reduce((acc, cur) => acc + cur.price, 0)

  return (
    <ul className={`${burgerConstructorStyle.list} pl-4 pr-4 pt-25`}>
      {composeData.map((ingredient, idx) => {
        const topOrBottom = idx === 0 && 'top' || idx === composeData.length - 1 && 'bottom'
        return <li key={idx} className={burgerConstructorStyle.list_item}>
          {!topOrBottom && <DragIcon />}
          <ConstructorElement
            type={topOrBottom}
            isLocked={topOrBottom}
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
          />
        </li>
      })}
      <div className="pt-6">
        <span className="text text_type_digits-medium mr-2">{total}</span>
        <CurrencyIcon type="primary" />
        <Button className="ml-10" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </ul>
  );
};