import {Route, Redirect, useLocation, RouteProps} from 'react-router-dom';
import {useSelector, RootStateOrAny} from "react-redux";
import {FC} from 'react';

const ProtectedRoute: FC<RouteProps> = ({children, ...rest}) => {
  const userData = useSelector((state: RootStateOrAny) => state.userData.userData);
  const location = useLocation();

  return (
    <Route
      {...rest}
      //@ts-ignore
      render={
        () => userData ? (children) : <Redirect to={{
          pathname: `/login`,
          state: {previousLocation: location},
        }}/>
      }
    />
  );
}

export default ProtectedRoute;