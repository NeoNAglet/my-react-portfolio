import React from 'react';
import './navbar.scss';

const Navbar = () => {    
    return (
      <div id='navbar'>
        <div>
          <div className="logo-container">
            <a href="/#header">
              <strong>N.</strong>
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
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Navbar

