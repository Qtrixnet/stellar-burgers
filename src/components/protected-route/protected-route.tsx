import {Route, Redirect, useLocation} from 'react-router-dom';
import {useSelector, RootStateOrAny} from "react-redux";
import {FC} from 'react';
import {IProtectedRouteProps} from "../../services/types/types";

const ProtectedRoute: FC<IProtectedRouteProps> = ({children, ...rest}) => {
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