import { BASE_URL } from '../utils/constants';

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
        email,
      }),
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на обновление пароля
  resetPassword(passwordValue, codeValue) {
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

  //* Запрос на авторизацию
  login(email, password) {
    return fetch(`${this._baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на регистрацию
  register(email, name, password) {
    return fetch(`${this._baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then((res) => this._requestResult(res));
  }

  //* Запрос данных пользователя
  getUserData(token) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "authorization": token
      },
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на редактирвоание данных пользователя
  sendUserData(token, name, email, password) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "authorization": token
      },
      body: JSON.stringify({
        "email": email,
        "name": name,
        "password": password
      }),
    }).then((res) => this._requestResult(res));
  }

  //* Запрос для обновления токена
  refreshToken(refreshToken) {
    return fetch(`${this._baseUrl}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "token": refreshToken
      }),
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на выход из системы
  logout(refreshToken) {
    return fetch(`${this._baseUrl}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "token": refreshToken
      }),
    }).then((res) => this._requestResult(res));
  }
}

const mainApi = new Api(BASE_URL);

export default mainApi;
