import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  SELECT_INGREDIENT,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  DELETE_SELECTED_INGREDIENT,
  SORT_INGREDIENTS,
  DELETE_ALL_INGREDIENTS
} from '../actions/ingredients';
import { AnyAction } from 'redux';

interface ICounterState {
  ingredients: Array<object>,
  selectedIngredient: object | null,
  chosenIngredients: Array<object>,
  ingredientsRequest: boolean,
  ingredientsFailed: boolean,
}

const initialState: ICounterState = {
  ingredients: [],
  selectedIngredient: null,
  chosenIngredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialState, action: AnyAction): ICounterState => {

  switch (action.type) {
    case DELETE_ALL_INGREDIENTS: {
      return {
        ...state,
        chosenIngredients: [],
      };
    }
    case SORT_INGREDIENTS: {
      return {
        ...state,
        chosenIngredients: action.payload
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredients: action.payload,
      };
    }
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };
    }
    case SELECT_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.payload
      };
    }
    case DELETE_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: null
      };
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        chosenIngredients: action.payload
      };
    }
    case DELETE_INGREDIENT: {
      return { ...state, chosenIngredients: action.payload };
    }
    default: {
      return state;
    }
  }
};