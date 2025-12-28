import './App.css'
import EventForm from './components/EventForm'

function App() {
  return (
    <>
      <header>
        <img src="./logo.png" alt="Logo - Elas fazem tecnologia" />
      </header>
      <main>
        <img src="./banner-home.jpg" alt="Banner com ilustração de mulheres diversas utilizando tecnologia." />
        <EventForm>Preencha para criar um evento:</EventForm>
      </main>
    </>
  )
}

export default App
