import {FC} from 'react';
import OrderFullInfoStyles from './order-full-info.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useParams} from 'react-router-dom';
import {IIngredient, IOrder, IOrderFullInfoProps} from '../../services/types/types';
import {useSelector} from "../../services/hooks/hooks";

const OrderFullInfo: FC<IOrderFullInfoProps> = ({isPopup, isAllOrders}) => {
  const {id} = useParams();

  const orders = useSelector((state) => state.ordersData.orders);
  const userOrders = useSelector(state => state.ordersData.userOrders);

  const allIngredients = useSelector((state) => state.ingredientsData.ingredients)

  const foundOrder = isAllOrders ? orders?.find((order: IOrder) => order._id === id) : userOrders?.find((order: IOrder) => order._id === id)

  const foundIngredients = foundOrder?.ingredients.map((orderIngredient: string) => allIngredients.find((ingredient: IIngredient) => ingredient._id === orderIngredient))

  const calculateSum = (): number => {
    let sum = 0;
    foundIngredients?.forEach((ingredient: IIngredient | undefined) => {
      const orderedIngredient = allIngredients.find((orderIngredient: IIngredient) => orderIngredient?._id === ingredient?._id)
      if (orderedIngredient?.price) {
        sum += orderedIngredient.price
      }
    })
    return sum
  }

  const checkStatus = (status: string) => {
    if (status === 'pending') {
      return 'Готовится'
    } else {
      return 'Выполнен'
    }
  }

  const checkStyles = (status: string) => {
    if (status === 'pending') {
      return {
        color: '#00CCCC'
      }
    } else {
      return {}
    }
  }

  function formatDate(str: string) {
    return new Date(str).toLocaleString()
  }

  return (
    <>
      {
        foundOrder ? (
          <div className={OrderFullInfoStyles.container} style={!isPopup ? {marginTop: '120px'} : {}}>
            <div className={OrderFullInfoStyles.order_info}>
              <p
                className={`text text_type_digits-default pb-10 ${OrderFullInfoStyles.order_number}`}>#{foundOrder?.number}</p>
              <h2 className="text text_type_main-medium pb-3">{foundOrder?.name}</h2>
              <p className={`text text_type_main-default pb-15 ${OrderFullInfoStyles.order_status}`}
                 style={checkStyles(foundOrder?.status)}>{checkStatus(foundOrder?.status)}</p>
              <p className="text text_type_main-medium pb-6">Состав:</p>
              <ul className={OrderFullInfoStyles.list}>
                {
                  Array.from(new Set(foundIngredients))?.map((ingredient: IIngredient | undefined, idx: number) => {
                    return (
                      <li key={idx} className={OrderFullInfoStyles.list_item}>
                        <img className={OrderFullInfoStyles.image} src={ingredient?.image} alt=""/>
                        <h3
                          className={`text text_type_main-default ${OrderFullInfoStyles.title}`}>{ingredient?.name}</h3>
                        <div className={`text text_type_digits-default ${OrderFullInfoStyles.item_currency}`}>
                          <span>
                            {
                              foundIngredients && foundIngredients?.filter(filteredIngredient => filteredIngredient?._id === ingredient?._id).length
                            }
                          </span>
                          x
                          <div className={OrderFullInfoStyles.item_currency_container}>
                            <span>{ingredient?.price}</span>
                            <CurrencyIcon type="primary"/>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
              <div className={OrderFullInfoStyles.footer}>
                <p className="text text_type_main-default text_color_inactive">{formatDate(foundOrder?.createdAt)}</p>
                <div className={OrderFullInfoStyles.currency_container}>
                  <span className="text text_type_digits-default">{calculateSum()}</span>
                  <CurrencyIcon type="primary"/>
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </>
  );
};

export default OrderFullInfo;
