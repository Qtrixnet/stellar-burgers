import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './burger-constructor.module.css';
import { getOrderData } from '../../services/actions/order'

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const chosenIngredients = useSelector(state => state.ingredientsData.chosenIngredients);

  const totalSumm = useMemo(() => chosenIngredients.reduce((acc, cur) => cur.type === 'bun' ? acc + (cur.price * 2) : acc + cur.price, 0), [chosenIngredients])

  const handleOrderButtonClick = () => {
    const ingredientsIds = chosenIngredients.map(ingredient => ingredient._id)
    dispatch(getOrderData(ingredientsIds))
    dispatch({ type: 'CHANGE_ORDER_DETAILS_POPUP_STATE', payload: true })
  }

  const handleDeleteIngredient = (item) => (e) => {
    const selectedIngredientIndex = chosenIngredients.indexOf(item)
    const chosenIngredientsClone = chosenIngredients.slice();
    chosenIngredientsClone.splice(selectedIngredientIndex, 1);
    dispatch({ type: 'DELETE_INGREDIENT', payload: chosenIngredientsClone });
  }

  const bunElementHandler = (chosenIngredients, property, trueValue, falseValue) => chosenIngredients.find(ingredient => ingredient.type === 'bun') ? `${(chosenIngredients.find(ingredient => ingredient.type === 'bun'))[property]} ${trueValue}` : falseValue

  return (
    <div className={`${burgerConstructorStyle.constructor_container} pt-25`}>
      <div className={`${burgerConstructorStyle.constructor_element} pr-6`}>
        {
          chosenIngredients.length > 0 ? <ConstructorElement
            type="top"
            isLocked={true}
            text={bunElementHandler(chosenIngredients, 'name', '(верх)', 'Выберите булку')}
            price={bunElementHandler(chosenIngredients, 'price', '', '0')}
            thumbnail={bunElementHandler(chosenIngredients, 'image', '', '')}

          /> : <p className="text text_type_main-medium pt-8 pb-15">
            Выберите булку
          </p>
        }
      </div>
      <ul className={`${burgerConstructorStyle.list} pl-4 pr-4`}>
        {chosenIngredients.map((ingredient, idx) =>
          ingredient.type !== 'bun' && <li key={`${ingredient._id}${idx}`} className={burgerConstructorStyle.list_item}>
            <DragIcon />
            <ConstructorElement
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image}
              handleClose={handleDeleteIngredient(ingredient)}
            />
          </li>
        )}
      </ul>
      <div className="pr-6">
        {
          chosenIngredients.length > 0 && <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bunElementHandler(chosenIngredients, 'name', '(низ)', 'Выберите булку')}
            price={bunElementHandler(chosenIngredients, 'price', '', '0')}
            thumbnail={bunElementHandler(chosenIngredients, 'image', '', '')}
          />
        }
      </div>

      <div className={`${burgerConstructorStyle.button_container} pt-6 pr-6`}>
        <div className='mr-10'>
          <span className="text text_type_digits-medium mr-2">{totalSumm}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button disabled={chosenIngredients.length > 0 ? false : true} onClick={handleOrderButtonClick} className="pt-10" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};