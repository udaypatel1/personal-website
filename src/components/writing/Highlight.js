// src/components/writingComponents/Highlight.js
import React from 'react';
import styled from 'styled-components';

const HighlightLink = styled.a`
  color: grey;
  position: relative;
  font-weight: 750;
  display: inline-block;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: translateY(-3px);
    color: #545454;
  }
`;

const Highlight = ({ link, children }) => {
  return (
    <HighlightLink href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </HighlightLink>
  );
};

export default Highlight;
