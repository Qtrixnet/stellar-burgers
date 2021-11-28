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
  setIsOrderDetailsPopupOpen: PropTypes.func.isRequired,
  setIsIngredientsPopupOpen: PropTypes.func.isRequired,
  setSelectedIngredient: PropTypes.func.isRequired,
  ingredientsData: PropTypes.arrayOf(PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    __v: PropTypes.number,
    _id: PropTypes.string.isRequired,
  })).isRequired,
}; 