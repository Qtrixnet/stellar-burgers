import {FC, useCallback, useMemo} from "react";
import {useHistory} from "react-router-dom";
import {Button, ConstructorElement, CurrencyIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyle from "./burger-constructor.module.css";
import {getOrderData} from "../../services/actions/order";
import {DndProvider, useDrop} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import ChosenIngredient from "../chosen-ingredient/chosen-ingredient";
import update from "immutability-helper";
import {sortIngredients} from "../../services/actions/ingredients";
import {changeOrderDetailsPopupState} from "../../services/actions/popup";
import {IBurgerConstructorProps, IIngredient, TIngredientType} from "../../services/types/types";
import {useDispatch, useSelector} from "../../services/hooks/hooks";

const BurgerConstructor: FC<IBurgerConstructorProps> = ({onDropHandler}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const chosenIngredients = useSelector(
    (state) => state.ingredientsData.chosenIngredients
  );

  const userData = useSelector((state) => state.userData.userData);
  const accessToken = useSelector((state) => state.userData.accessToken);

  const totalSum = useMemo(
    () =>
      chosenIngredients.reduce(
        (acc: number, cur: IIngredient) =>
          cur.type === "bun" ? acc + cur.price * 2 : acc + cur.price,
        0
      ),
    [chosenIngredients]
  );

  const [{isHover}, burgerIngredientsContainer] = useDrop({
    accept: "ingredient",
    drop(ingredientId: IIngredient) {
      onDropHandler(ingredientId);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const moveIngredient = useCallback(
    (dragIndex, hoverIndex) => {
      const ingredientWithTypeBan = chosenIngredients.filter(
        ({type}: TIngredientType) => type === "bun"
      );
      const ingredientsWithoutBan = chosenIngredients.filter(
        ({type}: TIngredientType) => type !== "bun"
      );
      const sortedIngredients = update(
        ingredientsWithoutBan,
        {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, ingredientsWithoutBan[dragIndex]],
          ],
        },
      );
      const sortedInregientsWithBun = [
        ...ingredientWithTypeBan,
        ...sortedIngredients,
      ];

      dispatch(sortIngredients([...sortedInregientsWithBun]));
    },
    [chosenIngredients, dispatch]
  );

  const borderColor = isHover ? "#5147F8" : "transparent";

  const handleOrderButtonClick = () => {
    const ingredientsIds = chosenIngredients.map(
      (ingredient: IIngredient) => ingredient._id
    );

    if (userData) {
      dispatch(getOrderData(ingredientsIds, accessToken));
      dispatch(changeOrderDetailsPopupState(true));
    } else {
      history.push('/login')
    }
  };

  const bunElementHandler = (
    chosenIngredients: IIngredient[],
    property: string,
    trueValue: string,
    falseValue: string
  ) => chosenIngredients.find((ingredient: IIngredient) => ingredient.type === "bun")
    // @ts-ignore
    ? `${chosenIngredients.find((ingredient: IIngredient) => ingredient.type === "bun")[
      property
      ]
    } ${trueValue}`
    : falseValue;

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        ref={burgerIngredientsContainer}
        style={{borderColor}}
        className={`${burgerConstructorStyle.constructor_container} mt-25 pt-5 pb-5`}
      >
        <div className={`${burgerConstructorStyle.constructor_element} pr-5`}>
          {chosenIngredients.length > 0 ? (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bunElementHandler(
                chosenIngredients,
                "name",
                "(верх)",
                "Выберите булку"
              )}
              price={+bunElementHandler(chosenIngredients, "price", "", "0")}
              thumbnail={bunElementHandler(chosenIngredients, "image", "", "")}
            />
          ) : (
            <p className="text text_type_main-large pt-3">Выберите булку</p>
          )}
        </div>
        <ul className={`${burgerConstructorStyle.list} order-ingredients-list pl-4 pr-4`}>
          {chosenIngredients.map(
            (ingredient: IIngredient, idx: number) =>
              ingredient.type !== "bun" && (
                <ChosenIngredient
                  key={ingredient.uuid}
                  index={idx}
                  moveIngredient={moveIngredient}
                  ingredient={ingredient}
                  id={`${ingredient._id}${idx}`}
                />
              )
          )}
        </ul>
        <div className="pr-5">
          {chosenIngredients.length > 0 && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bunElementHandler(
                chosenIngredients,
                "name",
                "(низ)",
                "Выберите булку"
              )}
              price={+bunElementHandler(chosenIngredients, "price", "", "0")}
              thumbnail={bunElementHandler(chosenIngredients, "image", "", "")}
            />
          )}
        </div>

        <div className={`${burgerConstructorStyle.button_container} pt-5 pr-5`}>
          <div className="mr-10">
            <span className="text text_type_digits-medium mr-2">
              {totalSum}
            </span>
            <CurrencyIcon type="primary"/>
          </div>
          <Button
            onClick={handleOrderButtonClick}
            type="primary"
            size="medium"
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </DndProvider>
  );
};

export default BurgerConstructor;
