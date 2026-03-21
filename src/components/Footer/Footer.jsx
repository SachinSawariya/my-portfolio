import React from 'react'
import './Footer.css';
// import { Link } from 'react-router-dom';
import wave from '../../img/wave.png';

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

function Footer() {

    const instagramURL = 'https://www.instagram.com/sachin_.sawariya/';
    const facebookURL = 'https://www.facebook.com/sachinkumar.kumar.378537';
    const githubURL = 'https://github.com/SachinSawariya';
    const linkedinURL = 'https://www.linkedin.com/in/sachin-kumar-a91a62223/';
    return (
        <div className="footer">
            <img src={wave} alt='Decorative wave' className="f-wave" />
            <div className="f-content">
                <div className="f-main">
                    <div className='f-col f-contact'>
                        <h1>Contact <span>Us</span></h1>
                        <div className="f-contact-details">
                            <span><strong>Email:</strong> Sachinsawariya12@gmail.com</span>
                            <span><strong>Phone:</strong> +91 8434275032</span>
                        </div>
                    </div>

                    <div className='f-col f-socials'>
                        <h2>Follow <span>Us</span></h2>
                        <div className="f-icons">
                            <a href={instagramURL} target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                                <Insta size='2rem' />
                            </a>
                            <a href={facebookURL} target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                                <Facebook size='2rem' />
                            </a>
                            <a href={githubURL} target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                                <Github size='2rem' />
                            </a>
                            <a href={linkedinURL} target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                                <Linkedin size='2rem' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="f-bottom-bar">
                    <div className="f-copy">
                        <span>&copy; {new Date().getFullYear()} <strong>Sachin Kumar</strong>. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer