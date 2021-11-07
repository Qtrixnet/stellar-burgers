import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import mainStyles from './main.module.css';

export default function Main() {
  return (
    <main className={mainStyles.main}>
      <section className={mainStyles.main_container}>
        <BurgerIngredients />
        <BurgerConstructor />
      </section>
    </main>
  ); 
};