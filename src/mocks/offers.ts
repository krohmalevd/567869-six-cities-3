import { Offers } from '../types/offer';

const mockOffers: Offers = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description:
      'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: false,
    },
    images: ['https://15.design.htmlacademy.pro/static/hotel/1.jpg', 'https://15.design.htmlacademy.pro/static/hotel/2.jpg', 'https://15.design.htmlacademy.pro/static/hotel/3.jpg'],
    maxAdults: 4,
  },
  {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Modern loft in the city center',
    type: 'house',
    price: 200,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 10,
      },
    },
    location: {
      latitude: 48.856613,
      longitude: 2.352222,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    description: 'Stylish loft with a great view of the Eiffel Tower.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Washing Machine'],
    host: {
      name: 'Sophie Marceau',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/2.jpg',
      isPro: true,
    },
    images: ['https://15.design.htmlacademy.pro/static/hotel/1.jpg', 'https://15.design.htmlacademy.pro/static/hotel/2.jpg', 'https://15.design.htmlacademy.pro/static/hotel/3.jpg'],
    maxAdults: 3,
  },
  {
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    title: 'Cozy cabin in the woods',
    type: 'cabin',
    price: 90,
    city: {
      name: 'Berlin',
      location: {
        latitude: 52.520008,
        longitude: 13.404954,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.520008,
      longitude: 13.404954,
      zoom: 12,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.5,
    description: 'Perfect for nature lovers, surrounded by forest.',
    bedrooms: 1,
    goods: ['Dishwasher', 'Cabel TV', 'Wi-Fi', 'Kitchen', 'Washing Machine', 'Towels'],
    host: {
      name: 'Hans Müller',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: false,
    },
    images: ['https://15.design.htmlacademy.pro/static/hotel/1.jpg'],
    maxAdults: 2,
  },
  {
    id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
    title: 'Luxury penthouse with sea view',
    type: 'apartment',
    price: 350,
    city: {
      name: 'Barcelona',
      location: {
        latitude: 41.385063,
        longitude: 2.173404,
        zoom: 14,
      },
    },
    location: {
      latitude: 41.385063,
      longitude: 2.173404,
      zoom: 14,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    description: 'Stunning penthouse with a private pool and panoramic views.',
    bedrooms: 4,
    goods: ['Fridge', 'Towels', 'Baby seat'],
    host: {
      name: 'Maria Garcia',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: true,
    },
    images: ['https://15.design.htmlacademy.pro/static/hotel/1.jpg', 'https://15.design.htmlacademy.pro/static/hotel/2.jpg', 'https://15.design.htmlacademy.pro/static/hotel/3.jpg'],
    maxAdults: 6,
  },
];

export default mockOffers;
