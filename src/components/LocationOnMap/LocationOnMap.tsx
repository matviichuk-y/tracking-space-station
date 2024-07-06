import React from 'react';
import styles from './LocationOnMap.module.css';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { useISSContext } from '../../hooks/useISSContext';
import { useMapCenter } from '../../hooks/useMapCenter';

const LocationOnMap: React.FC = () => {
  const { location } = useISSContext();
  const mapCenter = useMapCenter(location!)

  return (
    <div className={styles.mapContainer}>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          center={mapCenter}
          zoom={4}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          <Marker position={mapCenter} title="International Space Station" />
        </Map>
      </APIProvider>
    </div>
  );
};

export default LocationOnMap;
