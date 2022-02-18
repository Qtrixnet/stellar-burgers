import { useSelector, useDispatch } from "react-redux";
import ingredientDetailsStyles from "./ingredient-details.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { selectIngredient } from "../../services/actions/ingredients";
import PropTypes from "prop-types";

const IngredientDetails = ({ title }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.ingredientsData.ingredients);

  const selectedIngredient = useSelector(
    (state) => state.ingredientsData.selectedIngredient
  );

  useEffect(() => {
    ingredients.forEach((ingredient) => {
      location.pathname.includes(ingredient._id) &&
        dispatch(selectIngredient(ingredient));
    });
  }, [ingredients, dispatch, location.pathname]);

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

IngredientDetails.propTypes = {
  title: PropTypes.string,
};

export default IngredientDetails;
