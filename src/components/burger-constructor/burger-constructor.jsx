import { useMemo, useContext } from 'react'
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { orderedIngredientsId } from '../../utils/data';
import burgerConstructorStyle from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import { IngredientsContext } from '../../services/ingredientsContext';

export default function BurgerConstructor({ setIsOrderDetailsPopupOpen }) {
  const ingredients = useContext(IngredientsContext);

  const burgerComposition = useMemo(() => {
    const burger = []
    orderedIngredientsId.forEach(id => {
      ingredients.forEach(ingredient => {
        ingredient._id === id && burger.push(ingredient)
      })
    })
    return burger;
  }, [ingredients])

  const total = burgerComposition.reduce((acc, cur) => acc + cur.price, 0)

  const handleOrderButtonClick = () => {
    setIsOrderDetailsPopupOpen(true)
  }

  return (
    <div className={`${burgerConstructorStyle.constructor_container} pt-25`}>
      <div className="pr-6">
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${burgerComposition[0] && burgerComposition[0].name} (верх)`}
          price={burgerComposition[0] && burgerComposition[0].price}
          thumbnail={burgerComposition[0] && burgerComposition[0].image}
        />
      </div>
      <ul className={`${burgerConstructorStyle.list} pl-4 pr-4`}>
        {burgerComposition.map((ingredient, idx) => idx > 0 && idx < burgerComposition.length - 1 && (
          <li key={`${ingredient._id}${idx}`} className={burgerConstructorStyle.list_item}>
            <DragIcon />
            <ConstructorElement
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image}
            />
          </li>
        )
        )}
      </ul>
      <div className="pr-6">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${burgerComposition[0] && burgerComposition[burgerComposition.length - 1].name} (низ)`}
          price={burgerComposition[0] && burgerComposition[burgerComposition.length - 1].price}
          thumbnail={burgerComposition[0] && burgerComposition[burgerComposition.length - 1].image}
        />
      </div>

      <div className={`${burgerConstructorStyle.button_container} pt-6 pr-6`}>
        <div className='mr-10'>
          <span className="text text_type_digits-medium mr-2">{total}</span>
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
};