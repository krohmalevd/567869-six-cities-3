import { Reviews } from '../types/review';

const mockReviews: Reviews = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: 'a3b2c1d0-e9f8-4a7b-6c5d-4321fedcba98',
    date: '2023-01-15T09:30:00.000Z',
    user: {
      name: 'Sophie Marceau',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: true,
    },
    comment: 'Excellent location and very comfortable apartment!',
    rating: 5,
  },
  {
    id: 'c4d5e6f7-a8b9-0c1d-2e3f-456789abcdef',
    date: '2022-11-22T18:45:12.345Z',
    user: {
      name: 'Hans Müller',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    comment: 'Nice place but could use some improvements in the kitchen area.',
    rating: 3,
  },
  {
    id: 'd5e6f7a8-b9c0-d1e2-f3a4-56789abcdef0',
    date: '2023-03-05T12:15:30.678Z',
    user: {
      name: 'Maria Garcia',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: true,
    },
    comment: 'Absolutely stunning view and perfect service! Will come again.',
    rating: 5,
  },
];

export default mockReviews;
