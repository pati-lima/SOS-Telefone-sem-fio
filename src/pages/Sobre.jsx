
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
      <Header title ="Sobre Mim" image ={blackGirlImg} />
      <div className={styles.sobreContainer}>
        <img className={styles.bioImage} src={esterImg}/>
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

      </div>
      <div className={styles.sobreContainer}>
        <img className={styles.bioImage} src={escritoraImg}/>
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

      </div>
      <div className={styles.sobreContainer}>
        <img className={styles.bioImage} src={livroEster}/>
      <div className={styles.bioContainer}>
      <h2 className={styles.bioTitle}>
            Sobre o livro
          </h2>
          <p className={styles.bioText}>
          Caminhos de vidro aborda sobre a linha tênue da vida e da morte. Um livro composto por duas partes 
          surpreendentes e cheios de relatos mais que emocionantes
{/* 
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
            </li> */}

          </p>


        </div>

      </div>
    </>
  )
}