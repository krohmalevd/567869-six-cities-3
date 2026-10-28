import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, isAxiosError } from 'axios';
import type { Offer, FullOffer } from '../types/offer';
import { AppDispatch, State } from '../types/store';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<string>('city/changeCity');
export const fillOffers = createAction<Offer[]>('offers/fillOffers');
export const fillOffer = createAction<FullOffer | null>('offer/fillOffer');
export const setOffersDataLoadingStatus = createAction<boolean>(
  'offers/setOffersDataLoadingStatus'
);

export const setOfferDataLoadingStatus = createAction<boolean>(
  'offer/setOfferDataLoadingStatus'
);

export const setOfferError = createAction<'not-found' | 'network' | null>(
  'offer/setOfferError'
);

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>('/offers');
    dispatch(fillOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  }
);

export const fetchOfferAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setOfferDataLoadingStatus(true));
    dispatch(setOfferError(null));
    dispatch(fillOffer(null));

    try {
      const { data } = await api.get<FullOffer>(`/offers/${offerId}`);
      dispatch(fillOffer(data));
    } catch (error) {
      const isNotFound =
        isAxiosError(error) && error.response?.status === 404;

      dispatch(setOfferError(isNotFound ? 'not-found' : 'network'));

      throw error;
    } finally {
      dispatch(setOfferDataLoadingStatus(false));
    }
  }
);

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

