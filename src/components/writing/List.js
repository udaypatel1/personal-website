// src/components/writingComponents/ListItem.js
import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  display: flex;
  align-items: baseline;

  &::before {
    content: '';
    width: 0.5em;
    height: 0.5em;
    border: 2px solid black;
    background-color: orange;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

const ListItem = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;
