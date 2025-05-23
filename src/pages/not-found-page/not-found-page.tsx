import Header from '../../components/header/header';

function NotFoundPage() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Page is not found</h1>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">Page is not found</b>
                <button className='button form__submit'>Do you want to go back?</button>
              </div>
            </section>
            <section className="cities__right-section">

            </section>
          </div>
        </div>
      </main>
    </div >
  );
}

export default NotFoundPage;
