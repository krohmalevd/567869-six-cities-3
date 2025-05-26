import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities';
import Tabs from '../../components/tabs';

type MainPageProps = {
  placesCount: number;
}

function MainPage({ placesCount }: MainPageProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        < Tabs />
        < Cities placesCount={placesCount} />
      </main>
    </>
  );
}

export default MainPage;
