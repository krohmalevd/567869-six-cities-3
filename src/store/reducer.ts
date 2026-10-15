import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers, setOffersDataLoadingStatus } from './action';
import type { Offer } from '../types/offer';

const initialState: {
  city: string;
  offers: Offer[];
  isOffersDataLoading: boolean;
} = {
  city: 'Paris',
  offers: [],
  isOffersDataLoading: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
