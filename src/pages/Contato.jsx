
import { useState, UseState } from 'react'

import { Header} from '../components/Header'
import contatoImg from '../assets/contato.png'
// import {database} from '../service/firebase'
// import { ref, push, set} from 'firebase/database'
import { SiInstagram  } from 'react-icons/si'
import { SiLinkedin }  from 'react-icons/si'
import { FaWhatsappSquare }  from 'react-icons/fa'


import styles from '../styles/pages/contato.module.css'
import  {  ToastContainer ,  toast  }  from  'react-toastify' ; 
  import  'react-toastify/dist/ReactToastify.css' ;

const notify = () =>{
  toast("Recebi sua mensagem, em breve entrarei em contato!")
}



export function Contato() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleInputValueNome(event){
    setNome(event.target.value)
  }
  
  function handleInputValueTelefone(event){
    setTelefone(event.target.value)
  }
  function handleInputValueMensagem(event){
    setMensagem(event.target.value)
  }
  
  function handleCreateMessage(event){
    event.preventDefault()

    const messageListRef = ref(database, 'mensagens')
    const newMessageRef = push(messageListRef)
    set (newMessageRef,{
      nome:nome,
      telefone: telefone,
      texto: mensagem

    })

    setMensagem('')
    setNome('')
    setTelefone('')

  }
  return (
    <>
      <Header title image={contatoImg}className={styles.imgcontato} />
      <div className={styles.containerForm}>
        <form  className={styles.form} onSubmit={handleCreateMessage}>
        <h3  className={styles.textform}>Fale comigo através das minhas redes sociais! </h3>
          {/* <input 
            onChange={handleInputValueNome} 
            placeholder="Como gostaria de ser chamado (a)?"
            value={nome}
            className={styles.formInput}
          /> */}
          {/* <input 
            onChange={handleInputValueTelefone} 
            placeholder="Digite um telefone pra contato!"
            value={telefone}
            className={styles.formInput}
          /> */}
          {/* <textarea 
            onChange={handleInputValueMensagem} 
            placeholder="Gostaria de Deixar alguma observação?"
            value={mensagem}
            className={styles.formTextArea}
          /> */}
          {/* <button onClick={notify} className={styles.formButton} type="submit">Enviar mensagem </button>
            <ToastContainer />  */}
              {/* <p className={styles.paragrafoContato}>Fale comigo através das minhas redes! </p> */}
        <div className ={styles.redessociais}>
        <a className={styles.iconesRedesSociais} href ="https://contate.me/sos-telefone-sem-fio">< FaWhatsappSquare></FaWhatsappSquare></a>
        <a  className={styles.iconesRedesSociais}  href   =  "https://www.instagram.com/psi_estercosta/ " ><SiInstagram></SiInstagram></a>
        <a className={styles.iconesRedesSociais} href ="https://www.linkedin.com/in/ester-ribeiro-da-costa-a5a094200/">< SiLinkedin></SiLinkedin></a>
        </div>
              
       
        
        </form>
      </div>
    </>
  )
}
