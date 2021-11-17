import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal.module.css';

export default function Modal() {
  return (
    <div className={modalStyles.container}>
      <header className={modalStyles.header}>
        <p className="text text_type_main-large">
          Детали ингредиента
        </p>
        <div className={modalStyles.closeButton}>
          <CloseIcon type="primary" />
        </div>
      </header>
    </div>
  );
};