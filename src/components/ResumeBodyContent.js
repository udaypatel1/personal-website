// src/components/ResumeBodyContent.js
import React from 'react';
import styled from 'styled-components';
import resumeImage from '../assets/resumeImage.png';
import resumePdf from '../assets/resume.pdf';

const ResumeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const ResumeImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

const ResumeButton = styled.a`
  display: block;
  background-color: white;
  border: solid black;
  width: auto;
  color: black;
  padding: 10px 20px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  margin-top: 20px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: orange;
    color: white;
  }

  @media (max-width: 768px) {
      font-size: 1rem;
  }
`;

const ResumeBodyContent = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Uday Patel - Resume'; // Change the filename if needed
    link.click();
  };

  return (
    <ResumeContainer>
      <ResumeImage src={resumeImage} alt="Resume" onClick={handleDownloadResume} />
      <ResumeButton href={resumePdf} target="_blank" onClick={handleDownloadResume}>
        Download
      </ResumeButton>
    </ResumeContainer>
  );
};

export default ResumeBodyContent;
