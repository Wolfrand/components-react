import './App.css'
import Button from './components/AlertButton'
import StylizedText from './components/StylizedText'

function App() {
  return (
    <>
      <main>
        <p>Desafio 1</p>
        <StylizedText phrase='Olá, mundo!' color='#E394D2' />

        <p>Desafio 2</p>
        <Button label='Crie um alerta sobre mim'/>
      </main>
    </>
  )
}

export default App