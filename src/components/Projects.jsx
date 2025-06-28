import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import ProjectModal from "./ProjectModal"; // Make sure this is created

import chatAppImg from "../assets/MERN.jpg";
import cryptoCPP from "../assets/crypto.jpg";
import HousePP from "../assets/housePP.jpg";
import Portfolio from "../assets/Portfolio.jpg";

const projects = [
  {
    title: "Cryptocurrency Price Prediction",
    description:
      "Cryptocurrency Price Prediction is a responsive crypto analytics platform that offers real-time market data, interactive charts, and basic price predictions using moving averages—built with React and TypeScript.",
    longDescription: "Cryptocurrency Price Prediction is a sleek, educational crypto dashboard that combines real-time market insights with algorithmic price forecasting. Built using React, TypeScript, and Chart.js, it features live price tracking, historical charts, coin comparisons, watchlists, and basic 7-day predictions powered by moving averages and sentiment data. Designed for clarity and accessibility, it helps users explore and understand crypto trends with ease.",
    tech: ["React", "Typescript","ML", "API"],
    link: "https://github.com/Yashwanthv-28/Cryptocurrency-Price-Prediction.git",
    image: cryptoCPP,
  },
  {
    title: "Real-Time MERN Stack Chat Application",
    description:
      "Full-stack real-time chat app using MongoDB, Express, React, and Node.js with Socket.IO..",
    longDescription: "A full-fledged MERN stack (MongoDB, Express, React, Node.js) based chat application that allows users to communicate instantly via Socket.IO. It supports real-time messaging, typing indicators, and dynamic room management.The frontend is built with React, offering smooth UX and responsive design, while the backend handles user sessions, socket connections, and message persistence. This project demonstrates a strong grasp of full-stack development and real-time communication systems, with efficient state handling and secure backend routes.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    link: "https://github.com/Yashwanthv-28/Real-time-chat-mern.git",
    image: chatAppImg,
  },
  {
    title: "House Price Prediction",
    description:
      "Predicts house prices using machine learning on Bengaluru housing datasets.",
    longDescription: "A machine learning–based project that predicts property prices in Bangalore using datasets from Kaggle. The model is built using Python and various data science libraries like Pandas, NumPy, and Scikit-learn.It performs data cleaning, feature engineering, outlier detection, and model training using Linear Regression and GridSearchCV for optimization. This project reflects strong data preprocessing and evaluation skills with an emphasis on practical deployment-ready modeling for real-estate analytics.",
    tech: ["Django", "Bootstrap", "ML", "Kaggle"],
    link: "https://github.com/Yashwanthv-28/Bangalore-House-Price-Prediction.git",
    image: HousePP,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A fully responsive, modern portfolio showcasing projects, skills, and contact details with smooth animations and glassmorphic design.",
    longDescription: "This is a personal developer portfolio built using React, featuring a visually engaging design with glassmorphism aesthetics, scroll-triggered animations, and dynamic content updates such as section-based document titles and navigation highlighting. It includes a custom loading spinner, responsive layouts across all screen sizes, and interactive project modals for enhanced UX. The application emphasizes minimalism, performance, and clean UI/UX principles. It serves as a professional showcase of my skills, projects, and web development capabilities.",
    tech: ["React.js","JavaScript (ES6+)", "CSS","Modern UI/UX"],
    link: "https://github.com/yourusername/weather-app",
    image: Portfolio,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Projects | My Portfolio";
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="project-subheading">A collection of projects that blend functionality, design, and performance—each crafted
        with a deep passion for problem-solving and user-first thinking.
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="project-img-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
              <button onClick={() => openModal(project)} className="view-btn">
                View Project
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
