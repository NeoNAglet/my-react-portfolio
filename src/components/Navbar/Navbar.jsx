import React, { useState } from 'react';
import './navbar.css';
import Media from 'react-media';

export default function Navbar() {

  // Toggle menu
  const [menuBar, setMenuBar] = useState(false);
  const [menuBarClass, setMenuBarClass] = useState('visible hidden');

  const toggleMenu = () => {
    if(!menuBar){
      setMenuBar(true)
      setMenuBarClass('visible animation')
    }
    else{
      setMenuBar(false)
      setMenuBarClass('visible hidden')
    }
  }
  
  return (
    <nav className='frc nav'>
      <div className="logo">Neo N.</div>
      <Media query='(max-width:650px)'>
        {matches => {
          return matches ? 
          <>
            <button className="menu-btn" onClick={()=>toggleMenu()}><i class='bx bx-menu'></i></button>
            <div className={menuBarClass} >
              <div className="fcc links">
                <a href="#header" onClick={()=>toggleMenu()}>Home</a>
                <a href="#skills" onClick={()=>toggleMenu()}>Skills</a>
                <a href="#header" onClick={()=>toggleMenu()}>Projects</a>
                <a href="#contact" onClick={()=>toggleMenu()}>Contact</a>
              </div>
              <button className="close-btn" onClick={()=> toggleMenu()}><i class='bx bx-x'></i></button>
            </div>
          </> :
            <div className='visible' >
              <div className="fcc links">
                <a href="#header">Home</a>
                <a href="#skills">Skills</a>
                <a href="#header">Projects</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
        }}
      </Media>
      {/* <button className="menu-btn" onClick={()=>toggleMenu()}><i class='bx bx-menu'></i></button>
      <div className={menuBarClass} >
        <div className="fcc links">
          <a href="#header" onClick={()=>toggleMenu()}>Home</a>
          <a href="#skills" onClick={()=>toggleMenu()}>Skills</a>
          <a href="#header" onClick={()=>toggleMenu()}>Projects</a>
          <a href="#contact" onClick={()=>toggleMenu()}>Contact</a>
        </div>
        <button className="close-btn" onClick={()=> toggleMenu()}><i class='bx bx-x'></i></button>
      </div> */}
    </nav>
  )
}
