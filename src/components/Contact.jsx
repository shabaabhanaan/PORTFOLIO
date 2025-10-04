import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:shababhanaan22@gmail.com">shababhanaan22@gmail.com</a></p>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <a href="https://linkedin.com/in/shabaabhanaan" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a href="https://github.com/shabaabhanaan" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} /> GitHub
        </a>
        <a href="https://twitter.com/shabaabhanaan" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} /> Twitter
        </a>
      </div>
    </section>
  );
};

export default Contact;