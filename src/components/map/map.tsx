import { useEffect, useRef } from 'react';
import { Marker, layerGroup } from 'leaflet';
import { defaultCustomIcon, currentCustomIcon } from './map-icon';
import useMap from '../../hooks/use-map';
import { City, Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
  className?: string;
  selectedOffer?: Offer;
}

function Map({ city, offers, className = 'cities__map map', selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const offerMarker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        offerMarker
          .setIcon(
            selectedOffer?.id === offer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };

    }
  }, [map, offers, selectedOffer]);

  return (
    <section className={className} ref={mapRef} />
  );
}

export default Map;
