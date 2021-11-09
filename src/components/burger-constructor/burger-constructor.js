import React from 'react';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { composeData } from '../../utils/data';
import burgerConstructorStyle from './burger-constructor.module.css';

export default function BurgerConstructor() {
  const total = composeData.reduce((acc, cur) => acc + cur.price, 0)

  return (
    <div className={`${burgerConstructorStyle.constructor_container} pt-25`}>
      <div className="pr-6">
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${composeData[0].name} (верх)`}
          price={composeData[0].price}
          thumbnail={composeData[0].image}
        />
      </div>
      <ul className={`${burgerConstructorStyle.list} pl-4 pr-4`}>
        {composeData.map((ingredient, idx) => idx > 0 && idx < composeData.length - 1 && (
          <li key={idx} className={burgerConstructorStyle.list_item}>
            <DragIcon />
            <ConstructorElement
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image}
            />
          </li>
        )
        )}
      </ul>
      <div className="pr-6">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${composeData[composeData.length - 1].name} (низ)`}
          price={composeData[composeData.length - 1].price}
          thumbnail={composeData[composeData.length - 1].image}
        />
      </div>

      <div className={`${burgerConstructorStyle.button_container} pt-6 pr-6`}>
        <div className='mr-10'>
          <span className="text text_type_digits-medium mr-2">{total}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button className="pt-10" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};