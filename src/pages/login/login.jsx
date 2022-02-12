import { useState, useRef } from "react";
import LoginStyles from "./login.module.css";
import { Link, useHistory } from "react-router-dom";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

const Login = ({ onLogin }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const inputRef = useRef(null);
  const history = useHistory();

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault()

    if (!emailValue || !passwordValue) {
      return;
    }

    onLogin(emailValue, passwordValue)
    history.push('/');
  }

  return (
    <section className={LoginStyles.wrapper}>
      <form onSubmit={handleSubmit} className={LoginStyles.form}>
        <p className={`${LoginStyles.title} text text_type_main-medium`}>
          Вход
        </p>
        <div className='mt-6 mb-6'>
          <Input
            type={"text"}
            placeholder={"E-mail"}
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            name={"e-mail"}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            onChange={onPasswordChange}
            value={passwordValue}
            name={"password"}
          />
        </div>
        <Button type="primary" size="medium">
          Войти
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {'Вы — новый пользователь? '}
        <Link className={LoginStyles.link} to="/register">
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-default text_color_inactive mt-4">
        {'Забыли пароль? '}
        <Link className={LoginStyles.link} to="/forgot-password">
          Восстановить пароль
        </Link>
      </p>
    </section>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
