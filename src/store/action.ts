import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { Offer } from '../types/offer';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/store';

export const changeCity = createAction<string>('city/changeCity');
export const fillOffers = createAction<Offer[]>('offers/fillOffers');
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
  }
);
