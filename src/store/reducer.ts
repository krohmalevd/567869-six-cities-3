import { createReducer } from '@reduxjs/toolkit';
import mockOffers from '../mocks/offers';
import { changeCity, fillOffers } from './action';

const initialState = {
  city: 'Paris',
  offers: mockOffers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
