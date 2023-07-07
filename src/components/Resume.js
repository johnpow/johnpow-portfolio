import React from 'react';
import resumeImage from '../images/resume.png';
import resumePDF from '../images/resume.pdf';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <img src={resumeImage} alt="Resume Screenshot" />
      <br />
      <a href={resumePDF} download>
        Download PDF
      </a>
    </div>
  );
};

export default Resume;