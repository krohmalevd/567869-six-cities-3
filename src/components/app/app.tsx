import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page';
import LoginPage from '../../pages/login-page';
import FavoritesPage from '../../pages/favorites-page';
import OfferPage from '../../pages/offer-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route';
import Layout from '../layout';
import { getAuthorizationStatus } from '../../authorization-status';
import { City } from '../../types/offer';
import { Reviews } from '../../types/review';
import { useAppDispatch } from '../../hooks/use-redux';
import { fetchOffersAction } from '../../store/action';

type AppProps = {
  cities: City[];
  reviews: Reviews;
};

function App({ cities, reviews }: AppProps): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<MainPage cities={cities} />} />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute
                  authorizationStatus={getAuthorizationStatus()}
                  isReverse
                >
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={getAuthorizationStatus()}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route
              path={`${AppRoute.Offer}/:id`}
              element={<OfferPage reviews={reviews} />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
