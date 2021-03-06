import {Route, Redirect, useLocation, RouteProps} from 'react-router-dom';
import {FC} from 'react';
import {useSelector} from "../../services/hooks/hooks";

const ProtectedRoute: FC<RouteProps> = ({children, ...rest}) => {
  const userData = useSelector((state) => state.userData.userData);
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