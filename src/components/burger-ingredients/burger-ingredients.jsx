import { useState, useContext } from 'react';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyle from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { IngredientsContext } from '../../services/ingredientsContext';
import { ChosenIngredientsContext } from '../../services/chosenIngredientsContext';

export default function BurgerIngredients({ setIsIngredientsPopupOpen, setSelectedIngredient, setChosenIngredients }) {
  const initialIngredients = useContext(IngredientsContext);
  const chosenIngredients = useContext(ChosenIngredientsContext);

  const [current, setCurrent] = useState('bun')

  const handleTabClick = (type) => {
    setCurrent(type)
    document.querySelector(`#${type}`).scrollIntoView({ block: "start", behavior: "smooth" })
  }

  const handleIngredientExplore = (evt) => {
    const id = evt.currentTarget.dataset.id
    const foundIngredient = initialIngredients.find(ingredient => ingredient._id === id)
    setSelectedIngredient(foundIngredient)
    setIsIngredientsPopupOpen(true)
  }

  const handleChoseIngredient = (evt) => {
    const targetIngredient = initialIngredients.find(ingredient => ingredient._id === evt.currentTarget.dataset.id)
    const selectedBun = chosenIngredients.find(ingredient => ingredient.type === 'bun')
    const selectedBunIndex = chosenIngredients.indexOf(selectedBun)

    if (targetIngredient.type === 'bun' && selectedBun) {
      const chosenIngredientsClone = chosenIngredients.slice();
      chosenIngredientsClone.splice(selectedBunIndex, 1, targetIngredient);
      setChosenIngredients([...chosenIngredientsClone])
    } else {
      setChosenIngredients([...chosenIngredients, targetIngredient])
    }
  }

  const itemTemplate = ({ image, price, name, _id }) => {
    let ingredientCounter = 0;
    chosenIngredients.forEach(ingredient => ingredient.name === name && (ingredient.type === 'bun' ? ingredientCounter += 2 : ingredientCounter += 1))

    return (<li data-id={_id} key={_id} onClick={handleChoseIngredient} onDoubleClick={handleIngredientExplore} className={burgerIngredientsStyle.list_item}>
      <img alt={name} src={image} className={`${burgerIngredientsStyle.image} ml-4 mr-4`} />
      <div className={`${burgerIngredientsStyle.price_info} mt-4 mb-4`}>
        <span className="text text_type_digits-default mr-2">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={`${burgerIngredientsStyle.text} text text_type_main-default`}>{name}</h3>
      <Counter count={ingredientCounter} size="default" />
    </li>)
  }

  return (
    <div className={burgerIngredientsStyle.main_container}>
      <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="bun" active={current === 'bun'} onClick={handleTabClick}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={handleTabClick}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={handleTabClick}>
          Начинки
        </Tab>
      </div>
      <div className={`${burgerIngredientsStyle.ingredients_container} mt-10 ingredients-container`}>
        <h2 id="bun" className="mb-6 text text_type_main-medium">
          Булки
        </h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pb-10 pr-4 pl-4`}>
          {initialIngredients.map((item) => item.type === 'bun' && itemTemplate(item))}
        </ul>
        <h2 id="sauce" className="mb-6 text text_type_main-medium">
          Соусы
        </h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pb-10 pr-4 pl-4`}>
          {initialIngredients.map((item) => item.type === 'sauce' && itemTemplate(item))}
        </ul>
        <h2 id="main" className="mb-6 text text_type_main-medium">
          Начинки
        </h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pb-10 pr-4 pl-4`}>
          {initialIngredients.map((item) => item.type === 'main' && itemTemplate(item))}
        </ul>
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  setIsIngredientsPopupOpen: PropTypes.func.isRequired,
  setSelectedIngredient: PropTypes.func.isRequired,
  setChosenIngredients: PropTypes.func.isRequired,
};