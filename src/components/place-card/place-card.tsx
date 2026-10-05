import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { capitalize, ratingWidthStyle } from '../../utils/tools';
import { AppRoute } from '../../const';

type PlaceCardProps = {
  offer: Offer;
  handleHover?: (offer?: Offer) => void;
  className?: 'cities' | 'near-places';
};

function PlaceCard({ offer, handleHover, className = 'cities' }: PlaceCardProps): JSX.Element {
  const handleMouseOn = () => {
    handleHover?.(offer);
  };

  const handleMouseOff = () => {
    handleHover?.();
  };

  const { id, isPremium, isFavorite, images, title, price, rating, type } =
    offer;
  const isFavoriteClassName = isFavorite
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

  const cardClassName =
    className === 'near-places'
      ? 'near-places__card place-card'
      : 'cities__card place-card';

  const imageWrapperClassName =
    className === 'near-places'
      ? 'near-places__image-wrapper place-card__image-wrapper'
      : 'cities__image-wrapper place-card__image-wrapper';

  return (
    <Link to={`${AppRoute.Offer}/${id}`}>
      <article
        className={cardClassName}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseOff}
      >
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}

        <div className={imageWrapperClassName}>
          <img
            className="place-card__image"
            src={images[0]}
            width="260"
            height="200"
            alt="Place image"
          />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={isFavoriteClassName}
              type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: ratingWidthStyle(rating) }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">{title}</h2>
          <p className="place-card__type">{capitalize(type)}</p>
        </div>
      </article>
    </Link>
  );
}

export default PlaceCard;
