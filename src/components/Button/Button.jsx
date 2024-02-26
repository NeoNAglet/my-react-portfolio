import React from 'react';
import './button.scss';

const Button = ({text, link}) => {
  return (
    <div className="btn">
      <a href={link}>
        {text}
      </a>
    </div>
  )
}

export default Button