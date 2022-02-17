import ingredientStyles from "./ingredient.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import {
  addIngredient,
  selectIngredient,
} from "../../services/actions/ingredients";
import { changeIngredientsPopupState } from "../../services/actions/popup";
import PropTypes from "prop-types";
import { Link, useLocation } from 'react-router-dom';

const Ingredient = ({ ingredient }) => {
  const { image, price, name, _id } = ingredient;

  const location = useLocation();

  const dispatch = useDispatch();
  const chosenIngredients = useSelector(
    (state) => state.ingredientsData.chosenIngredients
  );
  const initialIngredients = useSelector(
    (state) => state.ingredientsData.ingredients
  );

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredient",
    item: { _id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  let ingredientCounter = 0;

  chosenIngredients.forEach(
    (ingredient) =>
      ingredient.name === name &&
      (ingredient.type === "bun"
        ? (ingredientCounter += 2)
        : (ingredientCounter += 1))
  );

  const handleChoseIngredient = (evt) => {
    evt.preventDefault();
    const targetIngredient = initialIngredients.find(
      (ingredient) => ingredient._id === evt.currentTarget.dataset.id
    );
    const selectedBun = chosenIngredients.find(
      (ingredient) => ingredient.type === "bun"
    );
    const selectedBunIndex = chosenIngredients.indexOf(selectedBun);

    if (targetIngredient.type === "bun" && selectedBun) {
      const chosenIngredientsClone = chosenIngredients.slice();
      chosenIngredientsClone.splice(selectedBunIndex, 1, targetIngredient);
      dispatch(addIngredient(chosenIngredientsClone));
    } else {
      dispatch(addIngredient([...chosenIngredients, targetIngredient]));
    }
  };

  const handleIngredientExplore = (evt) => {
    const id = evt.currentTarget.dataset.id;
    const foundIngredient = initialIngredients.find(
      (ingredient) => ingredient._id === id
    );
    dispatch(selectIngredient(foundIngredient));
    dispatch(changeIngredientsPopupState(true));
  };

  return (
    <li
      data-id={_id}
      onContextMenu={handleChoseIngredient}
      onClick={handleIngredientExplore}
      className={`${ingredientStyles.list_item} ${isDrag && ingredientStyles.moving
        }`}
      ref={dragRef}
    >
      <Link className={ingredientStyles.link} to={{
        pathname: `/ingredients/${_id}`,
        state: { background: location },
      }}>
        <img
          alt={name}
          src={image}
          className={`${ingredientStyles.image} ml-4 mr-4`}
        />
        <div className={`${ingredientStyles.price_info} mt-4 mb-4`}>
          <span className="text text_type_digits-default mr-2">{price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className={`${ingredientStyles.text} text text_type_main-default`}>
          {name}
        </h3>
        {ingredientCounter > 0 && (
          <Counter count={ingredientCounter} size="default" />
        )}
        <div className={`${ingredientStyles.hint_icons}`}>
          <span className={`${ingredientStyles.left_click_icon}`}></span>
          <span className={`${ingredientStyles.right_click_icon}`}></span>
          <span className={`${ingredientStyles.drag_icon}`}></span>
        </div>
      </Link>
    </li>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
};

export default Ingredient;
