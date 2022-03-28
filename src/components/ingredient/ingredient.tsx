import ingredientStyles from "./ingredient.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {
  addIngredient,
  selectIngredient,
} from "../../services/actions/ingredients";
import {changeIngredientsPopupState} from "../../services/actions/popup";
import {Link, useLocation} from 'react-router-dom';
import {FC, MouseEvent, useEffect, useState} from 'react';
import {IIngredient, IIngredientProps} from "../../services/types/types";
import {useDispatch, useSelector} from "../../services/hooks/hooks";

const Ingredient: FC<IIngredientProps> = ({ingredient}) => {
  const {image, price, name, _id, type} = ingredient;
  const [isDisabled, setIsDisabled] = useState(true);

  const location = useLocation();

  const dispatch = useDispatch();
  const chosenIngredients = useSelector(
    (state) => state.ingredientsData.chosenIngredients
  );
  const initialIngredients = useSelector(
    (state) => state.ingredientsData.ingredients
  );

  const [{isDrag}, dragRef] = useDrag({
    type: "ingredient",
    item: {_id},
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  let ingredientCounter = 0;

  chosenIngredients.forEach(
    (ingredient: IIngredient) =>
      ingredient.name === name &&
      (ingredient.type === "bun"
        ? (ingredientCounter += 2)
        : (ingredientCounter += 1))
  );

  const handleChoseIngredient = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    const targetIngredient = initialIngredients.find(
      (ingredient: IIngredient) => ingredient._id === evt.currentTarget.dataset.id
    );
    const selectedBun = chosenIngredients.find(
      (ingredient: IIngredient) => ingredient.type === "bun"
    );
    // @ts-ignore
    const selectedBunIndex = chosenIngredients.indexOf(selectedBun);

    if (targetIngredient?.type === "bun" && selectedBun) {
      const chosenIngredientsClone = chosenIngredients.slice();
      chosenIngredientsClone.splice(selectedBunIndex, 1, targetIngredient);
      dispatch(addIngredient(chosenIngredientsClone));
    } else {
      // @ts-ignore
      dispatch(addIngredient([...chosenIngredients, targetIngredient]));
    }
  };

  const handleIngredientExplore = (evt: MouseEvent<HTMLLIElement>) => {
    const id = evt.currentTarget.dataset.id;
    const foundIngredient = initialIngredients.find(
      (ingredient: IIngredient) => ingredient._id === id
    );
    // @ts-ignore
    dispatch(selectIngredient(foundIngredient));
    dispatch(changeIngredientsPopupState(true));
  };
  
  useEffect(() => {
    if(type !== 'bun' && !chosenIngredients.some(ingredient => ingredient.type === 'bun')) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [chosenIngredients, type])

  return (
    <li
      data-id={_id}
      onContextMenu={handleChoseIngredient}
      onClick={handleIngredientExplore}
      className={`${ingredientStyles.list_item} ${isDrag && ingredientStyles.moving
      } ${type !== 'bun' ? isDisabled && ingredientStyles.list_item_disabled : ''}`}
      ref={dragRef}
    >
      <Link className={ingredientStyles.link} to={{
        pathname: `/ingredients/${_id}`,
        state: {background: location},
      }}>
        <img
          alt={name}
          src={image}
          className={`${ingredientStyles.image} ml-4 mr-4`}
        />
        <div className={`${ingredientStyles.price_info} mt-4 mb-4`}>
          <span className="text text_type_digits-default mr-2">{price}</span>
          <CurrencyIcon type="primary"/>
        </div>
        <h3 className={`${ingredientStyles.text} text text_type_main-default`}>
          {name}
        </h3>
        {ingredientCounter > 0 && (
          <Counter count={ingredientCounter} size="default"/>
        )}
        <div className={`${ingredientStyles.hint_icons}`}>
          <span className={`${ingredientStyles.left_click_icon}`}/>
          <span className={`${ingredientStyles.right_click_icon}`}/>
          <span className={`${ingredientStyles.drag_icon}`}/>
        </div>
      </Link>
    </li>
  );
};

export default Ingredient;
