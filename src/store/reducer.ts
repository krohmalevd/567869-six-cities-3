import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers } from './action';
import type { Offer } from '../types/offer';

const initialState: {
  city: string;
  offers: Offer[];
} = {
  city: 'Paris',
  offers: [],
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
