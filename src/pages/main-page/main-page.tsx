import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities';
import Tabs from '../../components/tabs';
import { City, Offers } from '../../types/offer';

type MainPageProps = {
  city: City;
  offers: Offers;
};

function MainPage({ city, offers }: MainPageProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <Cities city={city} offers={offers} />
      </main>
    </>
  );
}

export default MainPage;
