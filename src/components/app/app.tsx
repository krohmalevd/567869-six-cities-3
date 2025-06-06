import { AppRoute } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page';
import LoginPage from '../../pages/login-page';
import FavoritesPage from '../../pages/favorites-page';
import OfferPage from '../../pages/offer-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route';
import Layout from '../layout';
import { getAuthorizationStatus } from '../../authorization-status';
import { Offers } from '../../types/offer';
import { Reviews } from '../../types/review';

type AppProps = {
  offers: Offers;
  reviews: Reviews;
};

function App({ offers, reviews }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<MainPage offers={offers} />} />
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
                  <FavoritesPage
                    offers={offers.filter((offer) => offer.isFavorite === true)}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path={`${AppRoute.Offer}/:id`}
              element={<OfferPage offers={offers} reviews={reviews} />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
