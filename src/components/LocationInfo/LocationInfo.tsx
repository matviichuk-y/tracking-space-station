import React from 'react';
import styles from './LocationInfo.module.css'
import { useISSContext } from '../../hooks/useISSContext';

const LocationInfo: React.FC = () => {
  const { location, isLoading, error } = useISSContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading location data: {error.message}</div>;
  }

  if (!location) {
    return <div>No location data available</div>;
  }

  return (
    <div className={styles.locationInfo}>
      <h3 className={styles.title}>ISS is now located at:</h3>
      <div className={styles.coordinates}>
        <span>longitude: {location.longitude}, </span>
        <span>latitude: {location.latitude}</span>
      </div>
    </div>
  );
};

export default LocationInfo;
