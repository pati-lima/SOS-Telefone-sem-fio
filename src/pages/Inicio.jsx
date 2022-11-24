import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'

export function Inicio() {
  return (
    <>
      <Header title="Meu site pessoal" image={homeImg} />
    </>
  )
}