import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientDetailsStyles from './ingredient-details.module.css';

export default function IngredientDetails({ ingredientsData, onCloseButtonClick }) {
  return (
    <div className={`pt-15 pr-10 pl-10 pb-15 ${ingredientDetailsStyles.container}`}>
      <header className={ingredientDetailsStyles.header}>
        <p className="text text_type_main-large">
          Детали ингредиента
        </p>
        <div onClick={onCloseButtonClick} className={ingredientDetailsStyles.closeButton}>
          <CloseIcon type="primary" />
        </div>
      </header>
      {ingredientsData && <div>
        <img width="480" height="240" alt={ingredientsData.name} src={ingredientsData && ingredientsData.image} />
        <p className="text text_type_main-medium pt-4 pb-8">{ingredientsData && ingredientsData.name}</p>
        <ul className={`${ingredientDetailsStyles.list} pt-8`}>
          <li className={`${ingredientDetailsStyles.listItem} text text_type_main-default text_color_inactive`}>
            <span>
              Калории,ккал
            </span>
            {ingredientsData.calories}
          </li>
          <li className={`${ingredientDetailsStyles.listItem} text text_type_main-default text_color_inactive`}>
            <span>
              Белки, г
            </span>
            {ingredientsData.proteins}
          </li>
          <li className={`${ingredientDetailsStyles.listItem} text text_type_main-default text_color_inactive`}>
            <span>
              Жиры, г
            </span>
            {ingredientsData.fat}
          </li>
          <li className={`${ingredientDetailsStyles.listItem} text text_type_main-default text_color_inactive`}>
            <span>
              Углеводы, г
            </span>
            {ingredientsData.carbohydrates}
          </li>
        </ul>
      </div>}
    </div>
  );
};