import ProfileStyles from "./profile.module.css";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import { useDispatch, } from "react-redux";
import { logout } from "../../services/actions/user";
import ProfileForm from '../../components/profile-form/profile-form';
import OrderHistory from '../../components/order-history/order-history';

const Profile = () => {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();

  const handleLogout = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    dispatch(logout(refreshToken))
  }

  return (
    <article className={ProfileStyles.wrapper}>
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
        <ProfileForm />
      </Route>
      <Route exact path={`${path}/orders`}>
        <OrderHistory />
      </Route>
    </article>
  );
};

export default Profile;
