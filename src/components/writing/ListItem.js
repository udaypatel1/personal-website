import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  display: contents;
  align-items: baseline;

  &::before {
    content: '\00b7';
  } */
`;

const ListItem = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;
