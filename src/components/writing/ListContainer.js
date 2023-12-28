import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`

  display: grid;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: black;
  gap: 0.25em;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ListContainer = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default ListContainer;
