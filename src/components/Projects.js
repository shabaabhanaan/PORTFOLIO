import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A cool React app',
    link: 'https://github.com/yourusername/project-one'
  },
  {
    title: 'Project Two',
    description: 'Another awesome project',
    link: 'https://github.com/yourusername/project-two'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, i) => (
          <li key={i}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a> - {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
