import ProfileFormStyles from './profile-form.module.css';
import {useState, useRef, useEffect, ChangeEvent, MouseEvent, FormEvent} from "react";
import {useSelector, useDispatch, RootStateOrAny} from "react-redux";
import { sendUserData } from "../../services/actions/user";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";

const ProfileForm = () => {
  const userData = useSelector((state: RootStateOrAny) => state.userData.userData);
  const accessToken = useSelector((state: RootStateOrAny) => state.userData.accessToken);
  const dispatch = useDispatch();

  const [nameValue, setNameValue] = useState("?");
  const [loginValue, setLoginValue] = useState("?");
  const [passwordValue, setPasswordValue] = useState("");
  const [isDataChanged, setIsDataChanged] = useState(false);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  // @ts-ignore
  const onNameClick = () => nameInputRef.current.focus();

  // @ts-ignore
  const oтEmailClick = () => emailInputRef.current.focus();

  // @ts-ignore
  const onPasswordClick = () => passwordInputRef.current.focus();

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setNameValue(value)
    value === userData.name ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setLoginValue(value)
    value === userData.email ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onPasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setPasswordValue(value)
    value === passwordValue ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendUserData(accessToken, nameValue, loginValue, passwordValue))
  }

  const onCancelEditing = () => {
    // @ts-ignore
    // evt.preventDefault();
    setNameValue(userData.name)
    setLoginValue(userData.email)
    setPasswordValue('')
  }

  useEffect(() => {
    if (userData) {
      setLoginValue(userData.email);
      setNameValue(userData.name);
      setPasswordValue('');
    }
  }, [userData]);

  return (
    <form onSubmit={onSubmit} className={ProfileFormStyles.form}>
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
        isDataChanged && (<div className={ProfileFormStyles.buttons_container}>
          <Button onClick={onCancelEditing} type="secondary" size="medium">
            Отмена
          </Button>
          <Button type="primary" size="medium">
            Сохранить
          </Button>
        </div>)
      }
    </form>
  );
}

export default ProfileForm;