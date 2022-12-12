import { Header } from '../components/Header'
import celSemFioeImg from '../assets/celsemfio.png'

import styles from '../styles/pages/inicio.module.css'
export function Inicio() {
  return (
    <>
      <Header title="Telefone sem Fio" image={celSemFioeImg} />
      <div className={styles.homeContainer}>
       
        <div className={styles.cardContainer}>
        <img src="" alt="" />
          <h2 className={styles.titleinicio}>Como Surgiu ☕</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore, recusandae adipisci assumenda quaerat veritatis animi natus in officiis quisetur. </p>
        </div>
      </div>
      <div className={styles.homeContainer}>
       
        <div className={styles.cardContainer}>
        <img src="" alt="" />
          <h2 className={styles.titleinicio}>Como Surgiu ☕</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore, recusandae adipisci assumenda quaerat veritatis animi natus in officiis quisetur. </p>
        </div>
      </div>
      <div className={styles.homeContainer}>
       
        <div className={styles.cardContainer}>
        <img src="" alt="" />
          <h2 className={styles.titleinicio}>Como Surgiu ☕</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore, recusandae adipisci assumenda quaerat veritatis animi natus in officiis quisetur. </p>
        </div>
      </div>
      <div className={styles.homeContainer}>
       
        <div className={styles.cardContainer}>
        <img src="" alt="" />
          <h2 className={styles.titleinicio}>Como Surgiu ☕</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore, recusandae adipisci assumenda quaerat veritatis animi natus in officiis quisetur. </p>
        </div>
      </div>
        
    </>

    
  )
}