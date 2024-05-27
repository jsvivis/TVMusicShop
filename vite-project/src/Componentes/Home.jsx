import styles from './Home.module.css';
import blackweek from '../assets/imgs/blackweek.png';

export function Home(props) {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_banner}>
        <img src={blackweek} alt='Music Shop Black Week'/>
      </div>
    </div>
  )
}
