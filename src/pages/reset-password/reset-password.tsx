import {FC, useState, useRef, useEffect, ChangeEvent, FormEvent} from "react";
import ResetPasswordStyles from "./reset-password.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPassword, setForgotPasswordState } from "../../services/actions/user";
import {useDispatch, useSelector} from "../../services/hooks/hooks";

const ResetPassword: FC = () => {
  const [codeValue, setCodeValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const isPasswordForgot = useSelector((state) => state.userData.isPasswordForgot);
  const location = useLocation();
  const userData = useSelector((state) => state.userData.userData);

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    if (userData) {
      (location.state && location.state.previousLocation) ? history.push(location.state.previousLocation.pathname) : history.push('/');
    } else {
      !isPasswordForgot && history.push('/forgot-password');
    }
  }, [userData, history, location, isPasswordForgot])

  return (
    <article className={ResetPasswordStyles.wrapper}>
      <form onSubmit={handleSubmit} className={ResetPasswordStyles.form}>
        <h1
          className={`${ResetPasswordStyles.title} text text_type_main-medium mb-6`}
        >
          Восстановление пароля
        </h1>
        <PasswordInput
          onChange={onPasswordChange}
          value={passwordValue}
          name={"password"}
          //@ts-ignore
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
    </article>
  );
};

export default ResetPassword;
