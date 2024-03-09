
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Education.css'; 

const Education = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('Education').offsetTop;

      if (scrollPosition > elementPosition) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      id="Education"
      className="Education"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <h3>Education</h3>
      <motion.div
        className="Education-item"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src='./lnjpit.png' alt="lnjpit" className='logo_ed'></img>
        <h2 style={{color: 'white'}}>Loknayak Jai Prakash Institute of Technology</h2><br></br>
        <h4>Loknayak Jai Prakash Institute of Technology (LNJPIT), is a government engineering college in Bihar. It is managed by the Department of Science and Technology, Bihar.It is approved and recognized by the All India Council for Technical Education , it is one of [TEQUIPIII] colleges funded and taken care directly by central govt and is affiliated to the Bihar Engineering University of Patna.</h4><br></br>
        <p style={{color: 'white', fontSize: '20px'} }>B TECH | 2nd Year</p>
      </motion.div>

      <motion.div
        className="Education-item"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src='./jac.png' alt='jac' className='logo_ed'></img>
        <h2 style={{color: 'white'}}>Vananchal Inter College, Giridih</h2><br></br>
        <h4>Jharkhand Academic Council (abbreviated as JAC), is a state government agency responsible for academic administration in the state of Jharkhand, India. The agency is amended to supervise the government recognized academic institutions, including primary and higher secondary schools. </h4><br></br>
        
        <p style={{color: 'white', fontSize: '20px'} }>Higher secondary </p>
      </motion.div>

      <motion.div
        className="Education-item"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src='./saraswati.png' alt='saraswati' className='logo_ed'></img>
        <h2 style={{color: 'white'}}>Saraswati Shishu Vidya Mandir</h2><br></br>
        <h4>Saraswati Shishu Vidya Mandir Barganda, GIRIDIH, is one of the glorious institutions at GIRIDIH in Jharkhand. It bids fair to replace Makaulay system with a viable alternative suited to India's lofty traditions and national aspirations . This school is affiliated to CBSE, DELHI and run by Vidya Vikas Samiti, Jharkhand Approved by Vidya Bharti, The largest non-government educational organization in the country managing various other educational institutions in India.</h4><br></br>
        <p style={{color: 'white', fontSize: '20px'} }>Secondary School </p>
      </motion.div>



    </motion.div>
  );
};

export default Education;
