import React from "react";
import "./Project.css";
import ProjectCard from "./projectCard";
import { projectData } from "./projectList";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Project() {
  return (
    <section className="projects-section" id="Projects">
      <div className="projects-container">
        
        <div className="projects-left">
          <div className="projects-heading-wrapper">
            <h2 className="section-title">
              Featured <br/>
              <span className="highlight">Projects</span>
            </h2>
          </div>
          <p className="projects-desc">
            A curated selection of my recent work, highlighting my expertise in building scalable, full-stack applications.
          </p>
          <p className="projects-desc">
            Swipe through to explore the complex problems I've tackled, intuitive user interfaces I've designed, and production-ready software I've delivered.
          </p>
        </div>

        <div className="projects-right">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 1.2 },
              1024: { slidesPerView: 2 },
            }}
            grabCursor={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="portfolio-slider"
          >
            {projectData.map((data, index) => (
              <SwiperSlide key={data.id}>
                <ProjectCard data={data} index={index + 1} total={projectData.length} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default Project;
