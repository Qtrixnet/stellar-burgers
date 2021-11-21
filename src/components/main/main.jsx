import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import mainStyles from './main.module.css';
import PropTypes from 'prop-types';

export default function Main({
  setIsOrderDetailsPopupOpen,
  setIsIngredientsPopupOpen,
  setSelectedIngredient,
  ingredientsData
}) {
  return (
    <main className={mainStyles.main}>
      <section className={mainStyles.main_container}>
        <BurgerIngredients setSelectedIngredient={setSelectedIngredient} setIsIngredientsPopupOpen={setIsIngredientsPopupOpen} ingredientsData={ingredientsData} />
        <BurgerConstructor setIsOrderDetailsPopupOpen={setIsOrderDetailsPopupOpen} ingredientsData={ingredientsData}/>
      </section>
    </main>
  );
};

Main.propTypes = {
  setIsOrderDetailsPopupOpen: PropTypes.func,
  setIsIngredientsPopupOpen: PropTypes.func,
  setSelectedIngredient: PropTypes.func,
  ingredientsData: PropTypes.array
}; 