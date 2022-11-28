import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'

import styles from '../styles/pages/inicio.module.css'
export function Inicio() {
  return (
    <>
      <Header title="Meu site pessoal" image={homeImg} />
      <div className={styles.homeContainer}>
        {/* <div className={styles.cardContainer}>
          <img src="" alt="" />
          <h2 className={styles.titleinicio}>Vida</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Totam incidunt ipsa non fugiat. Nemo aliquid, ullam quis tenetur animi
             necessitatibus, exercitationem libero nam modi non sit impedit, deleniti deserunt unde?</p>
        </div> */}
        <div className={styles.cardContainer}>
        <img src="" alt="" />
          <h2 className={styles.titleinicio}>Código ☕</h2>
          <p>Aqui compartilho alguns projetinhos com o objetivo de aperfeiçoar meu aprendizado, e sempre na companhia de um bom café
            para ter bastante energia na hora de codar! </p>
        </div>
        <div className={styles.cardContainer}>
        <img src="" alt="" />
          <h2 className={styles.titleinicio}>Contatinho 📞</h2>
          <p>Entre em contato comigo . Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
        </div>
      </div>
    </>

    
  )
}