import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './burger-constructor.module.css';
import PropTypes from 'prop-types';

export default function BurgerConstructor({ setIsOrderDetailsPopupOpen, chosenIngredients }) {

  const totalSumm = chosenIngredients.reduce((acc, cur) => cur.type === 'bun' ? acc + (cur.price * 2) : acc + cur.price, 0)

  const handleOrderButtonClick = () => {
    setIsOrderDetailsPopupOpen(true)
  }

  const bunElementHandler = (chosenIngredients, property, trueValue, falseValue) => chosenIngredients.find(ingredient => ingredient.type === 'bun') ? `${(chosenIngredients.find(ingredient => ingredient.type === 'bun'))[property]} ${trueValue}` : falseValue

  return (
    <div className={`${burgerConstructorStyle.constructor_container} pt-25`}>
      <div className={`${burgerConstructorStyle.constructor_element} pr-6`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bunElementHandler(chosenIngredients, 'name', '(верх)', 'Выберите булку')}
          price={bunElementHandler(chosenIngredients, 'price', '', '0')}
          thumbnail={bunElementHandler(chosenIngredients, 'image', '', '')}

        />
      </div>
      <ul className={`${burgerConstructorStyle.list} pl-4 pr-4`}>
        {chosenIngredients.map((ingredient, idx) =>
          ingredient.type !== 'bun' && <li key={`${ingredient._id}${idx}`} className={burgerConstructorStyle.list_item}>
            <DragIcon />
            <ConstructorElement
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image}
            />
          </li>
        )}
      </ul>
      <div className="pr-6">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bunElementHandler(chosenIngredients, 'name', '(низ)', 'Выберите булку')}
          price={bunElementHandler(chosenIngredients, 'price', '', '0')}
          thumbnail={bunElementHandler(chosenIngredients, 'image', '', '')}
        />
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
  chosenIngredients: PropTypes.array.isRequired
};