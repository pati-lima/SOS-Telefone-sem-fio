import { Link } from 'react-router-dom'

import styles from '../styles/components/menu.module.css'
import logoImg from'../assets/novologo.png'

export function Menu() {
  return(
     <>
     
     
    <ul className={styles.menuContainer}>
      <div className={styles.logoMenu}>
    {/* <img  src={logoImg} /> */}
    </div>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/">Home</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/sobre">Sobre</Link>
      </li>
      
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/contato">Contato</Link>
      </li>
    </ul>
     </>
  )
}