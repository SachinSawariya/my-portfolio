import React from 'react';
import './Home.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import mypic from '../../img/myPicture.png';
import { Link } from 'react-scroll';

function Home() {
  const instagramURL = 'https://www.instagram.com/sachin_.sawariya/';
  const githubURL = 'https://github.com/SachinSawariya';
  const linkedinURL = 'https://www.linkedin.com/in/sachin-kumar-a91a62223/';

  return (
    <section className="intro" aria-label="Hero Section" id="home">
      <div className="hero-left">
        <div className="hero-content">
          <p className="hero-subtitle">Software Engineer | Full Stack Specialist</p>
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="highlight-text">Sachin Kumar</span>
          </h1>
          <p className="hero-description">
            Architecting scalable web applications and high-performance systems. 
            I transform complex problems into elegant, robust MERN stack solutions.
          </p>
          
          <div className="hero-actions">
            <a href="mailto:sachinsawariya12@gmail.com" className="primary-btn">Let's Talk</a>
            <Link to="Experience" smooth={true} duration={500} className="secondary-btn" style={{cursor: 'pointer'}}>View Work</Link>
          </div>

          <div className="social-links" aria-label="Social Media Links">
            <a href={githubURL} target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={Github} alt="GitHub Profile" />
            </a>
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={LinkedIn} alt="LinkedIn Profile" />
            </a>
            <a href={instagramURL} target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={Instagram} alt="Instagram Profile" />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-container">
          <div className="image-backdrop"></div>
          <img src={mypic} alt="Sachin Kumar - Full Stack Developer" className="profile-pic" />
          
          <div className="floating-badge badge-1">
            <div className="badge-dot"></div>
            <span>MERN Stack Expert</span>
          </div>
          <div className="floating-badge badge-2">
            <div className="badge-dot"></div>
            <span>System Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;