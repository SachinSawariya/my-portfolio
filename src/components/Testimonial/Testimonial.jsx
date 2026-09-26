import React from 'react'
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// import profile1 from '../../img/profile1.jpg';
import mypic2 from '../../img/mypic2.jpg';
import bropic from '../../img/bropic1.jpeg';
import profile3 from '../../img/profile3.jpg';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

function Testimonial() {
    const clients =[
        {
            img: bropic,
            review: "Working with Sachin Kumar was a fantastic experience. His expertise, dedication, and friendly approach made our collaboration seamless. Sachin's ability to simplify complex tasks and deliver exceptional results is truly impressive.",
            Name: 'Satish Kumar',
            Role: 'Collaborator'
        },
        {
            img: mypic2,
            review: "Sachin delivered a complex feature with incredible speed and precision. His ability to understand requirements and turn them into scalable, production-ready solutions is truly impressive. We’ve seen noticeable improvements in performance.",
            Name: 'Ashutosh Shukla',
            Role: 'Product Manager, Knovator Technology'
        },
        {
            img: profile3,
            review: "Working with Sachin has been a fantastic experience. He's a team player who not only writes clean code but also contributes valuable ideas. His work on the domain configuration and API integrations was a game changer.",
            Name: 'Ankit Rakhadiya',
            Role: 'Senior Developer'
        }
    ];
  return (
    <section className="testimonials-section" id='Testimonial'>
      <div className="testimonials-container">
        
        <div className="testimonials-left">
          <div className="testimonials-heading-wrapper">
            <h2 className="section-title">Client <br/><span className="highlight">Testimonials</span></h2>
          </div>
          <p className="testimonials-desc">
            Clients always get <span className="t-highlight-text">exceptional work</span> from me.
          </p>
          <p className="testimonials-desc">
            Hear what my colleagues and clients have to say about my work. I pride myself on delivering exceptional results, building scalable applications, and ensuring complete client satisfaction on every single project.
          </p>
        </div>

        <div className="testimonials-right">
          <Swiper
              modules = {[Pagination, Navigation]}
              slidesPerView={1}
              pagination = {{clickable: true, dynamicBullets: true}}
              navigation={true}
              className='testimonials-slider'
              grabCursor={true}
          >
              {clients.map((client, index) =>{
                  return(
                      <SwiperSlide key={index}>
                          <div className="testimonial-card">
                              <div className="quote-icon">“</div>
                              <img src={client.img} alt={`Client testimonial by ${client.Name}`}/>
                              <span className="t-review">{client.review}</span>
                              <div className="t-client-info">
                                  <p className="t-name">{client.Name}</p>
                                  <p className="t-role">{client.Role}</p>
                              </div>
                          </div>
                      </SwiperSlide>
                  )
              })}
          </Swiper>
        </div>
      </div>
      <div className='blur1 s-blur2' style={{background: "var(--purple)"}}></div>
    </section>
  )
}

export default Testimonial