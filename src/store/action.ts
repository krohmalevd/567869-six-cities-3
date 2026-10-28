import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, isAxiosError } from 'axios';
import type { Offer, FullOffer } from '../types/offer';
import { AppDispatch, State } from '../types/store';
import { AuthorizationStatus } from '../const';
import type { AuthData } from '../types/auth-data';
import type { UserData } from '../types/user-data';
import { saveToken } from '../services/token';

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

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get('/login');
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === 401) {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        return;
      }

      throw error;
    }
  }
);

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login',
  async (authData, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>('/login', authData);

    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);
