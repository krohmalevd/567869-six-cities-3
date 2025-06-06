import { getAuthorizationStatus } from '../../authorization-status';
import { AuthorizationStatus } from '../../const';
import { Reviews } from '../../types/review';
import ReviewForm from '../review-form';
import ReviewItem from '../review-item/review-item';

type ReviewProps = {
  reviews: Reviews;
};

function Review({ reviews }: ReviewProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}

      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </ul>
  );
}

export default Review;
