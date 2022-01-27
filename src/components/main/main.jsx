import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import mainStyles from './main.module.css';
import PropTypes from 'prop-types';

export default function Main({
  setIsOrderDetailsPopupOpen,
  setIsIngredientsPopupOpen,
  setOrderData,
}) {

  return (
    <main className={mainStyles.main}>
      <section className={mainStyles.main_container}>
        <BurgerIngredients setIsIngredientsPopupOpen={setIsIngredientsPopupOpen} />
        <BurgerConstructor setOrderData={setOrderData} setIsOrderDetailsPopupOpen={setIsOrderDetailsPopupOpen} />
      </section>
    </main>
  );
};

Main.propTypes = {
  setIsOrderDetailsPopupOpen: PropTypes.func.isRequired,
  setIsIngredientsPopupOpen: PropTypes.func.isRequired,
  setOrderData: PropTypes.func.isRequired,
}; 