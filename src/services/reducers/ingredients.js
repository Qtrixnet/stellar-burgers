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
    //* - реализован
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.payload,
      };
    }
    //* - реализован
    case SELECT_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.payload
      };
    }
    //* - реализован
    case ADD_INGREDIENT: {
      return {
        ...state,
        chosenIngredients: action.payload
      };
    }
    //* - реализован
    case DELETE_INGREDIENT: {
      return { ...state, chosenIngredients: state.chosenIngredients.splice(action.payload, 1) };
    }
    default: {
      return state;
    }
  }
};