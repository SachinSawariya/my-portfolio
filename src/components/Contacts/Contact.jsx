import React, { useState, useRef } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { UilEnvelope, UilPhone, UilMapMarker } from '@iconscout/react-unicons'

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const username = form.current.username.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!username || !email || !message) {
      toast.error("Please fill all required fields before submitting.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      process.env.REACT_APP_EMAIL_JS_TEMPLATE,
      form.current,
      process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
    )
      .then((result) => {
        setDone(true);
        setLoading(false);
        toast.success('Email sent successfully!');
        form.current.reset();
        setTimeout(() => setDone(false), 5000);
      }, (error) => {
        setLoading(false);
        toast.error('Failed to send email. Please try again.');
      });
  };

  return (
    <section className="contact-section" id='Contacts'>
      <div className="contact-container">
        
        <div className="contact-left">
          <div className="contact-heading-wrapper">
            <h2 className="section-title">Get in <br/><span className="highlight">Touch</span></h2>
          </div>
          <p className="contact-desc">
            I'm currently open to new opportunities, freelance projects, and collaborations. Let's build something amazing together!
          </p>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon"><UilEnvelope size="24" color="#ff004f"/></div>
              <span>sachinsawariya@gmail.com</span>
            </div>
            <div className="info-item">
              <div className="info-icon"><UilPhone size="24" color="#ff004f"/></div>
              <span>+91 8434275032</span>
            </div>
            <div className="info-item">
              <div className="info-icon"><UilMapMarker size="24" color="#ff004f"/></div>
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-form-card">
            <h3 className="form-title">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="c-form">
              <div className="form-group">
                <input type='text' name='username' className='user-input' placeholder='Your Name *' required />
              </div>
              <div className="form-group">
                <input type='email' name='email' className='user-input' placeholder='Your Email *' required />
              </div>
              <div className="form-group">
                <input type='number' name='mobile' className='user-input' placeholder='Your Mobile No. (Optional)' />
              </div>
              <div className="form-group">
                <textarea name="message" cols="30" rows="5" className='user-input textarea' placeholder='Your Message *' required></textarea>
              </div>

              <button type='submit' className='submit-btn' disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {done && <span className="success-msg">Thanks for reaching out! I'll reply soon.</span>}
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact;