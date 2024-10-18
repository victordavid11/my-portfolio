import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";

export const HERO_CONTENT = `Full stack developer with a passion for photography. I create visually appealing
websites that are easy to use. With skills in coding, design, and problemsolving, I aim to build websites that make a lasting impact.`;

export const ABOUT_TEXT = `I'm a full-stack developer with expertise in building dynamic, user-focused
 web applications using technologies like React, Node.js, Express, and MongoDB. I enjoy working on both
  the frontend and backend, ensuring seamless user experiences with efficient, scalable code.
   In addition to my tech skills, I'm passionate about photography, often capturing the world
    through my lens and applying a creative touch to my digital work. This blend of technical and creative 
    skills allows me to deliver visually appealing and functionally robust solutions.`;

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    link: "https://my-project-frontend-r05g.onrender.com",
    description:
      "A fully functional full stack food e-commerce website with features like product listing, cart, and user authentication.",
    technologies: ["HTML", "CSS", "MERN",],
  },
  {
    title: "Expense Tracker",
    image: project2,
    link: "https://expense-tracker1-hre6.onrender.com",
    description:
      "A web app built using React that allows users to add, view, and manage their expenses dynamically, with real-time updates and a user-friendly interface..",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Travel Agency",
    image: project3,
    link: "https://vermillion-haupia-10619b.netlify.app/", 
    description:
      "A static Travel Agency webpage that showcases various travel destinations, provides booking options, and highlights services such as tours and travel packages, with a clean, user-friendly design for seamless navigation and engaging visuals to inspire travel plans.",
    technologies: ["HTML", "CSS", "Bootstrap", "Tailwind"],
  },
  {
    title: "Dictionary",
    image: project4,
    link: "https://iridescent-tulumba-1ebc9d.netlify.app/",
    description:
      "A Dictionary Web App that allows users to search for word definitions, synonyms, and examples, providing a simple and efficient interface for expanding vocabulary and language learning.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria ",
  phoneNo: "+2348106066627 ",
  email: "okaravictor90@gmail.com",
};
