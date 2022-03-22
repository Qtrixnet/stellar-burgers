import mainApi from "../../utils/Api";
import {v4 as generateUniqueId} from "uuid";
import {AppDispatch, AppThunk, IIngredient} from "../types/types";

export const GET_INGREDIENTS: 'GET_INGREDIENTS' = "GET_INGREDIENTS";
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = "GET_INGREDIENTS_SUCCESS";

export const SELECT_INGREDIENT: 'SELECT_INGREDIENT' = "SELECT_INGREDIENT";
export const DELETE_SELECTED_INGREDIENT: 'DELETE_SELECTED_INGREDIENT' = "DELETE_SELECTED_INGREDIENT";

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = "ADD_INGREDIENT";
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = "DELETE_INGREDIENT";
export const DELETE_ALL_INGREDIENTS: 'DELETE_ALL_INGREDIENTS' = "DELETE_ALL_INGREDIENTS";

export const SORT_INGREDIENTS: 'SORT_INGREDIENTS' = "SORT_INGREDIENTS";

export interface ISelectIngredient {
  readonly type: typeof SELECT_INGREDIENT;
  readonly payload: IIngredient;
}

export interface IDeleteSelectedIngredient {
  readonly type: typeof DELETE_SELECTED_INGREDIENT;
}

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: IIngredient[];
}

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: IIngredient[];
}

export interface IDeleteAllIngredients {
  readonly type: typeof DELETE_ALL_INGREDIENTS;
}

export interface ISortIngredients {
  readonly type: typeof SORT_INGREDIENTS;
  readonly payload: IIngredient[];
}

export const getIngredients: AppThunk = () => {
  return function (dispatch: AppDispatch) {
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
      .catch(() =>
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        })
      );
  };
}

export const selectIngredient = (ingredient: IIngredient) => ({
  type: SELECT_INGREDIENT,
  payload: ingredient,
});

export const deleteSelectedIngredient = () => ({
  type: DELETE_SELECTED_INGREDIENT,
});

export const addIngredient = (newIngredientsArray: IIngredient[]) => {
  const modifiedArray = newIngredientsArray.map((ingredientObject) => {
    const ingredientCopy = Object.assign({}, ingredientObject);
    ingredientCopy.uuid = generateUniqueId();
    return ingredientCopy;
  });

  return {type: ADD_INGREDIENT, payload: modifiedArray};
};

export const deleteIngredient = (newIngredientsArray: IIngredient[]) => ({
  type: DELETE_INGREDIENT,
  payload: newIngredientsArray,
});

export const deleteAllIngredients = () => ({type: DELETE_ALL_INGREDIENTS});

export const sortIngredients = (newIngredientsArray: IIngredient[]) => ({
  type: SORT_INGREDIENTS,
  payload: newIngredientsArray,
});
