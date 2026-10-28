import type { Token } from '../services/token';

export type UserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: Token;
};
