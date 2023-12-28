// src/components/AboutLandingHero.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// const HeroSubtitle = styled.p`
//   font-family: 'Poppins', sans-serif;
//   font-size: 1.25rem;
//   color: black;
//   margin-top: 10px;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

const AboutLandingHero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Hi, thanks for visiting! 👋🏽</HeroTitle>
    </HeroContainer>
  );
};

export default AboutLandingHero;
