import React from 'react';
import SEOHead from './SEOHead';

const SEOWrapper = ({ children, section }) => {
  const seoData = {
    home: {
      title: "Sachin Kumar - Full Stack MERN Developer | Home",
      description: "Welcome to my portfolio! I'm Sachin Kumar, a Full Stack MERN Developer specializing in React, Node.js, and scalable web applications.",
      keywords: "Sachin Kumar, full stack developer, MERN stack, React developer, Node.js developer, home, portfolio",
      canonicalUrl: "https://sachinsawariya.netlify.app/",
      ogImage: "https://sachinsawariya.netlify.app/images/sachin-kumar-home.jpg"
    },
    about: {
      title: "About Sachin Kumar - Full Stack MERN Developer",
      description: "Learn more about Sachin Kumar, an experienced Full Stack MERN Developer with expertise in React, Node.js, MongoDB, and building scalable web applications.",
      keywords: "Sachin Kumar, about, full stack developer, MERN stack, React developer, Node.js developer, experience, education",
      canonicalUrl: "https://sachinsawariya.netlify.app/#About",
      ogImage: "https://sachinsawariya.netlify.app/images/sachin-kumar-about.jpg"
    },
    services: {
      title: "Services - Sachin Kumar | Full Stack Development",
      description: "Professional full stack development services by Sachin Kumar. Specializing in MERN stack, React, Node.js, web applications, and API development.",
      keywords: "Sachin Kumar, services, full stack development, MERN stack, React development, Node.js development, web development, API development",
      canonicalUrl: "https://sachinsawariya.netlify.app/#Services",
      ogImage: "https://sachinsawariya.netlify.app/images/sachin-kumar-services.jpg"
    },
    projects: {
      title: "Projects - Sachin Kumar | Full Stack Developer Portfolio",
      description: "Explore projects by Sachin Kumar, including MERN stack applications, job boards, SaaS platforms, and other web development work.",
      keywords: "Sachin Kumar, projects, portfolio, MERN stack, React projects, Node.js projects, web applications, job board, SaaS",
      canonicalUrl: "https://sachinsawariya.netlify.app/#Projects",
      ogImage: "https://sachinsawariya.netlify.app/images/sachin-kumar-projects.jpg"
    },
    testimonials: {
      title: "Testimonials - Sachin Kumar | Client Reviews",
      description: "Read client testimonials and reviews about Sachin Kumar's work as a Full Stack MERN Developer and software engineer.",
      keywords: "Sachin Kumar, testimonials, reviews, client feedback, full stack developer, MERN stack developer, recommendations",
      canonicalUrl: "https://sachinsawariya.netlify.app/#Testimonials",
      ogImage: "https://sachinsawariya.netlify.app/images/sachin-kumar-testimonials.jpg"
    },
    contact: {
      title: "Contact Sachin Kumar - Full Stack MERN Developer",
      description: "Get in touch with Sachin Kumar, Full Stack MERN Developer. Available for freelance projects, collaborations, and job opportunities.",
      keywords: "Sachin Kumar, contact, hire, freelance, collaboration, full stack developer, MERN stack, React developer, Node.js developer",
      canonicalUrl: "https://sachinsawariya.netlify.app/#Contacts",
      ogImage: "https://sachinsawariya.netlify.app/images/sachin-kumar-contact.jpg"
    }
  };
  
  const currentSEO = seoData[section] || seoData.home;
  
  return (
    <>
      <SEOHead {...currentSEO} />
      {children}
    </>
  );
};

export default SEOWrapper;
