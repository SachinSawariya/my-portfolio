import React, { useState, useRef } from 'react'
import './Contact.css';
import contact from '../../img/contact.jpeg'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function Contact() {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const username = form.current.username.value.trim();
    const email = form.current.email.value.trim();
    const mobile = form.current.mobile.value.trim();
    const message = form.current.message.value.trim();

    if (!username || !email || !mobile || !message) {
      toast.error("Please fill all the fields before submitting.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      process.env.REACT_APP_EMAIL_JS_TEMPLATE,
      form.current,
      process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        setDone(true);
        toast.success('Email sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send email. Please try again.');
      });
  };

  return (
    <div className="contact-form" id='Contacts'>
      <div className="c-left">
        <p>Contact Me.</p>
        <img src={contact} alt='' />
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='username' className='user' placeholder='Enter your Name' />
          <input type='email' name='email' className='user' placeholder='Enter Email-id' />
          <input type='number' name='mobile' className='user' placeholder='Enter Mobile No.' />
          <textarea name="message" cols="30" rows="5" className='user' placeholder='Write Message here..'></textarea>

          <button type='submit' className='button'>Submit</button>
          <span>{done && "Thanks for Contacting me."}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact;