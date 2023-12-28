// src/components/AboutContent.js
import React from 'react';
import styled from 'styled-components';
import Paragraph from './writing/Paragraph';
import ListContainer from './writing/ListContainer';
import ListItem from './writing/ListItem';
import Highlight from './writing/Highlight';

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  padding: 0 20px;
`;

const AboutContent = () => {
  return (
    <ContentContainer>
      <Paragraph>
        Welcome to my personal website. I share my thoughts, highlight my experiences, and have a place to call my own.
        I'm excited to build out this site as I plan on adding more content over time. Here are a few things about me:
      </Paragraph>

      <ListContainer>
        <ListItem>I'm currently in a Master's program @ <Highlight link="https://rutgers.edu">Rutgers University</Highlight>, trying to learn more about Computer Information Systems</ListItem>
        <ListItem>I live in New Jersey (yes, central jersey exists)</ListItem>
        <ListItem>I work for <Highlight link="https://guardianlife.com">Guardian Life</Highlight> in NYC as a Software Engineer on the Applied Innovation Engineering team building full stack, direct-to-consumer solutions</ListItem>
      </ListContainer>

      <Paragraph>
        Connect with me on{' '}
        <Highlight link="https://www.linkedin.com/in/your-linkedin-profile">LinkedIn</Highlight> or
        send me a <Highlight link="mailto:uday3patel@gmail.com">message</Highlight>.
      </Paragraph>
    </ContentContainer>
  );
};

export default AboutContent;
