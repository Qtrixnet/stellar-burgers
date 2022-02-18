import { useState, useRef, useEffect } from "react";
import ResetPasswordStyles from "./reset-password.module.css";
import { Link, useHistory } from "react-router-dom";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPassword, setForgotPasswordState } from "../../services/actions/user";
import { useDispatch, useSelector } from 'react-redux';

const ResetPassword = () => {
  const [codeValue, setCodeValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const isPasswordForgot = useSelector((state) => state.userData.isPasswordForgot);

  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordValue || !codeValue) {
      return;
    }

    dispatch(resetPassword(passwordValue, codeValue));
    dispatch(setForgotPasswordState(false));
    setCodeValue("");
    setPasswordValue("");
    history.push('/');
  };

  useEffect(() => {
    !isPasswordForgot && history.push('/forgot-password');
  }, [isPasswordForgot, history])

  return (
    <section className={ResetPasswordStyles.wrapper}>
      <form onSubmit={handleSubmit} className={ResetPasswordStyles.form}>
        <p
          className={`${ResetPasswordStyles.title} text text_type_main-medium mb-6`}
        >
          Восстановление пароля
        </p>
        <PasswordInput
          onChange={onPasswordChange}
          value={passwordValue}
          name={"password"}
          placeholder={"Введите новый пароль"}
        />
        <div className="mb-6 mt-6">
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={(e) => setCodeValue(e.target.value)}
            value={codeValue}
            name={"e-mail"}
            error={false}
            ref={inputRef}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <Button type="primary" size="medium">
          Сохранить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {"Вспомнили пароль? "}
        <Link className={ResetPasswordStyles.link} to="/login">
          Войти
        </Link>
      </p>
    </section>
  );
};

export default ResetPassword;
