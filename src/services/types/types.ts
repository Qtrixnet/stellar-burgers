export interface IburgerConstructorProps {
  onDropHandler: (ingredientId: TingredientId) => void,
}

export interface IchosenIngredientProps {
  ingredient: Iingredient,
  id: string,
  moveIngredient: (dragIndex: number, hoverIndex: number) => void,
  index: number,
}

export interface Iingredient {
  calories: number,
  carbohydrates: number,
  fat: number,
  image: string,
  image_large: string,
  image_mobile: string,
  name: string,
  price: number,
  proteins: number,
  type: string,
  uuid: string,
  __v: string,
  _id: string,
}

export type TingredientId = Pick<Iingredient, '_id'> ;
export type TingredientType = Pick<Iingredient, 'type'>;