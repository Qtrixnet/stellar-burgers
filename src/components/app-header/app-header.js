import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={`${headerStyles.header} text text_type_main-default pt-4 pb-4`}>
      <nav>
        <ul className={headerStyles.list}>
          <li>
            <NavLink className={`p-5 ${headerStyles.link_active} ${headerStyles.link}`} to="/">
              <BurgerIcon type="primary" />
              <span className={`ml-2`}>Конструктор</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={`p-5 ${headerStyles.link}`} to="/fdg">
              <ListIcon type="secondary" />
              <span className={`ml-2`}>Лента заказов</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Logo className={headerStyles.logo} />
      <Link className={`p-5 ${headerStyles.link} ${headerStyles.profile}`} to="#">
        <ProfileIcon type="secondary" />
        <span className={`ml-2`}>Личный кабинет</span>
      </Link>
    </header >
  );
}

export default AppHeader;
