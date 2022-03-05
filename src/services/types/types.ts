export interface IIngredient {
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

export type TIngredientId = Pick<IIngredient, '_id'> ;

export type TIngredientType = Pick<IIngredient, 'type'>;

export interface IBurgerConstructorProps {
  onDropHandler: (ingredientId: IIngredient) => void,
}

export interface IModalProps {
  handlePopupClose: () => void,
  children: '', 
  title?: string
}

export interface IChosenIngredientProps {
  ingredient: IIngredient,
  id: string,
  moveIngredient: (dragIndex: number, hoverIndex: number) => void,
  index: number,
}

export interface IIngredientProps {
  ingredient: IIngredient,
}

export interface IIngredientDetailsProps {
  title?: string,
}
