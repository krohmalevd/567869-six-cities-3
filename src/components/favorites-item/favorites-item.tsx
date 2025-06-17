import { Offers } from '../../types/offer';
import FavoritesCard from '../favorites-card';

type FavoritesItemsProps = {
  cityName: string;
  offers: Offers;
};

function FavoritesItem({ cityName, offers }: FavoritesItemsProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <FavoritesCard key={offer.id} offer={offer} />
        ))}
      </div>
    </li>
  );
}

export default FavoritesItem;
