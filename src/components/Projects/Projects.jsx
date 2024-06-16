import React from 'react';
import './projects.scss'
import Project from '../Project/Project';
import kittenCalculator from '../../assets/images/Kitten Calculator.png';
import randomColourGenerator from '../../assets/images/Random Colour Generator.png';
import randomRecipeGenerator from '../../assets/images/Random Recipe Generator.png';
import serviceLandingPage from '../../assets/images/Service Landing Page.png';
import pomodoroTimer from '../../assets/images/Pomodoro Timer.png';
import drumMachine from '../../assets/images/Drum Machine.png';
import markdownPrimer from '../../assets/images/Markdown Primer.png';

export default function Projects () {

  const projects = [
    {
      title: 'Pomodoro 25 + 5 Timer',
      languages: ['HTML', 'CSS', 'Javascript'],
      link: 'https://codepen.io/neno-n/full/VwyPaBZ',
      solution: 'To address this issue, I developed a Pomodoro Timer using JavaScript, HTML, and CSS. This timer adheres to the Pomodoro Technique, offering 25-minute focused work sessions followed by 5-minute breaks. By providing a structured approach to time management, this tool helps users enhance their productivity and maintain better concentration. The timer automatically switches between work and break intervals, ensuring users stay on track without needing to manually reset the timer. This project showcases my skills in JavaScript for handling the timer logic, as well as HTML and CSS for creating a user-friendly interface.',
      img: pomodoroTimer,
      problem: 'Staying focused and productive can be challenging, especially with constant distractions and the tendency to procrastinate. Many people struggle to maintain their concentration and efficiently manage their time during work or study sessions.'
    },
    {
      title: 'Drum and Piano Machine',
      languages: ['HTML', 'CSS', 'Javascript', 'React'],
      link: 'https://codepen.io/neno-n/full/JjMKaLw',
      solution: 'To make music practice more accessible and engaging, I created a Drum and Piano Machine using React, JavaScript, HTML, and CSS. This web application allows users to click on specific buttons to play corresponding drum and piano sounds. Each button press not only produces a sound but also displays the musical note, helping users to learn and recognize different notes and sounds. This project demonstrates my proficiency in React for building interactive user interfaces, JavaScript for handling sound playback and event handling, and HTML and CSS for designing an engaging and visually appealing interface.',
      img: drumMachine,
      problem: 'Finding engaging ways to practice and experiment with music can be a challenge, especially for beginners who want to explore different sounds and notes.'
    },
    {
      title: 'Markdown Primer',
      languages: ['HTML', 'CSS', 'Javascript'],
      link: 'https://codepen.io/neno-n/full/eYyNyeO',
      solution: 'To simplify the process of writing and previewing Markdown, I developed a Markdown Primer using JavaScript, React, and CSS. This application allows users to input Markdown text and instantly see the formatted output as readable text. By providing real-time conversion, the Markdown Primer helps users better understand and utilize Markdown syntax, making it easier to create well-formatted documents. This project highlights my skills in JavaScript and React for managing the real-time conversion and dynamic rendering, as well as CSS for ensuring a clean and responsive user interface.',
      img: markdownPrimer,
      problem: 'Markdown is a popular markup language used for formatting text in a simple and readable way. However, many users, especially those new to Markdown, find it challenging to visualize how their formatted text will appear once rendered, leading to confusion and errors.'
    },
    {
      title: 'Random Recipe Generator',
      languages: ['HTML', 'CSS', 'Javascript'],
      link: 'https://random-rg.netlify.app/',
      excerpt: "Create a random recipe generator that provides users with a new and exciting recipe at the click of a button. This application will pull from a database of recipes, offering variety and inspiration for home cooks looking for new meal ideas. The project will involve HTML for the structure, CSS for styling the application, JavaScript for handling the logic of randomly selecting and displaying recipes, and potentially APIs if using an external recipe database. Responsive design skills will ensure the application works well on different devices.",
      img: randomRecipeGenerator,
      problem: 'Home cooks often struggle to decide what to cook, especially when they want to try new recipes. Sifting through cookbooks or online recipes can be time-consuming and overwhelming.'
    },
    {
      title: 'Service Landing Page',
      languages: ['HTML', 'CSS', 'Javascript'],
      link: 'https://service-lp.netlify.app/',
      solution: 'Develop a professional service landing page that clearly outlines the services offered, highlights key benefits, and includes strong calls to action. The landing page will be designed to convert visitors into clients by providing essential information in an engaging and persuasive manner. The project will use HTML for structure, CSS for styling and alignment with the brand, and JavaScript for adding interactivity such as form validation and dynamic content. Copywriting skills are needed to create compelling text, SEO to optimize the page for search engines, and responsive design to ensure accessibility on all devices.',
      img: serviceLandingPage,
      problem: 'Many businesses struggle to effectively communicate their services to potential clients through their websites. An ineffective landing page can result in lost opportunities and poor client engagement.'
    },
    {
      title: 'Random Colour Generator',
      languages: ['HTML', 'CSS', 'Javascript'],
      link: 'https://kitten-calculator.netlify.app/',
      solution: 'Create a random color generator that instantly provides users with random colors and their corresponding hexadecimal codes. This tool will be useful for designers looking for color inspiration and developers needing test colors. The project will utilize HTML for building the structure, CSS for styling and making the tool visually appealing, and JavaScript for handling the logic of generating and displaying random colors and their hex codes. A basic understanding of color theory can enhance the tool with complementary or analogous color options, and UI/UX design skills will ensure the tool is easy to use and visually appealing.',
      img: randomColourGenerator,
      problem: 'Designers and developers often need a quick and easy way to generate random colors along with their corresponding hexadecimal codes for their projects. Manually selecting colors and finding their hex codes can be time-consuming and may not produce the desired variety or randomness.'
    },
    {
      title: 'Kitten Calculator',
      languages: ['HTML', 'CSS', 'Javascript'],
      link: 'https://colour-panda.netlify.app/',
      solution: "Develop a web-based JavaScript calculator that provides a clean, intuitive interface for performing basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator will be responsive, ensuring it works seamlessly across different devices, including desktops, tablets, and smartphones. This project will utilize HTML to structure the interface, CSS to style the calculator and ensure responsiveness, and JavaScript to implement the calculator's functionality and handle user interactions. UI/UX design skills are also essential to create a user-friendly interface.",
      img: kittenCalculator,
      problem: 'Many users need a simple, accessible, and reliable tool for performing basic arithmetic operations without the need to install complex software or use a physical calculator. Traditional calculators can be inconvenient, and existing online calculators might not offer a user-friendly interface.'
    }
  ]

  return (
    <div id='projects' className='container'>
      <h2>Projects</h2>
      <div className="projects-container">
        {
          projects.map((project, index)=>{
            return(
              <Project key={index} img={project.img} problem={project.problem} title={project.title} link={project.link ? project.link : ''} description={project.solution} languages={project.languages} />
            )
          })
        }
      </div>
    </div>
  )
}
