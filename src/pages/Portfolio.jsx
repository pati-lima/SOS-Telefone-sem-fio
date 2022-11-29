
import { Header } from '../components/Header'
import portfolioImg from '../assets/portfolio.svg'
import styles from '../styles/pages/portfolio.module.css'
import gitImg from '../assets/github.png'
export function Portfolio () {
  return (
    <>
      <Header title="Meus Projetinhos" image={portfolioImg} />
      <div className={styles.cardsContainer} >
        <div className={styles.itensContainer}>
        <h2> Filmes <img 
        className={styles.imgContainer}src="https://media.giphy.com/media/g9vQ5N2fmuB245NRWk/giphy.gif" alt="filmes" target='black'/></h2>
        <p>
          Página criada durante o curso de Front-end da Reprograma 
          
          </p>
        <a className={styles.links} href="https://ghibliflix.netlify.app/" target='blank'>Clique aqui!</a>
        </div>

        <div className={styles.itensContainer}>
        <h2>To-Do List <img className={styles.imgContainer} src="https://media.giphy.com/media/Ed848hrDHv5MnVRIwE/giphy.gif" alt="todolist" target='black' /></h2>
        <p> Uma listinha de tarefas bem charmosa utilizando Javascript</p>
        <a className={styles.links} href="https://to-do-listpaty.netlify.app/" >Clique aqui!</a>
        </div>

        <div className={styles.itensContainer}>
        <h2>Meus Links <img className={styles.imgContainer} src="https://media.giphy.com/media/2CA2k57j4YkWLNwOnW/giphy.gif" alt="meuslinks"target='blank' /></h2>
        <p>
           Entre em contato comigo pelas minhas redes sociais.
        </p>
        <a className={styles.links} href="https://mylinkspaty.netlify.app/" >Clique aqui!</a>
        
        </div>
       
      </div>
      <div className={styles.git}> 
          <h2 className={styles.titleGit}>  Outros projetos no meu GitHub  <br /><a className={styles.linksGit} href="https://github.com/pati-lima?tab=repositories"  >Veja mais! </a></h2>
          
        </div>
    </>
  )
}