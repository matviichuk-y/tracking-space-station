import React from 'react'
import styles from './CurrentTime.module.css'
import { useCurrentTime } from '../../hooks/useCurrentTime';

const CurrentTime: React.FC = () => {
    const currentTime = useCurrentTime();
    return (
        <div className={styles.currentTime}>
            <div className={styles.time}>{currentTime}</div>
        </div>
    );
};

export default CurrentTime