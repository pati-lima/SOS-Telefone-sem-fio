import { Header } from '../components/Header'
import celSemFioeImg from '../assets/celsemfio.png'
import meninaImg from '../assets/meninatriste.png'
import antesedepoisImg from '../assets/tristefeliz.png'
import maosImg from '../assets/maoscoracao.jpg'
import regandoImg from '../assets/regandomente.jpg'
import menteColorImg from '../assets/mentecolorida.png'


import styles from '../styles/pages/inicio.module.css'
export function Inicio() {
  return (
    <>
      <Header title="Telefone sem Fio" image={celSemFioeImg} />
      <div className={styles.homeContainer}>
      <img className={styles.inicioImage} src={meninaImg}/>
        <div className={styles.cardContainertwo}>
        
          <h2 className={styles.titleiniciotwo}>A escuta real</h2>
          <p>"Estamos neste mundo para sermos pessoas reais, não pessoas perfeitas"

            Em cada atendimento feito, nas diversas histórias que já tive a oportunidade de ouvir, percebi algo em comum: pessoas presas nas suas angústias a ponto de ver que a vida já não tinha o mínimo de sentido 
            para continuar se esforçando em (sobre)viver. </p>
        </div>
      </div>
      <div className={styles.homeContainer}>
       
          <img className={styles.inicioImage} src={antesedepoisImg}/>
        <div className={styles.cardContainerone}>
        
          <h2 className={styles.titleinicioone}>De onde veio a Idéia</h2>
          <p>O projeto telefone sem fio nasce do desejo de acolher no momento de maior 
            urgência emocional ou solidão, mas também para ser sua amiga de aluguel. Estar aqui 
            quando você sentir que ninguém mais está! <br />
            Carrega esse nome graças a brincadeira antiga com duas latas e um fio! Assim como o fio do telefone sem fio, espero estejamos ligados mesmo distantes!
 </p>
        </div>
      </div>
      {/* <div className={styles.homeContainer}>
       
        <div className={styles.cardContainer}>
          <h2 className={styles.titleinicio}>Antes , Durante e Depois</h2>
        <img className={styles.inicioImage} src={antesedepoisImg}/>
          <p>O projeto telefone sem fio nasce do desejo de acolher no momento de maior urgência emocional ou solidão, mas também  para ser sua amiga de aluguel. Estar aqui quando você sentir que ninguém mais está! </p>
        </div>
      </div> */}
      <div className={styles.homeContainer}>
        <img className={styles.inicioImage} src={menteColorImg}/>
       
        <div className={styles.cardContainerfinal}>
          
          <p className={styles.paragFinal}>"A palavra é como a arte bem transmitida em um quadro, ora, se tiver um guarda-chuva na tela, como posso dizer que é um avião? mas nem todos estão prontos para confrontar suas certezas" </p>
         
        </div>
      </div>
        
    </>

    
  )
}