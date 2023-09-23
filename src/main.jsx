import React from 'react' // importar la biblioteca React
import ReactDOM from 'react-dom/client' // como es una app web 
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import Exp from './components/experiencia/exp.jsx'
import Sobremi from './components/sobremi/sobremi.jsx'
import Proyectos from './components/proyectos/proyectos'
import Contacto from './components/contacto/contacto'
import Footer from './components/footer/footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Sobremi />
    <Exp />
    <Proyectos />
    <Contacto />
    <Footer />
  </React.StrictMode>
)
