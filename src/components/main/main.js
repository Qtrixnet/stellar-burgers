import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import mainStyles from './main.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import Modal from '../modal/modal';

export default function Main({ ingredientsData }) {
  return (
    <main className={mainStyles.main}>
      <section className={mainStyles.main_container}>
        <BurgerIngredients ingredientsData={ingredientsData} />
        <BurgerConstructor ingredientsData={ingredientsData} />
        <ModalOverlay>
          <Modal />
        </ModalOverlay>
      </section>
    </main>
  );
};