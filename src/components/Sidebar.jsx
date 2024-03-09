
import "./Sidebar.css"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaHome, FaUser, FaGraduationCap, FaTools, FaBriefcase } from 'react-icons/fa';


const routes = [
  {
    path: "Header",
    name: "Header",
    icon: <FaHome  size={25}/>,
  },
  {
    path: "Home",
    name: "Home",
    icon: <FaUser  size={25}/>,
  },
  {
    path: "Skills",
    name: "Skills",
    icon: <FaTools  size={25}/>,
  },

  {
    path: "Projects",
    name: "Projects",
    icon: <FaBriefcase size={25} />,
  },

  {
    path: "Education",
    name: "Education",
    icon: <FaGraduationCap size={25} />,
  },



  {
    path: "Footer",
    name: "Connect",
    icon: <img src="./link1.png" alt="connect" style={{ width:'30px' , height: '30px', color:'white'} } ></img> ,
  },
];

const showAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.5,
    },
  },
};

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (path) => {
    const element = document.getElementById(path);
  
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
        inline: 'nearest',
      });
  
     
    }
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            position: isTop ? "absolute" : "fixed",
            top: isTop ? "0" : "",
            zIndex: isTop ? 3 : 1,
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  My Portfolio
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => (
              <div
                key={index}
                className="link"
                onClick={() => scrollToSection(route.path)}
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
