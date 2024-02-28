import React, { Component } from 'react';
import './header.scss';
import headerImage from '../../assets/images/Neo - Header Image.png';
import pythonLogo from '../../assets/images/Python Logo.png';
import reactLogo from '../../assets/images/React Logo.png';
import angularLogo from '../../assets/images/Angular Logo.png';
import htmlLogo from '../../assets/images/HTML Logo.png';
import cssLogo from '../../assets/images/CSS Logo.png';
import wordpressLogo from '../../assets/images/wordpress Logo.png';
import nextLogo from '../../assets/images/Next Logo.png';
import sassLogo from '../../assets/images/Sass Logo.png';
import Button from '../Button/Button.jsx';

export default class Header extends Component {
  render() {
    return (
      <div id='header' className='container'>
        <img src={pythonLogo} className='logo-image i1' alt="Python Logo" />
        <img src={reactLogo} className='logo-image i2' alt="React Logo" />
        <img src={angularLogo} className='logo-image i3' alt="Angular Logo" />
        <img src={htmlLogo} className='logo-image i4' alt="HTML Logo" />
        <img src={cssLogo} className='logo-image i5' alt="CSS Logo" />
        <img src={nextLogo} className='logo-image i6' alt="Next Logo" />
        <img src={wordpressLogo} className='logo-image i7' alt="Wordpress Logo" />
        <img src={sassLogo} className='logo-image i8' alt="Sass Logo" />
        <div className="image-container">
          <img src={headerImage} alt="Header Image of Neo" />
        </div>
        <div className="header-title">
          <h1>Welcome to my portfolio</h1>
        </div>
        <div className="btn-container">
          <Button text={'Download CV'} link={'#'}/>
          <Button text={'Contact me'} link={'#'}/>
        </div>
      </div>
    )
  }
}
