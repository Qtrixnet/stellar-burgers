import {FC} from 'react';
import orderComponentStyles from "./order-component.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation} from 'react-router-dom';
import {IIngredient, IOrderComponentProps} from "../../services/types/types";
import {useSelector} from "../../services/hooks/hooks";

const OrderComponent: FC<IOrderComponentProps> = ({order, isHistory = false}) => {
  const location = useLocation();
  const {status, number, createdAt, name, ingredients, _id} = order;
  const orderIngredients = useSelector((state) => state.ingredientsData.ingredients)

  const findIngredient = (ingredient: string, ingredients: IIngredient[]) => {
    return ingredients.find((foundIngredient: IIngredient) => foundIngredient._id === ingredient)
  }

  const checkStatus = (status: string) => {
    if (status === 'done') {
      return 'Создан'
    }
  }

  const calculateSum = () => {
    let sum = 0;
    ingredients.forEach((ingredient: string) => {
      const find = orderIngredients.find((orderIngredient: IIngredient) => orderIngredient._id === ingredient)
      if (find?.price) {
        sum += find.price
      }
    })
    return sum
  }
  
  function formatDate(str: string) {
    return new Date(str).toLocaleString()
  }

  return (
    <li>
      <Link className={orderComponentStyles.link} to={{
        pathname: `${location.pathname}/${_id}`,
        state: {background: location},
      }}>
        <div className={orderComponentStyles.header}>
          <p className="text text_type_digits-default">{`#${number}`}</p>
          <p className="text text_type_main-default text_color_inactive">{formatDate(createdAt)}</p>
        </div>
        <h2 className="text text_type_main-medium">{name}</h2>
        {
          (status && isHistory) && <p className="text text_type_main-default">{checkStatus(status)}</p>
        }
        <div className={orderComponentStyles.footer}>
          <ul className={orderComponentStyles.ingredients_list}>
            {
              ingredients.map((ingredient, idx) => {
                  const foundIngredient = findIngredient(ingredient, orderIngredients)
                  if (idx < 5) {
                    return (
                      <li key={idx} style={{zIndex: 999 - idx}} className={orderComponentStyles.ingredients_list_item}>
                        <img className={orderComponentStyles.ingredients_list_item_image} src={foundIngredient?.image}
                             alt={foundIngredient?.name}/>
                      </li>
                    )
                  }
                  return null
                }
              )
            }
          </ul>
          <div className={orderComponentStyles.total}>
            <span className="text text_type_digits-default">{calculateSum()}</span>
            <CurrencyIcon type="primary"/>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default OrderComponent;
