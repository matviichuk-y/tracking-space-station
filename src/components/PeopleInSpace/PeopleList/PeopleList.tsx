import { ISSMember } from "../../../types/iss"
import styles from './PeopleList.module.css'

interface PeopleListProps {
  crew: ISSMember[];
}

const PeopleList: React.FC<PeopleListProps> = ({ crew }) => {
  return (
    <ul>
      {crew.map((person) => (
        <li key={person.name} className={styles.person}>
          <span className={styles.icon}>👤</span>
          {person.name}
        </li>
      ))}
    </ul>
  )
}

export default PeopleList