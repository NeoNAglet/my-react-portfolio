import React, { useState, useEffect } from 'react';
import './navbar.scss';

const Navbar = () => {
  const [navColour, setNavColour] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
      if(scrollY >= 50){
        setNavColour(true);
      } else if(scrollY < 50){
        setNavColour(false)
      };
    })
  }, [window.scrollY]);
    
    return (
      <div id='navbar' className={`${navColour && 'scrolled'}`}>
        <div className="logo-container">
          <a href="/#header">
            <h2>N.</h2>
          </a>
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <a href="/#experience">Experience</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#form">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Navbar

