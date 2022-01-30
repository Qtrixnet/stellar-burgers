import { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './burger-constructor.module.css';
import { getOrderData } from '../../services/actions/order'
import { useDrop } from "react-dnd";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ChosenIngredient from '../chosen-ingredient/chosen-ingredient';
import update from 'immutability-helper';
import { sortIngredients } from '../../services/actions/ingredients';
import { changeOrderDetailsPopupState } from '../../services/actions/popup';
import PropTypes from 'prop-types';

const BurgerConstructor = ({ onDropHandler }) => {
  const dispatch = useDispatch();
  const chosenIngredients = useSelector(state => state.ingredientsData.chosenIngredients);

  const totalSumm = useMemo(() => chosenIngredients.reduce((acc, cur) => cur.type === 'bun' ? acc + (cur.price * 2) : acc + cur.price, 0), [chosenIngredients])

  const [{ isHover }, burgerIngredientsContainer] = useDrop({
    accept: "ingredient",
    drop(ingredientId) {
      onDropHandler(ingredientId);
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  const moveIngredient = useCallback((dragIndex, hoverIndex) => {
    const ingredientWithTypeBan = chosenIngredients.filter(ingredient => ingredient.type === 'bun')
    const ingredientsWithoutBan = chosenIngredients.filter(ingredient => ingredient.type !== 'bun')
    const sortedIngredients = update(ingredientsWithoutBan, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, ingredientsWithoutBan[dragIndex]],
      ],
    }, [ingredientsWithoutBan])
    const sortedInregientsWithBun = [...ingredientWithTypeBan, ...sortedIngredients]

    dispatch(sortIngredients([...sortedInregientsWithBun]));

  }, [chosenIngredients, dispatch]);

  const borderColor = isHover ? '#5147F8' : 'transparent';

  const handleOrderButtonClick = () => {
    const ingredientsIds = chosenIngredients.map(ingredient => ingredient._id)
    dispatch(getOrderData(ingredientsIds))
    dispatch(changeOrderDetailsPopupState(true))
  }

  const bunElementHandler = (chosenIngredients, property, trueValue, falseValue) => chosenIngredients.find(ingredient => ingredient.type === 'bun') ? `${(chosenIngredients.find(ingredient => ingredient.type === 'bun'))[property]} ${trueValue}` : falseValue

  return (
    <DndProvider backend={HTML5Backend}>
      <div ref={burgerIngredientsContainer} style={{ borderColor }} className={`${burgerConstructorStyle.constructor_container} mt-25 pt-5 pb-5`}>
        <div className={`${burgerConstructorStyle.constructor_element} pr-5`}>
          {
            chosenIngredients.length > 0 ? <ConstructorElement
              type="top"
              isLocked={true}
              text={bunElementHandler(chosenIngredients, 'name', '(верх)', 'Выберите булку')}
              price={bunElementHandler(chosenIngredients, 'price', '', '0')}
              thumbnail={bunElementHandler(chosenIngredients, 'image', '', '')}

            /> : <p className="text text_type_main-large pt-3">
              Выберите булку
            </p>
          }
        </div>
        <ul className={`${burgerConstructorStyle.list} pl-4 pr-4`}>
          {chosenIngredients.map((ingredient, idx) =>
            ingredient.type !== 'bun' && <ChosenIngredient key={ingredient.uuid} index={idx} moveIngredient={moveIngredient} ingredient={ingredient} id={`${ingredient._id}${idx}`} />
          )}
        </ul>
        <div className="pr-5">
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

        <div className={`${burgerConstructorStyle.button_container} pt-5 pr-5`}>
          <div className='mr-10'>
            <span className="text text_type_digits-medium mr-2">{totalSumm}</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button disabled={chosenIngredients.length > 0 ? false : true} onClick={handleOrderButtonClick} className="pt-10" type="primary" size="medium">
            Оформить заказ
          </Button>
        </div>
      </div>
    </DndProvider>
  );
};

BurgerConstructor.propTypes = {
  onDropHandler: PropTypes.func.isRequired,
};

export default BurgerConstructor;