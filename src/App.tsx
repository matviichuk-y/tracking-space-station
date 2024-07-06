import React from 'react';
import styles from './styles/App.module.css'
import CurrentTime from './components/CurrentTime/CurrentTime';
import LocationInfo from './components/LocationInfo/LocationInfo';
import LocationOnMap from './components/LocationOnMap/LocationOnMap';
import PeopleInSpace from './components/PeopleInSpace/PeopleInSpace';
import { ISSProvider } from './context/ISSContext';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <ISSProvider>
        <div className={styles.locationInfo}><LocationInfo /></div>
        <div className={styles.currentTime}><CurrentTime /></div>
        <div className={styles.locationOnMap}><LocationOnMap /></div>
        <div className={styles.peopleInSpace}><PeopleInSpace /></div>
      </ISSProvider>
    </div>
  );
};

export default App;
