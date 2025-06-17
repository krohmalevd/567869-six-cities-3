import { Reviews } from '../types/review';

const mockReviews: Reviews = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/9.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    date: '2023-01-15T09:30:00.000Z',
    user: {
      name: 'Sophie',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/10.jpg',
      isPro: true,
    },
    comment: 'Excellent location and very comfortable apartment!',
    rating: 3.5,
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    date: '2022-11-22T18:45:12.345Z',
    user: {
      name: 'Hans',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: false,
    },
    comment: 'Nice place but could use some improvements in the kitchen area.',
    rating: 3,
  },
  {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    date: '2023-03-05T12:15:30.678Z',
    user: {
      name: 'Maria',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/8.jpg',
      isPro: true,
    },
    comment: 'Absolutely stunning view and perfect service! Will come again.',
    rating: 5,
  },
];

export default mockReviews;
