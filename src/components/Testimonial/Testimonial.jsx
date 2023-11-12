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
            img: mypic2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta autem, libero ipsam quidem sint a consequatur hic dignissimos commodi reiciendis ratione iure illum officiis harum id explicabo! Sapiente, deleniti ad."
        },
        {
            img: bropic,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus esse quo rem, placeat et cumque id nihil consectetur repudiandae doloribus natus, at officiis quam. Officiis quia excepturi deleniti eius ea!"
        },
        {
            img: profile3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, labore sapiente consequuntur nemo, dolores dolor magnam blanditiis magni nostrum at quasi! Maiores, quas repellat quae unde magnam ex voluptates sed."
        }
    ];
  return (
    <div className="t-wrapper" id='Testimonial'>
        <div className="t-heading">
            <p>Client always <span> get Exceptional work </span> from me.</p>
        </div>

        {/* slider  */}

        <Swiper
            modules = {[Pagination]}
            slidesPerView={1}
            pagination = {{clickable: true}}
        >
            {clients.map((client, index) =>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt=''/>
                            <span>{client.review}</span>
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