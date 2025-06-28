import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import GlassIcons from "./GlassIcons";
import "./Contact.css";

const Contact = () => {
   useEffect(() => {
    document.title = "Contact | My Portfolio";
  }, []);
  const socialItems = [
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      color: "purple",
      link: "https://github.com/Yashwanthv-28",
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      color: "blue",
      link: "https://www.linkedin.com/in/yashwanth-v-902a8630b",
    },
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      color: "red",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=yash7777700@gmail.com&su=Hello&body=Hi%20there!",
    },
  ];

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="contact-heading">Let’s Connect</h2>
      <div className="glass-socials">
        <GlassIcons
          items={socialItems.map((item) => ({
            ...item,
            customClass: "social-icon",
            onClick: () => handleRedirect(item.link),
          }))}
        />
      </div>
    </motion.section>
  );
};

export default Contact;
