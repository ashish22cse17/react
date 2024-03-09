// Home.js
import React from 'react';
import './Home.css';
import ParticleBackground from './ParticlesBackground';

const Home = () => {
  return (
    <div id="Home" className="home-section">
      <div className="text-container">
        <div className="intro">Welcome to my world of Full-stack developer </div>
        <p className="first-line">Explore my work showcasing skills .<br /> Let's connect and create something awesome together!</p>
        <p className="second-line"> Explore my portfolio to witness the convergence of innovation and craftsmanship.</p>
        <div className="circle" id="go"><a href='www.linkedin.com/in/shubhamcse12'>Let's <br/> Connect</a></div>
      </div>
      <div className="pattern-container">
        <ParticleBackground className="particle-background" />
      </div>
    </div>
  );
};

export default Home;
