 
import styles from '../styles/components/footer.module.css'

import { SiLinkedin }  from 'react-icons/si'


export function Footer() {
  return (
    <footer className = {styles.footerContainer}>
      
    
        <p  className ={styles.footerText}>
        Copyright 2022 ©  Todos os direitos reservados - Desenvolvido por  Patrícia Lima ❤️
        </p >
        {/* <div  className ={styles.redessociais} >

       
        <div >

        <a className={styles.iconesRedesSociais} href ="https://www.linkedin.com/in/patricialima25/">< SiLinkedin></SiLinkedin></a>
        </div>
        
        </div> */}
    </footer>
     
  )
}


