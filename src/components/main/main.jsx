import { useDispatch, useSelector } from 'react-redux';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import mainStyles from './main.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Main() {
  const dispatch = useDispatch();
  const chosenIngredients = useSelector(state => state.ingredientsData.chosenIngredients);
  const initialIngredients = useSelector(state => state.ingredientsData.ingredients);

  const handleDrop = (ingredientId) => {
    const targetIngredient = initialIngredients.find(ingredient => ingredient._id === ingredientId._id)
    const selectedBun = chosenIngredients.find(ingredient => ingredient.type === 'bun')
    const selectedBunIndex = chosenIngredients.indexOf(selectedBun)

    if (targetIngredient.type === 'bun' && selectedBun) {
      const chosenIngredientsClone = chosenIngredients.slice();
      chosenIngredientsClone.splice(selectedBunIndex, 1, targetIngredient);
      dispatch({ type: 'ADD_INGREDIENT', payload: [...chosenIngredientsClone] });
    } else {
      dispatch({ type: 'ADD_INGREDIENT', payload: [...chosenIngredients, targetIngredient] });
    }
  };

  return (
    <main className={mainStyles.main}>
      <DndProvider backend={HTML5Backend}>
        <section className={mainStyles.main_container}>
          <BurgerIngredients />
          <BurgerConstructor onDropHandler={handleDrop} />
        </section>
      </DndProvider>
    </main>
  );
};
