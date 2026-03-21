import portfolio from "../../img/portfolio.png";
import skTelecom from "../../img/skTelecom.png";
import exploreEase from "../../img/explore-ease.png";

export const projectData = [
    {
        id: 1,
        title: 'My Portfolio page',
        description: `A responsive personal portfolio website built using React.js. It showcases my projects, skills, and experiences in a clean, modern layout. The site uses React Router for navigation, modular components for scalability, and is fully optimized for mobile devices.`,
        imgUrl: portfolio,
        link: 'https://sachinsawariya.netlify.app/',
        tags: ["React", "CSS", "Framer Motion"]
    },
    {
        id: 2,
        title: 'ExploreEase: Effortless Travel and Accommodation',
        description: "Designed a travel platform for trip planning, accommodation booking, and itinerary management. Integrated third-party APIs for location services, payments, and booking systems. Focused on scalability and user experience.",
        imgUrl: exploreEase,
        link: 'https://exploreease-travel.vercel.app/',
        tags: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
        id: 3,
        title: 'Loan & Shop Management',
        description: "A full-stack application designed to manage shop operations and loan tracking. Features include real-time inventory, secure user profiles, EMI tracking, interest calculations, and user search. Built with a focus on security.",
        imgUrl: skTelecom,
        link: 'https://github.com/SachinSawariya/SK-Telecom-Frontend',
        tags: ["React", "Firebase", "Node.js"]
    },
    // {
    //     id: 4,
    //     title: 'Food Delivery App',
    //     description: "Hey this is my fourth projects",
    //     imgUrl: '',
    //     link: ''
    // },
]