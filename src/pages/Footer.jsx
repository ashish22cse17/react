import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer id ="Footer">
      <div className="footer-content">

        
        <div className="footer-image-container">
          <img
            src="myimg.png" 
            alt="Profile"
            className="footer-profile-image"
          />
          <div class="box-content">
            <h3 class = "name">SHUBHAM</h3>
            <h3 class="post">DEVELOPER</h3>
          </div>

        </div>


        <div className="footer-text">
          <p id ="name"> SHUBHAM KUMAR</p>
          <h5 id = "dev"> Frontend Dev | Backend Dev | React Native Dev| Video Creator </h5>
          <div className="social-links">
            {/* GitHub */}
            <a href="https://github.com/Shubhamcse12" target="_blank" rel="noopener noreferrer">
              <img
                src="git.png" 
                alt="GitHub"
                className="social-link-image"
              />
            </a>
            
            {/* LinkedIn */}
            <a href="www.linkedin.com/in/shubhamcse12" target="_blank" rel="noopener noreferrer">
              <img
                src="linkedin.png" 
                alt="linkedIn"
                className="social-link-image"
              />
            </a>

            {/* Email */}
            <a href="mailto:you@example.com">
              <img
                src="gmail.png" 
                alt="Email"
                className="social-link-image"
              />
            </a>

            {/* instagram */}
            <a href="mailto:you@example.com">
              <img
                src="instagram.png" 
                alt="instagram"
                className="social-link-image"
              />
            </a>

            {/* x */}
            <a href="mailto:you@example.com">
              <img
                src="x.png" 
                alt="x"
                className="social-link-image"
              />
            </a>
          </div>

          
          <div className="Resume">
            <button>
              <a href="link-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>

      <div class="copyright">
            <h3>&copy;Made by SHUBHAM KUMAR</h3>
      </div>
    </footer>
  );
};

export default Footer;
