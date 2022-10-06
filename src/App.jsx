import React from 'react';
import './App.css';
import { Navbar, Header, Projects, Skills, Contact, Footer} from './components'

const App = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default App
