import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import mainStyles from './main.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { addIngredient } from '../../services/actions/ingredients';
import {IIngredient} from "../../services/types/types";
import {FC} from 'react';
import {useDispatch, useSelector} from "../../services/hooks/hooks";

const Main: FC = () => {
  const dispatch = useDispatch();
  const chosenIngredients = useSelector((state) => state.ingredientsData.chosenIngredients);
  const initialIngredients = useSelector((state) => state.ingredientsData.ingredients);

  const handleDrop = (ingredientId: IIngredient) => {
    const targetIngredient = initialIngredients.find((ingredient: IIngredient) => ingredient._id === ingredientId._id)
    const selectedBun = chosenIngredients.find((ingredient: IIngredient) => ingredient.type === 'bun')
    // @ts-ignore
    const selectedBunIndex = chosenIngredients.indexOf(selectedBun)

    // @ts-ignore
    if (targetIngredient.type === 'bun' && selectedBun) {
      const chosenIngredientsClone = chosenIngredients.slice();
      // @ts-ignore
      chosenIngredientsClone.splice(selectedBunIndex, 1, targetIngredient);
      dispatch(addIngredient(chosenIngredientsClone));
    } else {
      // @ts-ignore
      dispatch(addIngredient([...chosenIngredients, targetIngredient]));
    }
  };

  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <section className={mainStyles.main_container}>
          <BurgerIngredients />
          <BurgerConstructor onDropHandler={handleDrop} />
        </section>
      </DndProvider>
    </main>
  );
};

export default Main;