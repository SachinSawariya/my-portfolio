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
import mypic from '../../img/mypic.png';

import FloatingDiv from './FloatingDiv';

function Home() {

  const instagramURL = 'https://www.instagram.com/sachin_.sawariya/';
  const githubURL = 'https://github.com/SachinSawariya';
  const linkedinURL = 'https://www.linkedin.com/in/sachin-kumar-a91a62223/';

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <p className='header'>Full Stack Developer</p>
          <h1>Hii, I'm <span>Sachin Kumar </span><br />From Bihar.</h1>
          <p>Showcase the ability to collaborate effectively, implement secure coding practices, and continuously adapt and learn in order to deliver high-quality full stack solutions.</p>
        </div>
        <button className="button i-btn">Hire me</button>
        <div className="i-icon">
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            <img src={Github} alt='' />
          </a>
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt='' />
          </a>
          <a href={instagramURL} target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt='' />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={vector1} alt='' />
        <img src={vector2} alt='' />
        <img src={mypic} alt="" />
        <img src={glassesimoji} alt='' />

        <div style={{ top: '64%', left: '10%' }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: '6rem', left: '3rem' }}>
          <FloatingDiv image={Crown} txt1="Programmer" />
        </div>
      </div>
    </div>
  )
}

export default Home