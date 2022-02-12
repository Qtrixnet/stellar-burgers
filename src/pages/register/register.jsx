import { useState, useRef } from "react";
import RegisterStyles from "./register.module.css";
import { Link, useHistory } from "react-router-dom";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

const Register = ({ onRegister }) => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState("");
  const inputRef = useRef(null);
  const history = useHistory();

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);

  };

  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!nameValue || !emailValue || !passwordValue) {
      return;
    }

    onRegister(emailValue, nameValue, passwordValue)
    history.push('/login');
  }

  return (
    <section className={RegisterStyles.wrapper}>
      <form onSubmit={handleSubmit} className={RegisterStyles.form}>
        <p className={`${RegisterStyles.title} text text_type_main-medium`}>
          Регистрация
        </p>
        <div className="mt-6 mb-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setNameValue(e.target.value)}
            value={nameValue}
            name={"name"}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className="mb-6">
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
          Зарегистрироваться
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {"Уже зарегистрированы? "}
        <Link className={RegisterStyles.link} to="/login">
          Войти
        </Link>
      </p>
    </section>
  );
};

Register.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default Register;
