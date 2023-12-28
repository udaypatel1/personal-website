// src/components/writingComponents/Paragraph.js
import React from 'react';
import styled from 'styled-components';

const ParagraphContainer = styled.div`
  max-width: 100%; /* Adjust the percentage as needed */
  margin: 0 auto;
  text-align: left;
`;

const ParagraphText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: black;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Paragraph = ({ children }) => {
  return (
    <ParagraphContainer>
      <ParagraphText>{children}</ParagraphText>
    </ParagraphContainer>
  );
};

export default Paragraph;
