import { Helmet } from 'react-helmet-async';
import { Offers } from '../../types/offer';
import FavoritesList from '../../components/favorites-list';

type FavoritesPageProps = {
  offers: Offers;
};

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>
    </>
  );
}

export default FavoritesPage;
