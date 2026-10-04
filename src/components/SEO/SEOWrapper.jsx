import React from 'react';
import SEOHead from './SEOHead';

const SEOWrapper = ({ children, section }) => {
  const seoData = {
    home: {
      title: "Sachin Kumar | Expert Full Stack MERN Developer",
      description: "Welcome to the portfolio of Sachin Kumar, a passionate Full Stack MERN Developer specializing in React.js, Node.js, Next.js, and building scalable web applications.",
      keywords: "Sachin Kumar, hire full stack developer, MERN stack developer, React.js developer, Node.js expert, software engineer portfolio, India",
      canonicalUrl: "https://sachinsawariya.netlify.app/",
      ogImage: "https://sachinsawariya.netlify.app/images/sachin-kumar-home.jpg"
    },
    about: {
      title: "About Sachin Kumar | React & Node.js Developer",
      description: "Learn more about Sachin Kumar, an experienced Full Stack Software Engineer bridging the gap between pixel-perfect front-end design and robust backend architecture.",
      keywords: "about Sachin Kumar, React developer background, software engineer experience, MERN stack skills, frontend and backend developer",
      canonicalUrl: "https://sachinsawariya.netlify.app/#About",
      ogImage: "https://sachinsawariya.netlify.app/images/sachin-kumar-about.jpg"
    },
    services: {
      title: "Freelance Web Development Services | Sachin Kumar",
      description: "Hire Sachin Kumar for professional full stack web development. Expert in MERN stack, React, Next.js, Node.js, API development, and custom SaaS solutions.",
      keywords: "freelance web developer, MERN stack services, custom web applications, SaaS development, API creation, hire React developer",
      canonicalUrl: "https://sachinsawariya.netlify.app/#Services",
      ogImage: "https://sachinsawariya.netlify.app/images/sachin-kumar-services.jpg"
    },
    projects: {
      title: "MERN Stack Projects Portfolio | Sachin Kumar",
      description: "Explore the web development portfolio of Sachin Kumar. View featured projects including scalable SaaS platforms, job boards, and modern React applications.",
      keywords: "MERN stack projects, React portfolio, full stack web apps, Next.js projects, Node.js backend examples, software development work",
      canonicalUrl: "https://sachinsawariya.netlify.app/#Projects",
      ogImage: "https://sachinsawariya.netlify.app/images/sachin-kumar-projects.jpg"
    },
    testimonials: {
      title: "Client Testimonials & Reviews | Sachin Kumar",
      description: "Read what clients have to say about working with Sachin Kumar. A proven track record of delivering high-quality Full Stack MERN development services.",
      keywords: "Sachin Kumar reviews, freelance developer testimonials, client feedback, reliable web developer, software engineering recommendations",
      canonicalUrl: "https://sachinsawariya.netlify.app/#Testimonials",
      ogImage: "https://sachinsawariya.netlify.app/images/sachin-kumar-testimonials.jpg"
    },
    contact: {
      title: "Contact Sachin Kumar | Hire a Full Stack Developer",
      description: "Looking for a Full Stack MERN Developer? Get in touch with Sachin Kumar for freelance projects, technical collaborations, and software engineering opportunities.",
      keywords: "contact Sachin Kumar, hire MERN developer, freelance React developer, web development inquiry, software engineer contact",
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
