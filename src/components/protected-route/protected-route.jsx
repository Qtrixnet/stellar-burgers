import { Route, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from '../../services/actions/user';

const ProtectedRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.userData.accessToken);
  const userData = useSelector((state) => state.userData.userData);

  useEffect(() => {
    if (!userData) {
      dispatch(getUserData(accessToken));
    }
  }, [dispatch, accessToken, userData])

  return (
    <Route
      {...rest}
      render={
        () => userData ? (children) : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;