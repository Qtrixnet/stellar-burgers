import ingredientStyles from './ingredient.module.css';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function Ingredient({ ingredient }) {
  const { image, price, name, _id } = ingredient;

  const dispatch = useDispatch();
  const chosenIngredients = useSelector(state => state.ingredientsData.chosenIngredients);
  const initialIngredients = useSelector(state => state.ingredientsData.ingredients);

  const ingredientRef = useRef();

  let ingredientCounter = 0;

  // setIngredientsCounter(prevState => prevState + 2) : setIngredientsCounter(prevState => prevState + 1)
  // const [ingredientCounter, setIngredientsCounter] = useState(0)

  chosenIngredients.forEach(ingredient => ingredient.name === name && (ingredient.type === 'bun' ? ingredientCounter += 2 : ingredientCounter += 1))

  // const handleMouseDown = (e) => {
  //   setIngredientDrag(true);

  //   setCursorPosition({
  //     ...cursorPosition,
  //     x: e.clientX - e.currentTarget.getBoundingClientRect().left,
  //     y: e.clientY - e.currentTarget.getBoundingClientRect().top
  //   });
  // };

  // const handleMouseMove = (e) => {
  //   if (!isIngredientDragging) return;
  //   e.stopPropagation();
  //   e.preventDefault();

  //   setIngredientPosition({
  //     ...ingredientPosition,
  //     x: e.clientX - cursorPosition.x,
  //     y: e.clientY - cursorPosition.y
  //   });
  // };

  // const handleMouseUp = () => {
  //   setIngredientDrag(false);
  // };

  const handleChoseIngredient = (evt) => {
    const targetIngredient = initialIngredients.find(ingredient => ingredient._id === evt.currentTarget.dataset.id)
    const selectedBun = chosenIngredients.find(ingredient => ingredient.type === 'bun')
    const selectedBunIndex = chosenIngredients.indexOf(selectedBun)

    if (targetIngredient.type === 'bun' && selectedBun) {
      const chosenIngredientsClone = chosenIngredients.slice();
      chosenIngredientsClone.splice(selectedBunIndex, 1, targetIngredient);
      dispatch({ type: 'ADD_INGREDIENT', payload: [...chosenIngredientsClone] });
    } else {
      dispatch({ type: 'ADD_INGREDIENT', payload: [...chosenIngredients, targetIngredient] });
    }
  }

  const handleIngredientExplore = (evt) => {
    evt.preventDefault()
    const id = evt.currentTarget.dataset.id
    const foundIngredient = initialIngredients.find(ingredient => ingredient._id === id)
    dispatch({ type: 'SELECT_INGREDIENT', payload: foundIngredient });
    dispatch({ type: 'CHANGE_INGREDIENTS_POPUP_STATE', payload: true });
  }

  return (
    <li data-id={_id} ref={ingredientRef} onClick={handleChoseIngredient} onContextMenu={handleIngredientExplore} className={ingredientStyles.list_item}>
      <img alt={name} src={image} className={`${ingredientStyles.image} ml-4 mr-4`} />
      <div className={`${ingredientStyles.price_info} mt-4 mb-4`}>
        <span className="text text_type_digits-default mr-2">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={`${ingredientStyles.text} text text_type_main-default`}>{name}</h3>
      {ingredientCounter > 0 && <Counter count={ingredientCounter} size="default" />}
      <div className={`${ingredientStyles.hint_icons}`}>
        <span className={`${ingredientStyles.left_click_icon}`}></span>
        <span className={`${ingredientStyles.right_click_icon}`}></span>
        <span className={`${ingredientStyles.drag_icon}`}></span>
      </div>
    </li>
  )
}

export default Ingredient;
