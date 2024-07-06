import { ISSMember } from "../../../types/iss"
import People from "../People/People";
import styles from './PeopleList.module.css'

interface PeopleListProps {
  crew: ISSMember[];
}

const PeopleList: React.FC<PeopleListProps> = ({ crew }) => {
  return (
    <>
      <h2 className={styles.title}>Current ISS Crew</h2>
      <ul className={styles.peopleList}>
        {crew.map((person) => (
          <People person={person} />
        ))}
      </ul>
    </>
  )
}

export default PeopleList