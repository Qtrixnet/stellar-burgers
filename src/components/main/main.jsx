import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import mainStyles from './main.module.css';
import PropTypes from 'prop-types';

export default function Main({
  setIsOrderDetailsPopupOpen,
  setIsIngredientsPopupOpen,
  setSelectedIngredient,
}) {

  return (
    <main className={mainStyles.main}>
      <section className={mainStyles.main_container}>
        <BurgerIngredients setSelectedIngredient={setSelectedIngredient} setIsIngredientsPopupOpen={setIsIngredientsPopupOpen} />
        <BurgerConstructor setIsOrderDetailsPopupOpen={setIsOrderDetailsPopupOpen} />
      </section>
    </main>
  );
};

Main.propTypes = {
  setIsOrderDetailsPopupOpen: PropTypes.func.isRequired,
  setIsIngredientsPopupOpen: PropTypes.func.isRequired,
  setSelectedIngredient: PropTypes.func.isRequired,
}; 