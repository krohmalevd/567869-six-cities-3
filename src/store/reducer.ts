import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffer, fillOffers, setOfferError, setOfferDataLoadingStatus, setOffersDataLoadingStatus } from './action';
import type { Offer, FullOffer } from '../types/offer';

const initialState: {
  city: string;
  offers: Offer[];
  offer: FullOffer | null;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  offerError: 'not-found' | 'network' | null;
} = {
  city: 'Paris',
  offers: [],
  offer: null,
  isOffersDataLoading: true,
  isOfferDataLoading: false,
  offerError: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fillOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(setOfferError, (state, action) => {
      state.offerError = action.payload;
    });
});

export { reducer };
