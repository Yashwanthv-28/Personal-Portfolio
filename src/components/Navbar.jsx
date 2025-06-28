import React from "react";
import { Link } from "react-scroll";
import BlurText from "./BlurText";
import "./Navbar.css";

const Navbar = () => {
  const handleAnimationComplete = () => {
    console.log("Navbar animation completed!");
  };

  // JSX navigation links to animate
  const navItems = [
    <Link to="home" smooth={true} duration={500} className="nav-link" key="home">Home</Link>,
    <Link to="projects" smooth={true} duration={500} className="nav-link" key="projects">Projects</Link>,
    <Link to="skills" smooth={true} duration={500} className="nav-link" key="skills">Skills</Link>,
    <Link to="about" smooth={true} duration={500} className="nav-link" key="about">About</Link>,
    <Link to="contact" smooth={true} duration={500} className="nav-link" key="contact">Contact</Link>,
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <BlurText
          delay={100}
          direction="top"
          className="navbar-blur-text"
          onAnimationComplete={handleAnimationComplete}>
          {navItems}
        </BlurText>
      </div>
    </nav>
  );
};

export default Navbar;
