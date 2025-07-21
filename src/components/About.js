import React, { useState, useEffect } from 'react';
import profilePic from '../assets/profile.jpg';
import projectImage from '../assets/1.jpg'; 
import projectImage1 from '../assets/2.jpg'; 
import projectImage2 from '../assets/3.webp'
const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    description: "A personal portfolio built with React.",
    link: "https://example.com/portfolio",
    image: projectImage,
  },
  {
    id: 2,
    title: "E-commerce Site",
    description: "An online store with shopping cart functionality.",
    link: "https://example.com/shop",
    image: projectImage1,
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A blog site with CMS and markdown support.",
    link: "https://example.com/blog",
    image: projectImage2,
  }
];

const About = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsShrunk(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="about-text">
        <h1>Hi, I'm Shabab Hanaan</h1>
        <p>
          I am a <strong>Web Developer</strong>, passionate about web development and design.
          I focus on creating modern, responsive, and user-friendly websites.
        </p>
      </div>
      <div className={`about-profile ${isShrunk ? 'shrunk' : ''}`}>
        <img src={profilePic} alt="Profile" />
      </div>

      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={`${project.title} screenshot`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
