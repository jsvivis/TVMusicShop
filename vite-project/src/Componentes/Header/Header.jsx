import {Link} from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {
  return (

    <header className={styles.header} >
      <h1>T&V Music Shop</h1>
      <ul className={styles.menu}>
        <li><Link className={styles.linkmenu} to="./">HOME</Link></li>
        <li><Link className={styles.linkmenu} to="./Produto">PRODUTOS</Link></li>
        <li><Link className={styles.linkmenu} to="./Sobre">SOBRE</Link></li>
      </ul>

    </header>
  )
}