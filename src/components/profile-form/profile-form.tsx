import ProfileFormStyles from './profile-form.module.css';
import {FC, useState, useRef, useEffect, ChangeEvent, FormEvent} from "react";
import {sendUserData} from "../../services/actions/user";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "../../services/hooks/hooks";

const ProfileForm: FC = () => {
  const userData = useSelector((state) => state.userData.userData);
  const accessToken = useSelector((state) => state.userData.accessToken);
  const dispatch = useDispatch();

  const [nameValue, setNameValue] = useState("?");
  const [loginValue, setLoginValue] = useState("?");
  const [passwordValue, setPasswordValue] = useState("");
  const [isDataChanged, setIsDataChanged] = useState(false);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const onNameClick = () => null !== nameInputRef.current && nameInputRef.current.focus();

  const onEmailClick = () => null !== emailInputRef.current && emailInputRef.current.focus();

  const onPasswordClick = () => null !== passwordInputRef.current && passwordInputRef.current.focus();

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setNameValue(value)
    // @ts-ignore
    value === userData.name ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setLoginValue(value)
    // @ts-ignore
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
    setNameValue(userData.name)
    // @ts-ignore
    setLoginValue(userData.email)
    setPasswordValue('')
  }

  useEffect(() => {
    if (userData) {
      // @ts-ignore
      setLoginValue(userData.email);
      // @ts-ignore
      setNameValue(userData.name);
      setPasswordValue('');
    }
  }, [userData]);

  return (
    <form onSubmit={onSubmit} className={ProfileFormStyles.form}>
      <Input
        type={"text"}
        placeholder={"??????"}
        onChange={onNameChange}
        icon={"EditIcon"}
        value={nameValue}
        name={"name"}
        error={false}
        ref={nameInputRef}
        onIconClick={onNameClick}
        errorText={"????????????"}
        size={"default"}
      />
      <Input
        type={"text"}
        placeholder={"??????????"}
        onChange={onEmailChange}
        icon={"EditIcon"}
        value={loginValue}
        name={"name"}
        error={false}
        ref={emailInputRef}
        onIconClick={onEmailClick}
        errorText={"????????????"}
        size={"default"}
      />
      <Input
        type={"text"}
        placeholder={"????????????"}
        onChange={onPasswordChange}
        icon={"EditIcon"}
        value={passwordValue}
        name={"name"}
        error={false}
        ref={passwordInputRef}
        onIconClick={onPasswordClick}
        errorText={"????????????"}
        size={"default"}
      />
      {
        isDataChanged && (<div className={ProfileFormStyles.buttons_container}>
          <Button onClick={onCancelEditing} type="secondary" size="medium">
            ????????????
          </Button>
          <Button type="primary" size="medium">
            ??????????????????
          </Button>
        </div>)
      }
    </form>
  );
}

export default ProfileForm;