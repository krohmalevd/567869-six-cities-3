import { Host } from './offer';

export type Review = {
  id: string;
  offerId: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
}

export type Reviews = Review[];
