import {BASE_URL} from './constants';
import {TIngredientId} from "../services/types/types";

//* Класс для взаимодействия с сервером
class Api {
  private _baseUrl: string;

  constructor(data: string) {
    this._baseUrl = data;
  }

  //* Проверка статуса запроса
  _requestResult(res: Response) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res)
    }
  }

  //* Запрос ингредиентов
  getIngredients() {
    return fetch(`${this._baseUrl}/ingredients`).then((res) => this._requestResult(res));
  }

  //* Отправка данных заказа
  sendIngredients(ingredientsIds: TIngredientId[], token: string) {
    return fetch(`${this._baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        "Authorization": token,
      },
      body: JSON.stringify({
        ingredients: ingredientsIds,
      }),
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на восстановление пароля
  sendEmail(email: string) {
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
  resetPassword(passwordValue: string, codeValue: string) {
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
  login(email: string, password: string) {
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
  register(email: string, name: string, password: string) {
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
  getUserData(token: string) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "authorization": token,
      },
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на редактирвоание данных пользователя
  sendUserData(token: string, name: string, email: string, password: string) {
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
  refreshToken(refreshToken: string) {
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
  logout(refreshToken: string | null) {
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
