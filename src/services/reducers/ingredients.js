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


const initialState = {
  ingredients: [],
  selectedIngredient: null,
  chosenIngredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {

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
      console.log(action.payload)
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