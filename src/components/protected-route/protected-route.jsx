import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, ...rest }) => {
  const userData = useSelector((state) => state.userData.userData);
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={
        () => userData ? (children) : <Redirect to={{
          pathname: `/login`,
          state: { previousLocation: location },
        }} />
      }
    />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;