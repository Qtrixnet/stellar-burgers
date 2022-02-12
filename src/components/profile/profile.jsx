import { useState, useRef } from "react";
import ProfileStyles from "./profile.module.css";
import { Link } from "react-router-dom";
import {
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Profile = () => {
  const [nameValue, setNameValue] = useState('Марк');
  const [loginValue, setLoginValue] = useState('mail@stellar.burgers');
  const [passwordValue, setPasswordValue] = useState('******|');
  const inputRef = useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

  return (
    <section className={ProfileStyles.wrapper}>
      <nav className={ProfileStyles.navigation}>
        <ul className={`${ProfileStyles.list}`}>
          <li className={ProfileStyles.list_item}>
            <Link className={`${ProfileStyles.link} text text_type_main-medium`} to="/profile">Профиль</Link>
          </li>
          <li>
            <Link className={`${ProfileStyles.link} text text_type_main-medium`} to="/">История заказов</Link>
          </li>
          <li>
            <Link className={`${ProfileStyles.link} text text_type_main-medium`} to="/">Выход</Link>
          </li>
        </ul>
        <p className={`${ProfileStyles.text} text text_type_main-default text_color_inactive`}>В этом разделе вы можете изменить свои персональные данные</p>
      </nav>
      <form className={ProfileStyles.form}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setNameValue(e.target.value)}
          icon={'EditIcon'}
          value={nameValue}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
        <Input
          type={'text'}
          placeholder={'Логин'}
          onChange={e => setLoginValue(e.target.value)}
          icon={'EditIcon'}
          value={loginValue}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
        <Input
          type={'text'}
          placeholder={'Пароль'}
          onChange={e => setPasswordValue(e.target.value)}
          icon={'EditIcon'}
          value={passwordValue}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
      </form>
    </section>
  );
};

export default Profile;