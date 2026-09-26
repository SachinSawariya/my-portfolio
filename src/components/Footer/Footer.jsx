import React from 'react'
import './Footer.css';
import { UilInstagram, UilFacebook, UilGithub, UilLinkedin, UilGlobe } from '@iconscout/react-unicons'

function Footer() {

    const instagramURL = 'https://www.instagram.com/sachin_.sawariya/';
    const facebookURL = 'https://www.facebook.com/sachinkumar.kumar.378537';
    const githubURL = 'https://github.com/SachinSawariya';
    const linkedinURL = 'https://www.linkedin.com/in/sachin-kumar-a91a62223/';
    const websiteURL = 'https://gyanvora.vercel.app/'; // Gyanvora website link

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="footer-logo">Sachin <span>Kumar.</span></h2>
                        <p className="footer-tagline">
                            Full Stack MERN Developer crafting premium, scalable, and beautifully designed web experiences.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3 className="footer-title">Connect with me</h3>
                        <div className="footer-social-icons">
                            <a href={instagramURL} target="_blank" rel="noopener noreferrer" className="f-icon" aria-label="Instagram">
                                <UilInstagram size="22" />
                            </a>
                            <a href={facebookURL} target="_blank" rel="noopener noreferrer" className="f-icon" aria-label="Facebook">
                                <UilFacebook size="22" />
                            </a>
                            <a href={githubURL} target="_blank" rel="noopener noreferrer" className="f-icon" aria-label="GitHub">
                                <UilGithub size="22" />
                            </a>
                            <a href={linkedinURL} target="_blank" rel="noopener noreferrer" className="f-icon" aria-label="LinkedIn">
                                <UilLinkedin size="22" />
                            </a>
                            <a href={websiteURL} target="_blank" rel="noopener noreferrer" className="f-icon website-icon" aria-label="Website">
                                <UilGlobe size="22" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} <strong>Sachin Kumar</strong>. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer