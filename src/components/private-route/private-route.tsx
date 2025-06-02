import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  isReverse?: boolean;
  children: JSX.Element;
};

function PrivateRoute({
  authorizationStatus,
  isReverse,
  children,
}: PrivateRouteProps) {
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const shouldRenderChildren = isReverse ? !isAuthorized : isAuthorized;
  const redirectTo = isReverse ? AppRoute.Root : AppRoute.Login;

  return shouldRenderChildren ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
