import { useContext, useMemo } from 'react';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import mainApi from '../../utils/Api';
import { ChosenIngredientsContext } from '../../services/chosenIngredientsContext';

export default function BurgerConstructor({ setIsOrderDetailsPopupOpen, setOrderData, setChosenIngredients }) {
  const chosenIngredients = useContext(ChosenIngredientsContext);

  const totalSumm = useMemo(() => chosenIngredients.reduce((acc, cur) => cur.type === 'bun' ? acc + (cur.price * 2) : acc + cur.price, 0), [chosenIngredients])

  const handleOrderButtonClick = () => {

    const ingredientsIds = chosenIngredients.map(ingredient => ingredient._id)

    mainApi.sendIngredients(ingredientsIds)
      .then(data => {
        setOrderData(data)
        setIsOrderDetailsPopupOpen(true)
      })
      .catch(err => { console.log(err) })
      .finally(() => { })
  }

  const handleDeleteIngredient = (item) => (e) => {
    const selectedIngredientIndex = chosenIngredients.indexOf(item)
    const chosenIngredientsClone = chosenIngredients.slice();
    chosenIngredientsClone.splice(selectedIngredientIndex, 1);
    setChosenIngredients([...chosenIngredientsClone])
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
        <Button onClick={handleOrderButtonClick} className="pt-10" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  setIsOrderDetailsPopupOpen: PropTypes.func.isRequired,
  setChosenIngredients: PropTypes.func.isRequired,
  setOrderData: PropTypes.func.isRequired,
};