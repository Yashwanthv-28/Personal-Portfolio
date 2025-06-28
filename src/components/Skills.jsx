import React from "react";
import { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase } from "react-icons/fa";
import GlassIcons from "./GlassIcons";
import { SiDjango, } from "react-icons/si";
import "./skills.css";


const skillsList = [
  { icon: <FaJs size={32} />, label: "JavaScript", color: "yellow" },
  { icon: <FaReact size={32} />, label: "React", color: "purple" },
  { icon: <FaHtml5 size={32} />, label: "HTML", color: "orange" },
  { icon: <FaCss3Alt size={32} />, label: "CSS", color: "blue" },
  { icon: <FaPython size={32} />, label: "Python", color: "green" },
  { icon: <FaDatabase size={32} />, label: "SQL", color: "gray" },
  { icon: <SiDjango size={32} />, label: "Django", color: "darkgreen" }

];

const Skills = () => {
  useEffect(() => {
    document.title = "Skills | My Portfolio";
  }, []);
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Skills</h2>
      <p className="skills-subheading">Tools & Technologies That Power My Ideas</p>     
        <GlassIcons items={skillsList} className="skills-grid" />
    </section>
  );
};

export default Skills;
