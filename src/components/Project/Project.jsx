import React, { useState } from 'react';
import './project.scss';
import Popup from '../Popup/Popup';

export default function Project ({title, link, description, languages, problem, img}) {
  const [showPopup, setShowPopup] = useState(false);

  function handlePopup(){
    setShowPopup(!showPopup);
    console.log(showPopup)
  }
  return (
    <>
      <div className='project' onClick={()=>handlePopup()}>
        <div className="top">
          <img src={img} alt={title} className="background-img" />
          <div className="title-container">
            <div className="tags">
              {
                languages.map((language, index)=>{
                  return <span className="tag" key={index}>{language}</span>
                })
              }
            </div>
            <h3>{title}</h3>
          </div>
        </div>
        <div className="bottom">
          <div className="tags">
            {
              languages.map((language, index)=>{
                return <span className="tag" key={index}>{language}</span>
              })
            }
          </div>
          <h3>{title}</h3>
          <p>Click card for more information...</p>
        </div>
      </div>
      <Popup showPopup={showPopup} handlePopup={handlePopup}>
        <div className="tags">
            {
              languages.map((language, index)=>{
                return <span className="tag" key={index}>{language}</span>
              })
            }
          </div>
        <p><strong>Project:</strong> {title}</p>
        <img src={img} alt={`${title}`} />
        {link && <p><strong>Site link:</strong> <a href={link} target='_blank' rel="noreferrer" className='link_underline'>Visit site</a></p>}
        {problem && <p><strong>Problem:</strong> {problem}</p>}
        <p><strong>Solution:</strong> {description}</p>
      </Popup>
  </>
  )
}
