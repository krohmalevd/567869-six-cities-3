import { Review } from '../../types/review';
import { ratingWidthStyle } from '../../utils/tools';

type ReviewsListProps = {
  review: Review;
};

function ReviewItem({ review }: ReviewsListProps): JSX.Element {
  const { user, rating, comment } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingWidthStyle(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          April 2019
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
