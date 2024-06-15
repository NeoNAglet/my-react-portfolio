import React, { Component } from 'react';
import './project.scss';

export default function Project ({title, link, description, languages}) {
  return (
    <div className='project'>
      <div className="top">
        <div className="tags">
          {
            languages.map((language, index)=>{
              return <span className="tag">{language}</span>
            })
          }
        </div>
        <h3>{title}</h3>
      </div>
      <div className="bottom">
        <div className="tags">
          {
            languages.map((language, index)=>{
              return <span className="tag">{language}</span>
            })
          }
        </div>
        <h3>{title}</h3>
        <p>{description.length <= 100 ? description : `${description.substr(0,100)}...`}</p>
        {link && <a href={link} target='_blank' className='link_underline'>Visit Site</a>}
      </div>
    </div>
  )
}
