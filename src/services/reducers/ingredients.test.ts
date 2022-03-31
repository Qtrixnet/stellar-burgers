import {ingredientsReducer} from "./ingredients";
import {IIngredientsState} from "../types/types";
import {
  ADD_INGREDIENT,
  DELETE_ALL_INGREDIENTS, DELETE_INGREDIENT, DELETE_SELECTED_INGREDIENT, GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS, SELECT_INGREDIENT,
  SORT_INGREDIENTS
} from "../actions/ingredients";

describe('ingredients reducer', () => {
  const initialState: IIngredientsState = {
    ingredients: [],
    selectedIngredient: null,
    chosenIngredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
  };

  it('should return the initial state', () => {
    // @ts-ignore
    expect(ingredientsReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle DELETE_ALL_INGREDIENTS', () => {
    const prevState = {
      ...initialState,
      chosenIngredients: [{}, {}, {}],
    };

    const action = {
      type: DELETE_ALL_INGREDIENTS,
    }

    expect(
      // @ts-ignore
      ingredientsReducer(prevState, action)
    ).toEqual({
      ...prevState,
      chosenIngredients: [],
    })
  })

  it('should handle SORT_INGREDIENTS', () => {
    const prevState = {
      ...initialState,
      chosenIngredients: [{1: 1}, {2: 2}, {3: 3}],
    };

    const action = {
      type: SORT_INGREDIENTS,
      payload: [{2: 2}, {1: 1}, {3: 3}]
    }

    expect(
      // @ts-ignore
      ingredientsReducer(prevState, action)
    ).toEqual({
      ...prevState,
      chosenIngredients: action.payload
    })
  })

  it('should handle GET_INGREDIENTS_FAILED', () => {
    const prevState = {
      ...initialState,
      ingredientsRequest: true,
    };

    const action = {
      type: GET_INGREDIENTS_FAILED,
    }

    expect(
      ingredientsReducer(prevState, action)
    ).toEqual({
      ...prevState,
      ingredientsRequest: false,
      ingredientsFailed: true,
    })
  })

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    const prevState = {
      ...initialState,
      ingredientsRequest: true,
    };

    const action = {
      type: GET_INGREDIENTS_SUCCESS,
      payload: [{}]
    }

    expect(
      ingredientsReducer(prevState, action)
    ).toEqual({
      ...prevState,
      ingredientsRequest: false,
      ingredients: action.payload,
    })
  })

  it('should handle GET_INGREDIENTS', () => {
    const action = {
      type: GET_INGREDIENTS,
    }

    expect(
      ingredientsReducer(initialState, action)
    ).toEqual({
      ...initialState,
      ingredientsRequest: true,
      ingredientsFailed: false,
    })
  })

  it('should handle SELECT_INGREDIENT', () => {
    const action = {
      type: SELECT_INGREDIENT,
      payload: {}
    }

    expect(
      ingredientsReducer(initialState, action)
    ).toEqual({
      ...initialState,
      selectedIngredient: action.payload
    })
  })

  it('should handle DELETE_SELECTED_INGREDIENT', () => {
    const prevState = {
      ...initialState,
      selectedIngredient: {},
    };

    const action = {
      type: DELETE_SELECTED_INGREDIENT,
      payload: null
    }

    expect(
      // @ts-ignore
      ingredientsReducer(prevState, action)
    ).toEqual({
      ...prevState,
      selectedIngredient: action.payload
    })
  })

  it('should handle ADD_INGREDIENT', () => {
    const action = {
      type: ADD_INGREDIENT,
      payload: [{}]
    }

    expect(
      // @ts-ignore
      ingredientsReducer(initialState, action)
    ).toEqual({
      ...initialState,
      chosenIngredients: action.payload
    })
  })

  it('should handle DELETE_INGREDIENT', () => {
    const prevState = {
      ...initialState,
      chosenIngredients: [{1: 1}, {2: 2}, {3: 3}],
    };

    const action = {
      type: DELETE_INGREDIENT,
      payload: [{1: 1}, {2: 2}]
    }

    expect(
      // @ts-ignore
      ingredientsReducer(prevState, action)
    ).toEqual({
      ...prevState,
      chosenIngredients: action.payload
    })
  })
})