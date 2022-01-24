import { BASE_URL } from '../utils/constants'
import { BACKEND_ENDPOINT } from '../utils/constants'

//* Класс для взаимодействия с сервером
class Api {
  constructor(data) {
    this._baseUrl = data;
  }

  //* Проверка статуса запроса
  _requestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
      );
    }
  }

  //* Запрос данных 
  getIngredients() {
    return fetch(`${this._baseUrl}/ingredients`).then((res) => this._requestResult(res));
  }

  sendIngredients(ingredientsIds) {
    console.log(ingredientsIds)
    return fetch(BACKEND_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: {
        ingredients: ingredientsIds
      }
    }).then((res) => this._requestResult(res));
  }
}

const mainApi = new Api(BASE_URL);

export default mainApi;