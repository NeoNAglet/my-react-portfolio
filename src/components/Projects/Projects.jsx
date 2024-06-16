import React from 'react';
import './projects.scss'
import Project from '../Project/Project';

export default function Projects () {

  const projects = [
    {
      title: 'Service Landing Page',
      languages: ['HTML', 'CSS', 'Javascript'],
      link: 'https://service-lp.netlify.app/',
      excerpt: 'This is a generic, simple landing page example. It is also responsive on all devices.'
    },
    {
      title: 'Kitten Calculator',
      languages: ['HTML', 'CSS', 'Javascript'],
      link: 'https://kitten-calculator.netlify.app/',
      excerpt: 'This was more so a javascript challenge than a webpage one. This basic calculator is completely functional. It displays everything you type/click and you can also delete a number or clear the whole screen. The roaming cat was made using CSS. A keyboard can be used too.'
    },
    {
      title: 'Random Colour Generator',
      languages: ['HTML', 'CSS', 'Javascript'],
      link: 'https://colour-panda.netlify.app/',
      excerpt: "This web app generates a random colour onto the panda's body. By clicking the button, the panda changes colour and also the (hex) colour of the pand is also shown in the nav-bar. The panda was made using css."
    },
    {
      title: 'Random Recipe Generator',
      languages: ['HTML', 'CSS', 'Javascript'],
      link: 'https://random-rg.netlify.app/',
      excerpt: "This website generates a random recipe from a javascript object, everytime one clicks the button. Also the recipes under the 'Breakfast', 'Lunch', 'Dinner' and 'Dessert' section, were all loaded onto from Javascript. there is no hard coded html text or images in the html. This is also a responsive page - so it can be viewed on any device and at any screen width"
    }
  ]

  return (
    <div id='projects' className='container'>
      <h2>Projects</h2>
      <div className="projects-container">
        {
          projects.map((project, index)=>{
            return(
              <Project key={index} title={project.title} link={project.link ? project.link : ''} description={project.excerpt} languages={project.languages} />
            )
          })
        }
      </div>
    </div>
  )
}
