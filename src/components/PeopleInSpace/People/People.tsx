import React from 'react';
import { ISSMember } from '../../../types/iss';
import styles from './People.module.css'

interface PersonProps {
  person: ISSMember;
}

const Person: React.FC<PersonProps> = ({ person }) => {
  return (
    <li key={person.name} className={styles.person}>
      <span className={styles.icon}>👤</span>
      {person.name}
    </li>
  );
}

export default Person;