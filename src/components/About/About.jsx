import React from 'react'
import './About.css';
import my_pic from './About_pic.jpeg';

function About() {
  return (
    <div className="about" id='About'>
        <div className="a-left">
            <div className="a-image">
                <img src={my_pic} style={{width:'21rem', height:'28rem' }} />
            </div>
        </div>

        <div className="a-right">
        <h1 class="sub-title"> About Me.</h1>
          <p>Greetings! Welcome to my portfolio. I am delighted to present to you a comprehensive overview of my
            professional journey, accomplishments, and aspirations. My name is <span>Sachin Kumar </span>, and I am a
            highly motivated and passionate individual dedicated to Computer Science. Throughout my career, I have honed
            my skills, gained invaluable experiences, and consistently pursued excellence in all endeavors. This
            portfolio aims to provide you with insights into my capabilities, achievements, and the value I bring to any
            project or organization. </p>

          <div class="tab-titles">
            <h1>Education</h1>
          </div>
          <div class="tab-content">
            <ul>
              <li><span>Master of Computer Application </span><br/>Chandigarh University Mohali, Punjab <br/> Session:
                2022 -2024 || SGPA : 8.11 </li>
              <li><span>Bachelor of Science in Mathematics </span><br/>Lalit Narayan Mithila University Darbhanga <br/>
                Session: 2017 -2020 || Percentage : 64.6% </li>
              <li><span>Intermediate Science</span><br/> Bihar Board Patna
                <br/> Session: 2015 -2017 || Percentage : 68.4%
              </li>
              <li><span>Matriculation </span><br/> Bihar Board Patna
                <br/> Session: 2014 -2015 || Percentage : 75.6%
              </li>
            </ul>
          </div>
        </div>




    </div>
  )
}

export default About