import React from 'react';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { composeData } from '../../utils/data';
import burgerConstructorStyle from './burger-constructor.module.css';

export default function BurgerConstructor() {
  const total = composeData.reduce((acc, cur) => acc + cur.price, 0)

  return (
    <div className="pt-25">
      <ul className={`${burgerConstructorStyle.list} pl-4 pr-4`}>
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
        <div className={`${burgerConstructorStyle.button_container} pt-6`}>
          <div className='mr-10'>
            <span className="text text_type_digits-medium mr-2">{total}</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button className="pt-10" type="primary" size="medium">
            Оформить заказ
          </Button>
        </div>
      </ul>
    </div>
  );
};