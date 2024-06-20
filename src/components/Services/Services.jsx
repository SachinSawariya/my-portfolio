import React from 'react'
import './services.css'
import Glasses from '../../img/glasses.png'
import Card from './Card';
import Resume from './Sachin_resume.pdf';

function Services() {
  return (
    <div className="services" id='Services'>
      <div className="s-left">
        <span> My Services </span>
        <p>Hii , I am Full Stack Web Developer.  </p>
        <p> I am able to Design style, create webpages </p> 
          <p>and websites and maintain the backend server. </p>
        <a href={Resume} download>
        <button className="button s-btn">Download CV</button>
        </a>
      </div>

      {/* //right side */}
      <div className="cards">
        <div style={{ left: '2rem' ,top:'-5rem' }}>
          <Card
            emoji={Glasses}
            heading={'Design'}
            detail={"figma, Adobe Photoshop"}
          />
        </div>

        {/* Second cards */}
        <div style={{ left: '2rem', top: '12rem' }}>
          <Card 
            emoji={Glasses}
            heading={"Front-End Technologies"}
            detail={"Html, CSS, JavaScript, Bootstrap, React"}
          />
        </div>
        

        {/* third card */}
        <div style={{ left: '26rem', top: '12rem' }}>
          <Card 
            emoji={Glasses}
            heading={"Back-End Technologies"}
            detail={"Node JS, Express"}
          />
        </div>
        {/* fourth card */}
        <div style={{ left: '26rem', top: '-5rem' }}>
          <Card 
            emoji={Glasses}
            heading={"Programming Language"}
            detail={"C, C++, Python"}
          />
        </div>

        {/* fifth card */}
        <div style={{ left: '14rem', top: '3.5rem' }}>
          <Card 
            emoji={Glasses}
            heading={"Database Management"}
            detail={"MySQL, MongoDB"}
          />
        </div>
        <div className='blur s-blur' style={{background: "var(--purple"}}></div>


      </div>



    </div>
  )
}

export default Services