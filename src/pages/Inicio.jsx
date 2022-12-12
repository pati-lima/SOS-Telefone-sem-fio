import { Header } from '../components/Header'
import celSemFioeImg from '../assets/celsemfio.png'
import meninaImg from '../assets/meninatriste.jpg'
import antesedepoisImg from '../assets/tristefeliz.jpg'
import maosImg from '../assets/maoscoracao.jpg'
import regandoImg from '../assets/regandomente.jpg'
import arcoirisImg from '../assets/meninaarcoiris.jpg'

import styles from '../styles/pages/inicio.module.css'
export function Inicio() {
  return (
    <>
      <Header title="Telefone sem Fio" image={celSemFioeImg} />
      <div className={styles.homeContainer}>
      <img className={styles.inicioImage} src={meninaImg}/>
        <div className={styles.cardContainer}>
        <img src="" alt="" />
          <h2 className={styles.titleinicio}>Como Surgiu ☕</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore, recusandae adipisci assumenda quaerat veritatis animi natus in officiis quisetur. </p>
        </div>
      </div>
      <div className={styles.homeContainer}>
       
        <div className={styles.cardContainer}>
        <img className={styles.inicioImage} src={antesedepoisImg}/>
          <h2 className={styles.titleinicio}>Como Surgiu ☕</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore, recusandae adipisci assumenda quaerat veritatis animi natus in officiis quisetur. </p>
        </div>
      </div>
      <div className={styles.homeContainer}>
       
        <div className={styles.cardContainer}>
        
          <h2 className={styles.titleinicio}>Como Surgiu ☕</h2>
          <img className={styles.inicioImage} src={maosImg}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore, recusandae adipisci assumenda quaerat veritatis animi natus in officiis quisetur. </p>
        </div>
      </div>
      <div className={styles.homeContainer}>
       
        <div className={styles.cardContainer}>
        <img className={styles.inicioImage} src={arcoirisImg}/>
          <h2 className={styles.titleinicio}>Como Surgiu ☕</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore, recusandae adipisci assumenda quaerat veritatis animi natus in officiis quisetur. </p>
          <img className={styles.inicioImage} src={regandoImg}/>
        </div>
      </div>
        
    </>

    
  )
}