import { NavLink } from 'react-router-dom';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './header.module.css';
import { useSelector } from "react-redux";

const Header = () => {
  const userData = useSelector((state) => state.userData.userData);

  return (
    <header className={`${headerStyles.header} text text_type_main-default pt-4 pb-4`}>
      <div className={headerStyles.headerContainer}>
        <nav>
          <ul className={headerStyles.list}>
            <li>
              <NavLink activeClassName={headerStyles.link_active} className={`pt-5 pr-5 pb-5 ${headerStyles.link}`} to="/">
                <BurgerIcon type="primary" />
                <span className={`ml-2`}>Конструктор</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={headerStyles.link_active} className={`p-5 ${headerStyles.link}`} to="/orders">
                <ListIcon type="secondary" />
                <span className={`ml-2`}>Лента заказов</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={headerStyles.logo}>
          <Logo />
        </div>
        {
          userData ? (<NavLink activeClassName={headerStyles.link_active} className={`p-5 ${headerStyles.link} ${headerStyles.profile}`} to="/profile">
            <ProfileIcon type="secondary" />
            <span className={`ml-2`}>Личный кабинет</span>
          </NavLink>) : (<NavLink activeClassName={headerStyles.link_active} className={`p-5 ${headerStyles.link} ${headerStyles.profile}`} to="/login">
            <ProfileIcon type="secondary" />
            <span className={`ml-2`}>Войти</span>
          </NavLink>)
        }
      </div>
    </header >
  )
};

export default Header;
