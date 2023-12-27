// src/components/LandingPage.js
import React from 'react';
import styled from 'styled-components';

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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 5rem;
  margin-bottom: 2.5px;
  color: black;
  text-align: center;
`;

const JobTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  font-weight: 500;
  margin: 0.5px;
  color: black;
  text-align: center;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <ImageContainer>
        <Image src="/me.png" alt="Uday Patel Picture" />
      </ImageContainer>

      <TextContainer>
        <Name>Uday Y. Patel</Name>
        <JobTitle>software engineer</JobTitle>
      </TextContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
