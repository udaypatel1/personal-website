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
        <ListItem>🎓 I'm currently in a Master's program @ <Highlight link="https://rutgers.edu">Rutgers University</Highlight>, trying to learn more about Computer Information Systems</ListItem>
        <ListItem>🏠 I live in New Jersey (yes, central jersey exists)</ListItem>
        <ListItem>👨🏽‍💻 I work for <Highlight link="https://guardianlife.com">Guardian Life</Highlight> in NYC as a Software Engineer on the Applied Innovation Engineering team building full stack, direct-to-consumer products</ListItem>
        <ListItem>🏈 I enjoy going to live sporting events - an avid fan of the LA Clippers, NY Giants, NY Yankees, NJ Devils, Inter Milan, and Novak Djokovic</ListItem>
        <ListItem>📸 I appreciate photography and film, finding time to shoot urban stills and mundane life</ListItem>
        <ListItem>🌎 I love to travel!</ListItem>
      </ListContainer>

      <Paragraph>
        If you'd like to get in touch, please send a personalized connect to my <Highlight link="https://www.linkedin.com/in/uday3patel">LinkedIn</Highlight> or
        send me a <Highlight link="mailto:uday3patel@gmail.com">message</Highlight>.
      </Paragraph>
    </ContentContainer>
  );
};

export default AboutContent;
