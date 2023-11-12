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
            <img src={wave} alt='' style={{ width: '100%', height: '20rem' }} />
            <div className="f-content">
                <div className='f-contact'>
                    <h1> Contact us</h1>
                    <span> 8434275032</span>
                    <span> Sachin.developer32@gmail.com</span>
                    <span> Add - Madhubani, Bihar</span>
                </div>
                <div className='c-icon'>
                    <h2> Follow us.</h2>
                    <div className="f-icon">
                        <a href={instagramURL} target="_blank" rel="noopener noreferrer">
                            <Insta color='white' size='3rem' />
                        </a>
                        <a href={facebookURL} target="_blank" rel="noopener noreferrer">
                            <Facebook color='white' size='3rem' />
                        </a>
                        <a href={githubURL} target="_blank" rel="noopener noreferrer">
                            <Github color='white' size='3rem' />
                        </a>
                        <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                            <Linkedin color='white' size='3rem' />
                        </a>
                    </div>
                </div>
                <div className="copyright">
                    &copy; {new Date().getFullYear()} Sachin Kumar 
                    <span>All Rights Reserved.</span>
                    {/* <span>Privacy Policy</span>
                    <span>Term & Conditions</span> */}
                </div>
            </div>
        </div >
    )
}

export default Footer