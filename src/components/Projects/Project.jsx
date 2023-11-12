import React from 'react'
import './Project.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import portfolio from '../../img/portfolio.png';
import textUtils from '../../img/textUtils.png';
// import {Pagination} from 'swiper/react';
// import 'swiper/css/Pagination'
import 'swiper/css';

function Project() {
  return (
    <div className="portfolio" id='Projects'>

        {/* Heading */}
        <span> Recent Projects </span>

        {/* Slider */}
        <Swiper
        // modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'


        >
            <SwiperSlide>
                <img src={portfolio} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={textUtils} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={portfolio} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={textUtils} alt=''/>
            </SwiperSlide>
        </Swiper>


    </div>
  )
}

export default Project