// ProjectsSection.js
import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { projects } from './every';
import './Projects.css';

const Projects = () => {
  return (
       
    <motion.section
      id = "Projects" className="projects-section"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.6 }}
    >
      <div id="Projects" className="section-title">
        <h3>Projects</h3>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 55, 0.5)',
              backgroundColor: 'rgb(155, 183,222)', // Adjust color as needed
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;