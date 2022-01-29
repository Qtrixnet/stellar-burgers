import chosenIngredientStyle from './chosen-ingredient.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from "react-dnd";
import { useRef } from 'react';

function ChosenIngredient({ ingredient, id, moveIngredient, index }) {
  const { name, price, image, } = ingredient;
  const dispatch = useDispatch();
  const chosenIngredients = useSelector(state => state.ingredientsData.chosenIngredients);
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'chosen-ingredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveIngredient(dragIndex - 1, hoverIndex - 1);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "chosen-ingredient",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  const handleDeleteIngredient = (item) => () => {
    const selectedIngredientIndex = chosenIngredients.indexOf(item)
    const chosenIngredientsClone = chosenIngredients.slice();
    chosenIngredientsClone.splice(selectedIngredientIndex, 1);
    dispatch({ type: 'DELETE_INGREDIENT', payload: chosenIngredientsClone });
  }


  return (
    <li ref={ref} style={{ opacity }} data-handler-id={handlerId} className={chosenIngredientStyle.list_item}>
      <DragIcon />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleDeleteIngredient(ingredient)}
      />
    </li>
  )
}

export default ChosenIngredient;
