import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  useEffect(() => {
    document.title = "About | My Portfolio";
  }, []);
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-content"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p>
          <strong>Yashwanth V</strong> is a motivated and detail-oriented Computer Science and Engineering undergraduate from Maharaja Institute of Technological University, Mysore. With a strong grasp of programming concepts and a passion for emerging technologies, he brings a balanced skill set in both software development and artificial intelligence.
        </p>

        <p>
          Has completed internships at <strong>ICT Academy</strong>, where he gained hands-on experience in AI and machine learning, and at <strong>Raaya Infotech Solutions</strong>, where he contributed to full-stack web development projects using CSS, Bootstrap, and JavaScript. These experiences have strengthened his practical knowledge and teamwork abilities in real-world tech environments.
        </p>

        <p>
          Has built notable projects such as a <strong>Cryptocurrency Price Prediction platform</strong>, a <strong>MERN Stack Chat App</strong>, and a <strong>House Price Prediction model</strong> using advanced machine learning techniques. These projects demonstrate his ability to combine data science with intuitive user interface design to solve practical problems.
        </p>

        <p>
          Technical skills include <strong>Python, JavaScript, HTML, CSS, SQL</strong>, and he is proficient with frameworks such as <strong>React</strong> and <strong>Django</strong>. He has also earned certifications from <strong>CISCO Networking Academy</strong> in Python and Data Analytics, reflecting his commitment to continuous learning.
        </p>

        <p>
          Yashwanth V  driven by curiosity, a strong work ethic, and a genuine enthusiasm for building innovative solutions that have real-world impact.
        </p>

      </motion.div>
    </section>
  );
};

export default About;
