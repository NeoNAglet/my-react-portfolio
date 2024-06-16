import React from 'react';
import './contact.scss';
import Form from '../Form/Form';
import Button from '../Button/Button';
import { RiLinkedinFill, RiWhatsappFill, RiGithubFill } from '@remixicon/react';

const Contact = () => {
  return (
    <div id='contact' className='container'>
        <div className="title-container">
          <h2>Let's chat</h2>
          <p>I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me via my socials linked below or by filling out this form:
          </p>
        </div>
        <div className="socials">
            <Button link={'https://www.linkedin.com/in/neo-ngwenya'} icon={<RiLinkedinFill />} target={'_blank'} />
            <Button link={'https://wa.me/+27696120281'} icon={<RiWhatsappFill />} target={'_blank'} />
            <Button link={'https://github.com/Neno-N'} icon={<RiGithubFill />} target={'_blank'} />
        </div>
        <Form />
    </div>
  )
}

export default Contact