import { useSelector, RootStateOrAny } from "react-redux";
import ingredientDetailsStyles from "./ingredient-details.module.css";
import { useParams } from "react-router-dom";
import {IIngredient, IIngredientDetailsProps} from "../../services/types/types";
import {FC} from 'react'

const IngredientDetails: FC<IIngredientDetailsProps>= ({ title }) => {
  const { id } = useParams();

  const ingredients = useSelector((state: RootStateOrAny) => state.ingredientsData.ingredients);

  const selectedIngredient = ingredients.find((ingredient: IIngredient) => ingredient._id === id)

  return (
    <>
      {selectedIngredient && (
        <div className={`${ingredientDetailsStyles.container}`}>
          {title && (<h2 className={`${ingredientDetailsStyles.title} text text_type_main-large`}>{title}</h2>)}
          <img
            width="480"
            height="240"
            alt={selectedIngredient.name}
            src={selectedIngredient && selectedIngredient.image}
          />
          <p className="text text_type_main-medium pt-4 pb-8">
            {selectedIngredient && selectedIngredient.name}
          </p>
          <ul className={`${ingredientDetailsStyles.list} pt-8`}>
            <li
              className={`${ingredientDetailsStyles.listItem} text text_type_main-default text_color_inactive`}
            >
              <span>Калории,ккал</span>
              {selectedIngredient.calories}
            </li>
            <li
              className={`${ingredientDetailsStyles.listItem} text text_type_main-default text_color_inactive`}
            >
              <span>Белки, г</span>
              {selectedIngredient.proteins}
            </li>
            <li
              className={`${ingredientDetailsStyles.listItem} text text_type_main-default text_color_inactive`}
            >
              <span>Жиры, г</span>
              {selectedIngredient.fat}
            </li>
            <li
              className={`${ingredientDetailsStyles.listItem} text text_type_main-default text_color_inactive`}
            >
              <span>Углеводы, г</span>
              {selectedIngredient.carbohydrates}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default IngredientDetails;
