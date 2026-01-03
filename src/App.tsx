import './App.css'
import Logo from './assets/Logo'
import Banner from './components/Banner'
import EventCard from './components/EventCard'
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

  const events = [
    {
      image: "./events/event-1.jpg",
      title: "Elas no Front-End",
      theme: themes[4].title,
      date: new Date("2026/02/02"),
      description: "Interfaces acessíveis criadas por mulheres desenvolvedoras"
    },
    {
      image: "./events/event-1.jpg",
      title: "Mulheres no Backend",
      theme: themes[0].title,
      date: new Date("2026/03/16"),
      description: "Lógica, APIs e carreira no desenvolvimento backend"
    },
    {
      image: "./events/event-1.jpg",
      title: "Mulheres & Inteligência Artificial",
      theme: themes[5].title,
      date: new Date("2026/04/29"),
      description: "IA prática, ética e inclusiva para mulheres"
    },
    {
      image: "./events/event-1.jpg",
      title: "Dados com Propósito",
      theme: themes[2].title,
      date: new Date("2026/03/24"),
      description: "Análise de dados para resolver problemas reais"
    },
    {
      image: "./events/event-1.jpg",
      title: "Cloud para Elas",
      theme: themes[1].title,
      date: new Date("2026/05/08"),
      description: "Primeiros passos em computação em nuvem"
    },
    {
      image: "./events/event-1.jpg",
      title: "DevOps para Mulheres",
      theme: themes[3].title,
      date: new Date("2026/07/28"),
      description: "Integração, automação e cultura DevOps"
    },
    {
      image: "./events/event-1.jpg",
      title: "UI & Código",
      theme: themes[4].title,
      date: new Date("2026/04/12"),
      description: "Criando interfaces modernas, responsivas e acessíveis"
    },
    {
      image: "./events/event-1.jpg",
      title: "APIs para Iniciantes",
      theme: themes[0].title,
      date: new Date("2026/09/27"),
      description: "Construindo serviços backend do zero"
    },
    {
      image: "./events/event-1.jpg",
      title: "Elas em Dados",
      theme: themes[2].title,
      date: new Date("2026/07/18"),
      description: "Dados, visualização e tomada de decisão"
    },
    {
      image: "./events/event-1.jpg",
      title: "IA na Prática",
      theme: themes[5].title,
      date: new Date("2026/10/22"),
      description: "Aplicações reais de inteligência artificial"
    },
    {
      image: "./events/event-1.jpg",
      title: "Infraestrutura na Nuvem",
      theme: themes[1].title,
      date: new Date("2026/12/02"),
      description: "Deploy, escalabilidade e serviços em cloud"
    },
    {
      image: "./events/event-1.jpg",
      title: "Deploy sem Medo",
      theme: themes[3].title,
      date: new Date("2026/11/28"),
      description: "Automatizando entregas com boas práticas"
    },
    {
      image: "./events/event-1.jpg",
      title: "Acessibilidade no Front",
      theme: themes[4].title,
      date: new Date("2026/06/15"),
      description: "Interfaces inclusivas para todas as pessoas"
    },
    {
      image: "./events/event-1.jpg",
      title: "Segurança para Elas",
      theme: themes[0].title,
      date: new Date("2026/02/25"),
      description: "Princípios básicos de segurança no backend"
    },
    {
      image: "./events/event-1.jpg",
      title: "IA para Educadoras",
      theme: themes[5].title,
      date: new Date("2026/06/14"),
      description: "Inteligência artificial aplicada à educação"
    },
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
        <EventCard event={events[0]}></EventCard>
        </section>
      </main>
    </>
  )
}

export default App
