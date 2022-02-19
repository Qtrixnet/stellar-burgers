import { useState, useRef, useEffect } from "react";
import ProfileStyles from "./profile.module.css";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { sendUserData, logout } from "../../services/actions/user";

const Profile = () => {
  const [nameValue, setNameValue] = useState("?");
  const [loginValue, setLoginValue] = useState("?");
  const [passwordValue, setPasswordValue] = useState("");
  const [isDataChanged, setIsDataChanged] = useState(false);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.userData.accessToken);
  const userData = useSelector((state) => state.userData.userData);
  const { path, url } = useRouteMatch();

  const onNameClick = () => nameInputRef.current.focus();

  const oтEmailClick = () => emailInputRef.current.focus();

  const onPasswordClick = () => passwordInputRef.current.focus();

  const onNameChange = (evt) => {
    const value = evt.target.value
    setNameValue(value)
    value === userData.name ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onEmailChange = (evt) => {
    const value = evt.target.value
    setLoginValue(value)
    value === userData.email ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onPasswordChange = (evt) => {
    const value = evt.target.value
    setPasswordValue(value)
    value === passwordValue ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendUserData(accessToken, nameValue, loginValue, passwordValue))
  }

  const onCancelEditing = (evt) => {
    evt.preventDefault();
    setNameValue(userData.name)
    setLoginValue(userData.email)
    setPasswordValue('')
  }

  const handleLogout = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    dispatch(logout(refreshToken))
  }

  useEffect(() => {
    if (userData) {
      setLoginValue(userData.email);
      setNameValue(userData.name);
      setPasswordValue('');
    }
  }, [userData]);

  return (
    <section className={ProfileStyles.wrapper}>
      <nav className={ProfileStyles.navigation}>
        <ul className={`${ProfileStyles.list}`}>
          <li className={ProfileStyles.list_item}>
            <NavLink
              activeClassName={ProfileStyles.link_active}
              className={`${ProfileStyles.link} text text_type_main-medium`}
              to={`${url}`}
              exact
            >
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={ProfileStyles.link_active}
              className={`${ProfileStyles.link} text text_type_main-medium`}
              to={`${url}/orders`}
            >
              История заказов
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={ProfileStyles.link_active}
              className={`${ProfileStyles.link} text text_type_main-medium`}
              to="/login"
              onClick={handleLogout}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p
          className={`${ProfileStyles.text} text text_type_main-default text_color_inactive`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <Route exact path={`${path}`}>
        <form onSubmit={onSubmit} className={ProfileStyles.form}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={onNameChange}
            icon={"EditIcon"}
            value={nameValue}
            name={"name"}
            error={false}
            ref={nameInputRef}
            onIconClick={onNameClick}
            errorText={"Ошибка"}
            size={"default"}
          />
          <Input
            type={"text"}
            placeholder={"Логин"}
            onChange={onEmailChange}
            icon={"EditIcon"}
            value={loginValue}
            name={"name"}
            error={false}
            ref={emailInputRef}
            onIconClick={oтEmailClick}
            errorText={"Ошибка"}
            size={"default"}
          />
          <Input
            type={"text"}
            placeholder={"Пароль"}
            onChange={onPasswordChange}
            icon={"EditIcon"}
            value={passwordValue}
            name={"name"}
            error={false}
            ref={passwordInputRef}
            onIconClick={onPasswordClick}
            errorText={"Ошибка"}
            size={"default"}
          />
          {
            isDataChanged && (<div className={ProfileStyles.buttons_container}>
              <Button onClick={onCancelEditing} type="secondary" size="medium">
                Отмена
              </Button>
              <Button type="primary" size="medium">
                Сохранить
              </Button>
            </div>)
          }
        </form>
      </Route>
      <Route exact path={`${path}/orders`}>
        {null}
      </Route>
    </section>
  );
};

export default Profile;
