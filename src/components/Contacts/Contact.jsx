import React, { useState } from 'react'
import './Contact.css';
import contact from '../../img/contact.jpeg'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';


function Contact() {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sfxs64t', 'template_upagjat', form.current, 'xSI5OxInQQliLbpOr')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          toast.success('Email sent successfully!');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="contact-form" id='Contacts'>
        <div className="c-left">
            <p>Contact Me.</p>
            <img src={contact} alt=''/>

        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='username' className='user' placeholder='Enter your Name'/>
                <input type='email' name='email' className='user' placeholder='Enter Email-id'/>
                <input type='number' name='mobile' className='user' placeholder='Enter Mobile No.'/>
                <textarea name="message" id="" cols="30" rows="5"className='user' placeholder='Write Message here..'></textarea>

                <button type='submit'className='button'>Submit</button>
                <span>{done && "Thanks for Contact me." }</span>

            </form>
        </div>
    </div>
  )
}

export default Contact