import {FC, useState, useRef, FormEvent} from "react";
import ForgotPasswordStyles from "./forgot-password.module.css";
import { Link, useHistory } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { forgotPassword, setForgotPasswordState } from "../../services/actions/user";
import { useDispatch } from 'react-redux';

const ForgotPassword:FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailValue) {
      return;
    }

    dispatch(forgotPassword(emailValue));
    dispatch(setForgotPasswordState(true));
    setEmailValue("");
    history.push('/reset-password')

  };

  return (
    <article className={ForgotPasswordStyles.wrapper}>
      <form onSubmit={handleSubmit} className={ForgotPasswordStyles.form}>
        <h1
          className={`${ForgotPasswordStyles.title} text text_type_main-medium mb-6`}
        >
          Восстановление пароля
        </h1>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Укажите e-mail"}
            onChange={(evt) => setEmailValue(evt.target.value)}
            value={emailValue}
            name={"e-mail"}
            error={false}
            ref={inputRef}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <Button type="primary" size="medium">
          Восстановить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {"Вспомнили пароль? "}
        <Link className={ForgotPasswordStyles.link} to="/login">
          Войти
        </Link>
      </p>
    </article>
  );
};

export default ForgotPassword;
