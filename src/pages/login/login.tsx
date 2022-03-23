import {FC, useState, useRef, useEffect, FormEvent, ChangeEvent} from "react";
import LoginStyles from "./login.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { login } from "../../services/actions/user";
import {useDispatch, useSelector} from "../../services/hooks/hooks";

const Login:FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const userData = useSelector((state) => state.userData.userData);

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailValue || !passwordValue) {
      return;
    }

    dispatch(login(emailValue, passwordValue))
  };

  useEffect(() => {
    if (userData) {
      (location.state && location.state.previousLocation) ? history.push(location.state.previousLocation.pathname) : history.push('/');
    }
  }, [userData, history, location])

  return (
    <article className={LoginStyles.wrapper}>
      <form onSubmit={handleSubmit} className={LoginStyles.form}>
        <h1 className={`${LoginStyles.title} text text_type_main-medium`}>
          Вход
        </h1>
        <div className="mt-6 mb-6">
          <Input
            type={"text"}
            placeholder={"E-mail"}
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            name={"e-mail"}
            error={false}
            ref={inputRef}
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
        {"Вы — новый пользователь? "}
        <Link className={LoginStyles.link} to="/register">
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-default text_color_inactive mt-4">
        {"Забыли пароль? "}
        <Link className={LoginStyles.link} to="/forgot-password">
          Восстановить пароль
        </Link>
      </p>
    </article>
  );
};

export default Login;
