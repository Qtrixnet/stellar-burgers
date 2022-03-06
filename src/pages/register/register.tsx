import {FC, useState, useRef, useEffect, ChangeEvent, FormEvent} from "react";
import RegisterStyles from "./register.module.css";
import { Link, useHistory } from "react-router-dom";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { registration } from "../../services/actions/user";
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

const Register: FC = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const userData = useSelector((state: RootStateOrAny) => state.userData.userData);
  const history = useHistory();

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameValue || !emailValue || !passwordValue) {
      return;
    }

    dispatch(registration(emailValue, nameValue, passwordValue));
  };

  useEffect(() => {
    userData && history.push('/')
  }, [userData, history])

  return (
    <article className={RegisterStyles.wrapper}>
      <form onSubmit={handleSubmit} className={RegisterStyles.form}>
        <h1 className={`${RegisterStyles.title} text text_type_main-medium`}>
          Регистрация
        </h1>
        <div className="mt-6 mb-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setNameValue(e.target.value)}
            value={nameValue}
            name={"name"}
            error={false}
            ref={inputRef}
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
    </article>
  );
};

export default Register;
