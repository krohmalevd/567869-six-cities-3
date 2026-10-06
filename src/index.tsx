import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app';
import { cities } from './mocks/cities';
import mockOffers from './mocks/offers';
import mockReviews from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cities={cities} offers={mockOffers} reviews={mockReviews}/>
    </Provider>
  </React.StrictMode>
);
