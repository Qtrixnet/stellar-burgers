import { useContext } from 'react';
import ingredientDetailsStyles from './ingredient-details.module.css';
import { SelectedIngredientContext } from '../../services/selectedIngredientContext';

export default function IngredientDetails() {
  const selectedIngredient = useContext(SelectedIngredientContext);

  return (
    <div className={`${ingredientDetailsStyles.container}`}>
      <img width="480" height="240" alt={selectedIngredient.name} src={selectedIngredient && selectedIngredient.image} />
      <p className="text text_type_main-medium pt-4 pb-8">{selectedIngredient && selectedIngredient.name}</p>
      <ul className={`${ingredientDetailsStyles.list} pt-8`}>
        <li className={`${ingredientDetailsStyles.listItem} text text_type_main-default text_color_inactive`}>
          <span>
            Калории,ккал
          </span>
          {selectedIngredient.calories}
        </li>
        <li className={`${ingredientDetailsStyles.listItem} text text_type_main-default text_color_inactive`}>
          <span>
            Белки, г
          </span>
          {selectedIngredient.proteins}
        </li>
        <li className={`${ingredientDetailsStyles.listItem} text text_type_main-default text_color_inactive`}>
          <span>
            Жиры, г
          </span>
          {selectedIngredient.fat}
        </li>
        <li className={`${ingredientDetailsStyles.listItem} text text_type_main-default text_color_inactive`}>
          <span>
            Углеводы, г
          </span>
          {selectedIngredient.carbohydrates}
        </li>
      </ul>
    </div>
  );
};
