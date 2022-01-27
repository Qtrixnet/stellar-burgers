import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import mainStyles from './main.module.css';
import PropTypes from 'prop-types';

export default function Main({
  setIsOrderDetailsPopupOpen,
  setIsIngredientsPopupOpen,
  setSelectedIngredient,
  setOrderData,
  setChosenIngredients
}) {

  return (
    <main className={mainStyles.main}>
      <section className={mainStyles.main_container}>
        <BurgerIngredients setChosenIngredients={setChosenIngredients} setSelectedIngredient={setSelectedIngredient} setIsIngredientsPopupOpen={setIsIngredientsPopupOpen} />
        <BurgerConstructor setOrderData={setOrderData} setChosenIngredients={setChosenIngredients} setIsOrderDetailsPopupOpen={setIsOrderDetailsPopupOpen} />
      </section>
    </main>
  );
};

Main.propTypes = {
  setIsOrderDetailsPopupOpen: PropTypes.func.isRequired,
  setIsIngredientsPopupOpen: PropTypes.func.isRequired,
  setSelectedIngredient: PropTypes.func.isRequired,
  setOrderData: PropTypes.func.isRequired,
  setChosenIngredients: PropTypes.func.isRequired,
}; 