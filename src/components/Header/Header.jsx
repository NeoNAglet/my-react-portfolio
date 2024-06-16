import React, { Component } from 'react';
import './header.scss';
import Button from '../Button/Button.jsx';
import cv from '../../assets/pdf/Professional CV Resume.pdf';
import { RiArrowDownFill } from '@remixicon/react';

export default class Header extends Component {
  render() {
    return (
      <div id='header' className='container'>
        <div className="header-title">
          <p><span>Welcome!</span> I'm Neo Ngwenya, a front-end <span>web developer</span> dedicated to bringing your digital dreams to life. Explore my portfolio to see my work in <span>action!</span></p>
        </div>
        <div className="btn-container">
          <Button text={'View CV'} target={'_blank'} link={cv}/>
          <Button text={'Contact me'} link={'#contact'}/>
        </div>
        <div className="scroll-down">
          <Button icon={<RiArrowDownFill/>} link={'#projects'} />
        </div>
      </div>
    )
  }
}
