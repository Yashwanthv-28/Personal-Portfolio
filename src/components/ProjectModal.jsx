// components/ProjectModal.jsx
import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
                <button className="modal-close" onClick={onClose}>×</button>
                <h2 className="Model-title">{project.title}</h2>
                <p className="Model-dis">{project.longDescription}</p>
                {project?.tech && (
                    <div className="modal-tech-stack">
                        {project.tech.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                )}
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit Project →
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;
