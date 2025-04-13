import React from 'react'
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// import profile1 from '../../img/profile1.jpg';
import mypic2 from '../../img/mypic2.jpg';
import bropic from '../../img/bropic1.jpeg';
import profile3 from '../../img/profile3.jpg';
import {Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

function Testimonial() {
    const clients =[
        {
            img: bropic,
            review: "Working with Sachin Kumar was a fantastic experience. His expertise, dedication, and friendly approach made our collaboration seamless. Sachin's ability to simplify complex tasks and deliver exceptional results is truly impressive. I highly recommend Sachin for his professionalism and talent.",
            Name: 'Satish Kumar',
        },
        {
            img: mypic2,
            review: "Sachin delivered a complex feature with incredible speed and precision. His ability to understand requirements and turn them into scalable, production-ready solutions is truly impressive. We’ve seen noticeable improvements in performance since his contributions.",
            Name: ' Ashutosh Shukla, Product Manager, Knovator Technology'
        },
        {
            img: profile3,
            review: "Working with Sachin has been a fantastic experience. He's a team player who not only writes clean code but also contributes valuable ideas during discussions. His work on the domain configuration and API integrations was a game changer for our platform.",
            Name:'Ankit Rakhadiys, Senior Developer'
        }
    ];
  return (
    <div className="t-wrapper" id='Testimonial'>
      <h1 className='testmonials-heading'>My Testimonials </h1>
      <div className="t-heading">
            <p>Client always <span> get Exceptional work </span> from me.</p>
        </div>


        <Swiper
            modules = {[Pagination]}
            slidesPerView={1}
            pagination = {{clickable: true}}
            className='swiper'
        >
            {clients.map((client, index) =>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt=''/>
                            <span>{client.review}</span>
                            <p>{client.Name}</p>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
        <div className='blur1 s-blur2' style={{background: "var(--purple"}}></div>

    </div>
  )
}

export default Testimonial