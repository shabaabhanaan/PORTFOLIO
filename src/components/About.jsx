import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    rotateX: -15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const About = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [elementRef, isVisible] = useScrollAnimation(0.2);

  useEffect(() => {
    const handleScroll = () => setIsShrunk(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section 
      ref={elementRef}
      id="about" 
      className="section about-section"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div className="about-content" variants={itemVariants}>
        <motion.div 
          className="about-text"
          whileHover={{ scale: 1.02, rotateY: 2 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h1
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(102, 126, 234, 0.5)"
            }}
          >
            Hi, I'm Shabab Hanaan
          </motion.h1>
          <motion.p variants={itemVariants}>
            I am a <strong>Web Developer</strong>, passionate about creating beautiful, 
            functional, and user-centric digital experiences. I specialize in modern 
            web technologies and 3D design to bring ideas to life.
          </motion.p>
          <motion.p variants={itemVariants}>
            With expertise in <strong>React, JavaScript, CSS3</strong>, and modern design 
            principles, I focus on creating responsive, performant, and visually 
            stunning websites that make a lasting impact.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className={`about-profile ${isShrunk ? 'shrunk' : ''}`}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.1, 
            rotateY: 10,
            rotateX: 5,
            z: 50
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.img 
            src={profilePic} 
            alt="Shabab Hanaan - Web Developer" 
            whileHover={{
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
              filter: "brightness(1.1)"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;