import React from 'react';
import './contact.scss';
import Form from '../Form/Form';
import Button from '../Button/Button';
import { RiLinkedinFill, RiWhatsappFill, RiGithubFill } from '@remixicon/react';

const Contact = () => {
  return (
    <div id='contact' className='container'>
        <h2>Conatct Me!</h2>
        <Form />
        <div className="socials">
            <Button link={'https://www.linkedin.com/in/neo-ngwenya'} icon={<RiLinkedinFill />} target={'_blank'} />
            <Button link={'https://wa.me/+27696120281'} icon={<RiWhatsappFill />} target={'_blank'} />
            <Button link={'https://github.com/Neno-N'} icon={<RiGithubFill />} target={'_blank'} />
        </div>
    </div>
  )
}

export default Contact