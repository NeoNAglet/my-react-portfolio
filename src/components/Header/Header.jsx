import React from 'react';
import './header.css';
import img from '../../assets/img/me.jpg';
import cv from '../../assets/pdf/FrontEnd.pdf'

export default function Header() {
  return (
      <header id='header' className="container fcc">
        <div className="frc social-links">
          <a href="#home" target='_blank'><i class='bx bxl-linkedin-square'></i></a>
          <a href="#home" target='_blank'><i class='bx bxl-github'></i></a>
        </div>

        <div className="about-me">
          <h2>Hi, I am Neo Ngwenya, a</h2>
          <h1>FullStack Developer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quo optio neque illum aspernatur nesciunt.</p>
          <a href={cv} className="btn" download="Neo_resume">Resume</a>
        </div>

        <div className="img">
          <img src={img} alt="Me" />
        </div>
      </header>
  )
}
