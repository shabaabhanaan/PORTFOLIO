import React from 'react';

const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;