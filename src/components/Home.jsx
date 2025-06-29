import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ProfileCardComponent from "../components/ProfileCard";
import "./Home.css";
import { FaDownload } from "react-icons/fa";


const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  useEffect(() => {
    document.title = "Home | My Portfolio";
  }, []);
  return (
    <section id="home" className="home-section">
      <motion.div
        className="home-profile"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <ProfileCardComponent />
      </motion.div>

      <motion.div
        className="home-content"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="home-heading">Hello, I'm Yashwanth</h1>
        <p className="home-subheading">
          Crafting Seamless Digital Experiences with Code & Creativity.<br />
          A passionate Full Stack Developer blending design thinking with problem-solving. I build intuitive web solutions that don't just work—but *feel* right.

        </p>
        <a href="/Resume.pdf" download className="glass-resume-button">
          <FaDownload className="download-icon" />
          Resume
        </a>

      </motion.div>
    </section>
  );
};

export default Home;
