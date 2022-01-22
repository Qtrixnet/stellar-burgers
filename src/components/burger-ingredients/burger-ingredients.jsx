import { useState, useContext } from 'react';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyle from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { IngredientsContext } from '../../services/ingredientsContext';

export default function BurgerIngredients({ setIsIngredientsPopupOpen, setSelectedIngredient }) {
  const ingredients = useContext(IngredientsContext);

  const [current, setCurrent] = useState('bun')

  const handleIngredientClick = (evt) => {
    const id = evt.currentTarget.dataset.id
    const foundIngredient = ingredients.find(ingredient => ingredient._id === id)
    setSelectedIngredient(foundIngredient)
    setIsIngredientsPopupOpen(true)
  }

  const itemTemplate = ({ image, price, name, _id }) => {
    return (<li data-id={_id} key={_id} onClick={handleIngredientClick} className={burgerIngredientsStyle.list_item}>
      <img alt={name} src={image} className={`${burgerIngredientsStyle.image} ml-4 mr-4`} />
      <div className={`${burgerIngredientsStyle.price_info} mt-4 mb-4`}>
        <span className="text text_type_digits-default mr-2">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={`${burgerIngredientsStyle.text} text text_type_main-default`}>{name}</h3>
      <Counter count={1} size="default" />
    </li>)
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
          {ingredients.map((item) => item.type === 'bun' && itemTemplate(item))}
        </ul>
        <h2 className="mb-6 text text_type_main-medium">Соусы</h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pb-10 pr-4 pl-4`}>
          {ingredients.map((item) => item.type === 'sauce' && itemTemplate(item))}
        </ul>
        <h2 className="mb-6 text text_type_main-medium">Начинки</h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pb-10 pr-4 pl-4`}>
          {ingredients.map((item) => item.type === 'main' && itemTemplate(item))}
        </ul>
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  setIsIngredientsPopupOpen: PropTypes.func.isRequired,
  setSelectedIngredient: PropTypes.func.isRequired,
};