import portfolio from "../../img/portfolio.png";
import skTelecom from "../../img/skTelecom.png";
import exploreEase from "../../img/explore-ease.png";

export const projectData = [
    {
        id: 1,
        title: 'My Portfolio page',
        description: `A responsive personal portfolio website built using React.js. It showcases my projects, skills, and experiences in a clean, modern layout. The site uses React Router for navigation, modular components for scalability, and is fully optimized for mobile devices. Designed to reflect both creativity and functionality.`,
        imgUrl: portfolio,
        link: 'https://sachinsawariya.netlify.app/'
    },
    {
        id: 2,
        title: 'ExploreEase: Effortless Travel and Accommodation.',
        description: "Designed a travel platform for trip planning, accommodation booking, and itinerary management. Integrated third-party APIs for location services, payments, and booking systems. Focused on scalability, security, and delivering a seamless user experience.",
        imgUrl: exploreEase,
        link: 'https://exploreease-travel.vercel.app/'
    },
    {
        id: 3,
        title: 'Loan and shop management App',
        description: "A full-stack application designed to manage shop operations and loan tracking efficiently. Features include real-time inventory updates, secure user profile management, EMI tracking, interest calculations, and user search by Aadhar or mobile number. The system is built with a focus on scalability, performance, and secure handling of sensitive data.",
        imgUrl: skTelecom,
        link: 'https://github.com/SachinSawariya/SK-Telecom-Frontend'
    },
    // {
    //     id: 4,
    //     title: 'Food Delivery App',
    //     description: "Hey this is my fourth projects",
    //     imgUrl: '',
    //     link: ''
    // },
]