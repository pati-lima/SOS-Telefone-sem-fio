
import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.svg'
import styles from '../styles/pages/sobre.module.css'
import esterImg from '../assets/ester.png'

export function Sobre() {
  return (
    <>
      <Header title="Sobre Mim" image={sobreImg} />
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
    </>
  )
}