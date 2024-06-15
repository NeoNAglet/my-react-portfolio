import React, { Component, useState } from 'react';
import './experience.scss';
import neaReference from '../../assets/images/Neo Ngwenya.png';
import udacityCertificate from '../../assets/pdf/Udacity Certificate.pdf';
import react from '../../assets/images/React Logo.png';
import angular from '../../assets/images/Angular Logo.png';
import css from '../../assets/images/CSS Logo.png';
import html from '../../assets/images/HTML Logo.png';
import next from '../../assets/images/Next Logo.png';
import python from '../../assets/images/Python Logo.png';
import scss from '../../assets/images/Sass Logo.png';
import wordpress from '../../assets/images/wordpress Logo.png';

export default function Experience () {
  const [isExperience, setIsExperience] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  
  function tabClick(experience){
    setIsExperience(experience);
    if(activeIndex != 0){
      setActiveIndex(0);
    }
  }

  function accordionClick(index){
    setActiveIndex(index);
  }

  let images = [react,angular,css,html,next,python,scss,wordpress];
  const experience = [
    {
      title: 'Aglet Inc',
      position: 'Junior Web Developer',
      period: 'January 2023 - current',
      content: 'As a Junior Web Developer at Aglet, I specialize in developing web applications using Next.js, ReactJS, and AngularJS. Additionally, I created custom WordPress builds',
      link: 'https://aglet.co.za/'
    },
    {
      title: 'NEA Global | Kenya',
      position: 'Freelance Frontend Project Manager',
      period: 'September 2022 - November 2022',
      content: 'As a dedicated freelance Frontend Developer and Project Manager, I successfully collaborated with NEA Global to drive digital initiatives and deliver exceptional results.I utilized my technical expertise to create an engaging and responsive website. My strong project management skills enabled me to efficiently plan, execute, and deliver on the project, meeting and the clients expectations.',
      reference: neaReference
    }
  ]

  const education = [
    {
      school: 'IU International University of Applied Sciences',
      qualification: 'Software Development (Bachelors)',
      period: '2022 - 2024',
      progress: 'In progress'
    },
    {
      school: 'Udacity',
      qualification: 'Full-Stack Developer (Nanodegree)',
      period: 'May 2022 - Sept 2022',
      progress: 'Completed',
      certificate: udacityCertificate
    },
    {
      school: 'St. Thomas Aquinas High School',
      qualification: 'IEB Matric',
      period: '2013 - 2017',
      progress: 'Completed'
    }
  ]
  return (
    <>
      <div id='experience' className='container'>
        <div className="tabs">
          <button className={`tab ${isExperience ? 'active' : ''}`} onClick={()=>tabClick(true)}>Experience</button>
          <button className={`tab ${!isExperience ? 'active' : ''}`} onClick={()=>tabClick(false)}>Education</button>
        </div>
        {
          isExperience ?
          <div className={`accordion experience-container ${isExperience ? 'active' : ''}` }>
            {
              experience.map((exp, index)=>{
                return(
                  <div className={`item ${activeIndex == index ? 'active' : ''}`}>
                    <div onClick={()=>accordionClick(index)} className="title">{exp.position}</div>
                    <div className="content">
                      <p><strong>Company:</strong> {exp.link ? <a href={exp.link} rel="noreferrer" target='_blank' className='link_underline'>{exp.title}</a> : exp.title}</p>
                      <p><strong>Period:</strong> {exp.period}</p>
                      {exp.reference && <p><strong>Reference:</strong> <a href={exp.reference} rel="noreferrer" className='link_underline' target='_blank'>A reference from {exp.title}</a></p>}
                      <p><strong>Description:</strong> <p>{exp.content}</p></p>
                    </div>
                  </div>
                )
              })
            }
          </div>:

          <div className={`accordion education-container ${!isExperience ? 'active' : ''}` }>
            {
              education.map((school, index)=>{
                return(
                  <div className={`item ${activeIndex == index ? 'active' : ''}`}>
                    <div onClick={()=>accordionClick(index)} className="title">{school.qualification}</div>
                    <div className="content">
                      <p><strong>School:</strong> {school.school}</p>
                      <p><strong>Period:</strong> {school.period}</p>
                      <p><strong>Progress:</strong> {school.progress}</p>
                      {school.certificate && <p><strong>Certificate:</strong> <a href={school.certificate} rel="noreferrer" target='_blank' className="link_underline">Certificate Received for {school.qualification}</a></p>}
                    </div>
                  </div>
                )
              })
            }
          </div>
        }
      </div>
      <div className="skills-banner">
        <div>
          {
            images.map((skill, index)=>{
              return (
                <img className='skill' src={skill} alt="" />
              )
            })
          }
        </div>
        <div>
          {
            images.map((skill, index)=>{
              return (
                <img className='skill' src={skill} alt="" />
              )
            })
          }
        </div>
      </div>
    </>
  )

}
