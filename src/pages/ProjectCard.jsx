// ProjectCard.js
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import { motion } from 'framer-motion';
import './ProjectCard.css'; // Import your custom CSS file for the ProjectCard component

const ProjectCard = ({ title, github, link, image, content, stack }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img className="project-image" src={image} alt={title} />

      <div className="project-info">
        <h1 className="project-title">{title}</h1>
        <p className="project-content">{content}</p>

        <div className="project-stack">
          {stack.map((tech, index) => (
            <div key={index} className="tech-icon" data-tooltip={tech.name}>
              {React.createElement(tech.icon)}
            </div>
          ))}
        </div>

        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <AiFillGithub size="1.5rem" className="github-icon" />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <BsLink45Deg size="1.5rem" className="link-icon" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
