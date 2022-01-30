import { NavLink, Link } from 'react-router-dom';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './header.module.css';

const Header = () => (
  <header className={`${headerStyles.header} text text_type_main-default pt-4 pb-4`}>
    <div className={headerStyles.headerContainer}>
      <nav>
        <ul className={headerStyles.list}>
          <li>
            <NavLink className={`pt-5 pr-5 pb-5 ${headerStyles.link_active} ${headerStyles.link}`} to="/">
              <BurgerIcon type="primary" />
              <span className={`ml-2`}>Конструктор</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={`p-5 ${headerStyles.link}`} to="/">
              <ListIcon type="secondary" />
              <span className={`ml-2`}>Лента заказов</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={headerStyles.logo}>
        <Logo />
      </div>
      <Link className={`p-5 ${headerStyles.link} ${headerStyles.profile}`} to="/">
        <ProfileIcon type="secondary" />
        <span className={`ml-2`}>Личный кабинет</span>
      </Link>
    </div>
  </header >
);

export default Header;
