import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-redux';
import Spinner from '../spinner';

type PrivateRouteProps = {
  isReverse?: boolean;
  children: JSX.Element;
};

function PrivateRoute({
  isReverse,
  children,
}: PrivateRouteProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const shouldRenderChildren = isReverse ? !isAuthorized : isAuthorized;
  const redirectTo = isReverse ? AppRoute.Root : AppRoute.Login;

  return shouldRenderChildren ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
