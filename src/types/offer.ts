type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

type OfferType = 'apartment' | 'house' | 'room' | 'hotel' | 'cabin' | 'studio';

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type BaseOffer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type Offer = BaseOffer & {
  previewImage: string;
}

export type FullOffer = BaseOffer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};
