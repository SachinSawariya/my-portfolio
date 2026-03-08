import React from 'react'
import './Home.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
// import thumbup from '../../img/thumbup.png';
import glassesimoji from '../../img/glassesimoji.png';
import Crown from '../../img/crown.png';
import mypic from '../../img/myPicture.png';

import FloatingDiv from './FloatingDiv';

function Home() {

  const instagramURL = 'https://www.instagram.com/sachin_.sawariya/';
  const githubURL = 'https://github.com/SachinSawariya';
  const linkedinURL = 'https://www.linkedin.com/in/sachin-kumar-a91a62223/';

  return (
    <section className="intro" aria-label="Hero Section">
      <header className="i-left">
        <div className="i-name">
          <p className='header'>Jr. SDE - Full Stack Developer</p>
          <h1>Hii, I'm <span>Sachin Kumar </span><br />From Mithilanchal.</h1>
          <p>Showcase the ability to collaborate effectively, implement secure coding practices, and continuously adapt and learn in order to deliver high-quality full stack solutions.</p>
        </div>
        <button className="button i-btn">Hire me</button>
        <nav className="i-icon" aria-label="Social Media Links">
          <a href={githubURL} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <img src={Github} alt='GitHub Profile' />
          </a>
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <img src={LinkedIn} alt='LinkedIn Profile' />
          </a>
          <a href={instagramURL} target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
            <img src={Instagram} alt='Instagram Profile' />
          </a>
        </nav>
      </header>

      <div className="i-right">
        <img src={vector1} alt='Decorative vector element 1' />
        <img src={vector2} alt='Decorative vector element 2' />
        <img src={mypic} alt="Sachin Kumar - Full Stack Developer" />
        <img src={glassesimoji} alt='Decorative glasses emoji' />

        <div style={{ top: '78%', left: '25%' }}>
          <FloatingDiv image={Crown} txt1="Full Stack" txt2="Developer" />
        </div>
        <div style={{ top: '6rem', left: '25%' }}>
          <FloatingDiv image={Crown} txt1="Programmer" />
        </div>
      </div>
    </section>
  )
}

export default Home