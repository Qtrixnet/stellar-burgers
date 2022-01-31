import mainApi from "../../utils/Api";
import { v4 as generateUniqueId } from "uuid";

export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

export const SELECT_INGREDIENT = "SELECT_INGREDIENT";
export const DELETE_SELECTED_INGREDIENT = "DELETE_SELECTED_INGREDIENT";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const DELETE_ALL_INGREDIENTS = "DELETE_ALL_INGREDIENTS";

export const SORT_INGREDIENTS = "SORT_INGREDIENTS";

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS,
    });

    mainApi
      .getIngredients()
      .then((ingredientsData) => {
        if (ingredientsData) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            payload: ingredientsData.data,
          });
        }
      })
      .catch((err) =>
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        })
      );
  };
}

export const selectIngredient = (ingredient) => ({
  type: SELECT_INGREDIENT,
  payload: ingredient,
});

export const deleteSelectedIngredient = () => ({
  type: DELETE_SELECTED_INGREDIENT,
});

export const addIngredient = (newIngredientsArray) => {
  const modifiedArray = newIngredientsArray.map((ingredientObject) => {
    const ingredientCopy = Object.assign({}, ingredientObject);
    ingredientCopy.uuid = generateUniqueId();
    return ingredientCopy;
  });

  return { type: ADD_INGREDIENT, payload: modifiedArray };
};

export const deleteIngredient = (newIngredientsArray) => ({
  type: DELETE_INGREDIENT,
  payload: newIngredientsArray,
});

export const deleteAllIngredients = () => ({ type: DELETE_ALL_INGREDIENTS });

export const sortIngredients = (newIngredientsArray) => ({
  type: SORT_INGREDIENTS,
  payload: newIngredientsArray,
});
