import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MediumIcon from '@mui/icons-material/Book';

const Footer = () => {
  return (
    <footer>
      <p>Follow me on:</p>
      <div>
        <a href="https://www.linkedin.com/in/johnowed/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/johnpow" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://medium.com/@johnowed" target="_blank" rel="noopener noreferrer">
          <MediumIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
