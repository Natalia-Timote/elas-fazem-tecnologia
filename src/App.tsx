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
        <Banner image="./banner-home.jpg" title="Banner com ilustração de mulheres diversas utilizando tecnologia."></Banner>
        <img src="./banner-home.jpg" alt="Banner com ilustração de mulheres diversas utilizando tecnologia." />
        <EventForm>Preencha para criar um evento:</EventForm>
        <div>
          <section>
            <Theme theme={themes[0]} />
          </section>
          <section>
            <Theme theme={themes[1]} />
          </section>
          <section>
            <Theme theme={themes[2]} />
          </section>
          <section>
            <Theme theme={themes[3]} />
          </section>
          <section>
            <Theme theme={themes[4]} />
          </section>
          <section>
            <Theme theme={themes[5]} />
          </section>
        </div>
      </main>
    </>
  )
}

export default App
