import IngredientPageStyles from './ingredient-page.module.css';


const IngredientPage = () => {

  const selectedIngredient = {
    "_id": "60d3b41abdacab0026a733cb",
    "name": "Биокотлета из марсианской Магнолии",
    "type": "main",
    "proteins": 420,
    "fat": 142,
    "carbohydrates": 242,
    "calories": 4242,
    "price": 424,
    "image": "https://code.s3.yandex.net/react/code/meat-01.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
    "__v": 0
  }
  return (
    <section className={IngredientPageStyles.wrapper}>
      <img width="480" height="240" alt={selectedIngredient.name} src={selectedIngredient && selectedIngredient.image} />
      <p className="text text_type_main-medium pt-4 pb-8">{selectedIngredient && selectedIngredient.name}</p>
      <ul className={`${IngredientPageStyles.list} pt-8`}>
        <li className={`${IngredientPageStyles.listItem} text text_type_main-default text_color_inactive`}>
          <span>
            Калории,ккал
          </span>
          {selectedIngredient.calories}
        </li>
        <li className={`${IngredientPageStyles.listItem} text text_type_main-default text_color_inactive`}>
          <span>
            Белки, г
          </span>
          {selectedIngredient.proteins}
        </li>
        <li className={`${IngredientPageStyles.listItem} text text_type_main-default text_color_inactive`}>
          <span>
            Жиры, г
          </span>
          {selectedIngredient.fat}
        </li>
        <li className={`${IngredientPageStyles.listItem} text text_type_main-default text_color_inactive`}>
          <span>
            Углеводы, г
          </span>
          {selectedIngredient.carbohydrates}
        </li>
      </ul>
    </section>
  )
}

export default IngredientPage;