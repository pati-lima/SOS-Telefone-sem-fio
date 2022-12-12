
import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.svg'
import styles from '../styles/pages/sobre.module.css'
import esterImg from '../assets/ester.png'
import blackGirlImg from '../assets/blackgirl.png'
import escritoraImg from '../assets/escritora.jpg'
import livroEster from '../assets/livroester.png'

export function Sobre() {
  return (
    <>
      <Header title="Sobre Mim" image={blackGirlImg} />
      <div className={styles.sobreContainer}>
        <img className={styles.bioImage} src={esterImg} />
        <div className={styles.bioContainer}>
          <h2 className={styles.bioTitle}>
            Ester Ribeiro , prazer!
          </h2>
          <p className={styles.bioText}>Olá, é um prazer te ter por aqui.
            Já que compartilharemos algumas confidenciais, deixe me começar. Sou nova no mundo dos escritores, apaixonada por pets, séries orientais e vinho! A arte, a música e histórias me deixam intrigada e sou uma amante fiel do café. Prefiro
            inverno e os dias de chuva são os meus dias mais produtivos!
          </p>


        </div>

      </div>
      {/* <div className={styles.sobreContainer}>
        <img className={styles.bioImage} src={escritoraImg} />
        <div className={styles.bioContainer}>
          <h2 className={styles.bioTitle}>
            Ester Ribeiro , prazer!
          </h2>
          <p className={styles.bioText}>


            <li className={styles.sobreList}>
              Quase psi.
            </li>
            <li className={styles.sobreList}>
              Escrevi um livro.
            </li>
            <li className={styles.sobreList}>
              Apaixonada por pets, séries e um bom vinho.
            </li >
            <li className={styles.sobreList}>
              Super curiosa em conhecer histórias.

            </li>
            <li className={styles.sobreList}>
              Não recuso um café
            </li>

          </p>


        </div>

      </div> */}
      <div className={styles.sobreContainer}>
        <img className={styles.bioImage} src={livroEster} />
        <div className={styles.bioContainer}>
          <h2 className={styles.bioTitle}>
          Ah, conhece meu livro? 

          </h2>
          <p className={styles.bioText}>
          Caminhos de vidro te mostra que o luto é bem mais presente na sua vida do que imagina. Trazendo duas faces, uma para pessoas em crise e outra para aqueles que querem 
          entender mais sobre os lutos. Sim, lutos! Existe mais de um e eu te explico quais são.
            

          </p>


        </div>

      </div>
    </>
  )
}