// src/components/LandingPage.js
import React from 'react';
import styled from 'styled-components';
import selfie from '../assets/me.png';

const LandingPageContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 20px;
  z-index: 1;
  //background-color: rgb(0,0,0,0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: .5;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  flex: .75;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Name = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 5rem;
  padding: 10px;
  color: black;
  text-align: center;
`;

const JobTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  font-weight: 500;
  padding: 4px;
  color: black;
  text-align: center;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <ImageContainer>
        <Image src={selfie} alt="Uday Patel Picture" />
      </ImageContainer>

      <TextContainer>
        <Name>Uday Y. Patel</Name>
        <JobTitle>software engineer</JobTitle>
      </TextContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
