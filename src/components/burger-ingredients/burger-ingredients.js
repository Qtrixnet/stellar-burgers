import React from 'react';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from '../../utils/data';
import burgerIngredientsStyle from './burger-ingredients.module.css';

export default function BurgerIngredients() {
  const [current, setCurrent] = React.useState('bun')

  const itemTemplate = ({ image, price, name }, idx) => {
    return <li key={idx} className={burgerIngredientsStyle.list_item}>
      <img alt={name} src={image} className={`${burgerIngredientsStyle.image} ml-4 mr-4`} />
      <div className={`${burgerIngredientsStyle.price_info} mt-4 mb-4`}>
        <span className="text text_type_digits-default mr-2">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={`${burgerIngredientsStyle.text} text text_type_main-default`}>{name}</h3>
      <Counter count={1} size="default" />
    </li>
  }

  return (
    <div className={burgerIngredientsStyle.main_container}>
      <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
      <div className="" style={{ display: 'flex' }}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sause" active={current === 'sause'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${burgerIngredientsStyle.ingredients_container} mt-10 ingredients-container`}>
        <h2 className="mb-6 text text_type_main-medium">Булки</h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pb-10 pr-4 pl-4`}>
          {data.map((item, idx) => {
            if (item.type === 'bun') {
              return itemTemplate(item, idx)
            }
          })
          }
        </ul>
        <h2 className="mb-6 text text_type_main-medium">Соусы</h2>
        <div className={`${burgerIngredientsStyle.list} pt-6 pb-10 pr-4 pl-4`}>
          {data.map((item, idx) => {
            if (item.type === 'sauce') {
              return itemTemplate(item, idx)
            }
          })
          }
        </div>
        <h2 className="mb-6 text text_type_main-medium">Начинки</h2>
        <div className={`${burgerIngredientsStyle.list} pt-6 pb-10 pr-4 pl-4`}>
          {data.map((item, idx) => {
            if (item.type === 'main') {
              return itemTemplate(item, idx)
            }
          })
          }
        </div>
      </div>
    </div>
  );
};