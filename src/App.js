import React from 'react';
import './settings.scss';
import { Contact, Experience, Footer, Header, Navbar, Projects } from './components';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
