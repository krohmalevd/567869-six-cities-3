import { Offer } from '../../types/offer';
import FavoritesItem from '../favorites-item/favorites-item';

type FavoritesListProps = {
  offers: Offer[];
};

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
  const offersByCity: Record<string, Offer[]> = {};

  offers.forEach((offer) => {
    const cityName = offer.city.name;
    if (!offersByCity[cityName]) {
      offersByCity[cityName] = [];
    }
    offersByCity[cityName].push(offer);
  });

  return (
    <ul className="favorites__list">
      {Object.entries(offersByCity).map(([cityName, cityOffers]) => (
        <FavoritesItem
          key={cityName}
          cityName={cityName}
          offers={cityOffers}
        />
      ))}
    </ul>
  );
}

export default FavoritesList;
