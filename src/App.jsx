import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Experience from './sections/Experience'

import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Journey from './sections/Journey'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Journey />
      <Contact />
      <Footer/>
    </>
  )
}

export default App