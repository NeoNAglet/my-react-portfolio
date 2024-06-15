import React from 'react';
import './button.scss';

const Button = ({text, link, target}) => {
  return (
    link && 
    <a href={link} className="btn" target={target ? target : '_self'}>
      <span >
        {text}
      </span>
    </a>
  )
}

export default Button