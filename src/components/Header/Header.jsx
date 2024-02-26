import React, { Component } from 'react';
import './header.scss';
import headerImage from '../../assets/images/Neo - Header Image.png';
import Button from '../Button/Button.jsx';

export default class Header extends Component {
  render() {
    return (
      <div id='header' className='container'>
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
