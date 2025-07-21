import React from 'react';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'ABC Corp',
    duration: '2024 - Present',
    details: 'Worked on building responsive web apps'
  },
  {
    role: 'Intern',
    company: 'XYZ Ltd',
    duration: '2025',
    details: 'Assisted in development of internal tools.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      {experiences.map((exp, i) => (
        <div key={i} className="experience-item">
          <h3>{exp.role} - {exp.company}</h3>
          <p><em>{exp.duration}</em></p>
          <p>{exp.details}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
