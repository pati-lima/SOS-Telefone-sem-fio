
import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.svg'
import styles from '../styles/pages/sobre.module.css'
import patiImg from '../assets/pati.jpeg'

export function Sobre() {
  return (
    <>
      <Header title="Sobre Mim" image={sobreImg} />
      <div className={styles.sobreContainer}>
        {/* <img className={styles.bioImage} src={patiImg}/> */}
      <div className={styles.bioContainer}>
        <h2 className={styles.biotitle}>
            Patrícia Lima , prazer!
        </h2>
        <p className={styles.biotext}>
        Apaixonada por aprendizado e tecnologias, atualmente estou cursando uma graduação em Análise e desenvolvimento 
        de Sistemas, e participo de um Bootcamp de Front-End da Reprograma. Tenho um alto senso de trabalho 
        em equipe contribuo na resolução de problemas de forma criativa, com pensamento crítico e comunicação eficiente.
        Busco aprimorar minhas experiências em liderança , gerenciamento , desenvolvimento de software , 
        gestão e outros, para aproximar a humanidade do cumprimento de seus objetivos 
        no caminho para o excitante futuro tecnológico.
        </p>
      </div>


      </div>
    </>
  )
}