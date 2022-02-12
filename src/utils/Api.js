import { BASE_URL } from '../utils/constants'

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

  //* Запрос ингредиентов
  getIngredients() {
    return fetch(`${this._baseUrl}/ingredients`).then((res) => this._requestResult(res));
  }

  //* Отправка данных заказа
  sendIngredients(ingredientsIds) {
    const burgerData = {
      'ingredients': ingredientsIds
    }

    return fetch(`${this._baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(burgerData)
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на восстановление пароля
  sendEmail(email) {
    return fetch(`${this._baseUrl}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then((res) => this._requestResult(res));
  }

  resetPassword({ passwordValue, codeValue }) {
    return fetch(`${this._baseUrl}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: passwordValue,
        token: codeValue,
      }),
    }).then((res) => this._requestResult(res));
  }
}

const mainApi = new Api(BASE_URL);

export default mainApi;

// {"success":true,"user":{"email":"qtrixnet@yandex.ru","name":"Kirill"},"accessToken":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDc5ZWEzNmQ3Y2Q4MDAxYjJkNWExNiIsImlhdCI6MTY0NDY2NjUzMSwiZXhwIjoxNjQ0NjY3NzMxfQ.jksuD1oqMgC3vKuc9wEfqiQsbtuZu0s5R30uBCwrFvs","refreshToken":"41765e93e60b6210167ddd963d4e6a12c7db659dabdafbbf41f3adacb285e4c0a45b98a00e0718f1"}