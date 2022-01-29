import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import mainStyles from './main.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Main() {

  return (
    <main className={mainStyles.main}>
      <DndProvider backend={HTML5Backend}>
        <section className={mainStyles.main_container}>
          <BurgerIngredients />
          <BurgerConstructor />
        </section>
      </DndProvider>
    </main>
  );
};
