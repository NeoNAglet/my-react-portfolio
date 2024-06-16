import React, { useRef, useState } from 'react'
import './form.scss';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Form = () => {

  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const formRef = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {

    emailjs
      .sendForm('service_7ky8cqg', 'template_v0x9s4j', formRef.current, {
        publicKey: 'U_5ovryzLrWEW8LjL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      emailjs
      .sendForm('service_7ky8cqg', 'template_92oftri', formRef.current, {
        publicKey: 'U_5ovryzLrWEW8LjL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
  };

  function onSubmit(data){
    sendEmail();
    setFormSubmitted(true);
    form.reset();
    console.log('Form Submitted', data)
  }

  function resetForm(){
    setFormSubmitted(false);
  }
  return (
    <>
      {
        formSubmitted ?
        <div className="thank-you">
          <h2>Thank you for your submission</h2>
          <p>I will be in contact soon. In the meantime you can check out my socials linked below.</p>
          <button className='btn' onClick={()=> resetForm()}>Send another message</button>
        </div> :
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" {...register("name", {
            required: {
              value: true,
              message: 'Name is required'
            }})} placeholder='Your name...' />
            <p>{errors.name?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" {...register("email",{
            required: {
              value: true,
              message: 'Email is required'
            }}, {
            pattern:{
              value: /^[a-zA-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Please enter a valid email'
            }
          })} placeholder='Your email...' />
            <p>{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea rows={5} {...register("message",{required: 'Message is required'})} placeholder='Your message...' />
          <p>{errors.message?.message}</p>
        </div>

        <div className="submit-btn">
          <Button text={"Let's chat"} type={'submit'} />
        </div>
      </form>
      }
    </>
  )
}

export default Form