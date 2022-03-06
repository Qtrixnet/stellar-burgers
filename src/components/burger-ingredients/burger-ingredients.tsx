import { useState, MouseEvent} from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyle from './burger-ingredients.module.css';
import { compareCoords } from '../../utils/compare-coords';
import Ingredient from '../ingredient/ingredient';
import {IIngredient} from "../../services/types/types";

const BurgerIngredients = () => {
  const initialIngredients = useSelector((state: RootStateOrAny) => state.ingredientsData.ingredients)

  const [current, setCurrent] = useState('bun')

  const scrollHandler = (evt: MouseEvent<HTMLDivElement>) => {
    evt.target.addEventListener('scroll', function () {
      setCurrent(compareCoords(burgerIngredientsStyle.main_container))
    });
  }

  const handleTabClick = (type: string) => {
    setCurrent(type)
    document.querySelector<HTMLElement>(`#${type}`)?.scrollIntoView({ block: "start", behavior: "smooth" })
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
      <div onScroll={scrollHandler} className={`${burgerIngredientsStyle.ingredients_container} mt-10 ingredients-container`}>
        <h2 id="bun" className="mb-6 text text_type_main-medium">
          Булки
        </h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pb-10 pr-4 pl-4`}>
          {initialIngredients.map((item: IIngredient) => item.type === 'bun' && <Ingredient key={item._id} ingredient={item} />)}
        </ul>
        <h2 id="sauce" className="mb-6 text text_type_main-medium">
          Соусы
        </h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pb-10 pr-4 pl-4`}>
          {initialIngredients.map((item: IIngredient) => item.type === 'sauce' && <Ingredient key={item._id} ingredient={item} />)}
        </ul>
        <h2 id="main" className="mb-6 text text_type_main-medium">
          Начинки
        </h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pb-10 pr-4 pl-4`}>
          {initialIngredients.map((item: IIngredient) => item.type === 'main' && <Ingredient key={item._id} ingredient={item} />)}
        </ul>
      </div>
    </div>
  );
};

export default BurgerIngredients;