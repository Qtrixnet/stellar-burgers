import {
  GET_INGREDIENTS,
  SELECT_INGREDIENT,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
} from '../actions/ingredients';

const initialState = {
  ingredients: [],
  selectedIngredient: null,
  chosenIngredients: [],
};

export const ingredientsReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.payload,
      };
    }
    case SELECT_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.payload
      };
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        chosenIngredients: action.payload
      };
    }
    //* - не реализован
    case DELETE_INGREDIENT: {
      return { ...state, chosenIngredients: action.payload };
    }
    default: {
      return state;
    }
  }
};