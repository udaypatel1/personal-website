// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(51, 51, 51, 0.8);
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const IconLink = styled.a`
  margin: 0 10px;
  color: white;
  font-size: 2rem;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s ease-in-out; /* Add ease-in-out timing function */

  &:hover {
    color: orange;
    transform: scale(1.35); /* Increase the scale on hover */
  }

  img {
    width: 30px; /* Adjust the width to your desired size */
    height: auto; /* Maintain aspect ratio */
    border-radius: 50%; /* If you want a circular image */
  }
`;

const FooterDetail = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: .75rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconContainer>
        <IconLink href="https://github.com/udaypatel1" target="_blank" rel="noopener noreferrer">
          <img src="./github_logo.png" alt="GitHub" />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/uday3patel/" target="_blank" rel="noopener noreferrer">
          <img src="./linkedin_logo.png" alt="LinkedIn" />
        </IconLink>
        <IconLink href="mailto:uday3patel@gmail.com">
          <img src="./mail_logo.png" alt="Email" />
        </IconLink>
      </IconContainer>
      <FooterDetail>&copy; est. 2024 All Rights Reserved.</FooterDetail>
    </FooterContainer>
  );
};

export default Footer;
