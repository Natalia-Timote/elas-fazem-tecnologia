import './App.css'
import Logo from './assets/Logo'
import Banner from './components/Banner'
import EventForm from './components/EventForm'
import Theme from './components/Theme'

function App() {
  const themes = [
    {
      id: 1,
      title: "Backend"
    },
    {
      id: 2,
      title: "Cloud"
    },
    {
      id: 3,
      title: "Data Science"
    },
    {
      id: 4,
      title: "Devops"
    },
    {
      id: 5,
      title: "Front-end"
    },
    {
      id: 6,
      title: "IA"
    }
  ]

  return (
    <>
      <header>
        <Logo image="./logo.png" title="Logo - Elas fazem tecnologia" />
      </header>
      <main>
        <div className='main-first'>
          <Banner image="./banner-home.jpg" title="Banner com ilustração de mulheres diversas utilizando tecnologia."></Banner>
          <EventForm>Preencha para criar um evento:</EventForm> 
        </div>
        <section className='themes'>
          {themes.map((theme) => {
            return <Theme key={theme.id} theme={theme} />
          })}
        </section>
      </main>
    </>
  )
}

export default App
