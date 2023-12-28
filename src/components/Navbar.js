// src/components/Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background: rgba(255, 255, 255, 0.85); /* Use an RGBA color with alpha for translucency */
  //background: white; /* to remove the blur effect */
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000; /* Set a higher z-index value */
  backdrop-filter: blur(5px); /* Adjust the blur amount as needed */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1000
`;

const Logo = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  padding: 10px;
  margin-left: 20px;
  color: black;
  text-decoration: none;
`;

const NavbarItems = styled.div`
  display: flex;
  padding: 10px;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props.isMobileMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-right: 0;
    z-index: 1000;
  }
`;

const NavbarItem = styled(Link)`
  margin: 0 10px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  position: relative;
  text-decoration: none;
  border-radius: 8px;
  padding: 8px 16px;
  transition: background-color 0.3s, color 0.3s;
  background-color: white;
  color: black;
  border: solid black;

  &:hover {
    background-color: orange;
    color: white;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    z-index: 1000;
  }
`;

const CircleButton = styled.div`
  cursor: pointer;
  display: none; /* Initially hidden on larger screens */

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px; /* Adjust the size as needed */
    height: 40px; /* Adjust the size as needed */
    border-radius: 50%;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid black; /* Set the border size as needed */
      border-radius: 50%;
      transition: background-color 0.3s;
    }

    &:hover::before {
      background-color: orange;
    }
  }
`;

const MobileMenuIcon = styled.svg`
  width: 30px; /* Adjust the size as needed */
  height: 30px; /* Adjust the size as needed */
  color: ${(props) => (props.isMobileMenuOpen ? 'white' : 'black')};
  transition: color 0.3s, transform 0.3s;

  transform: rotate(${(props) => (props.isMobileMenuOpen ? '180deg' : '0deg')});
`;

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer>
      <TopSection>
        <Logo href='/'>
          <span style={{ color: 'orange' }}>~/</span>
          uday.io
        </Logo>

        <CircleButton onClick={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen}>
          <MobileMenuIcon viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" isMobileMenuOpen={isMobileMenuOpen}>
            <polygon points="8 10.98 3.51 6.49 4.49 5.51 8 9.02 11.51 5.51 12.49 6.49 8 10.98"></polygon>
          </MobileMenuIcon>
        </CircleButton>
      </TopSection>

      <NavbarItems isMobileMenuOpen={isMobileMenuOpen}>
        <NavbarItem to='/'>Home</NavbarItem>
        <NavbarItem to='/about'>About</NavbarItem>
        <NavbarItem to='/resume'>Resume</NavbarItem>
      </NavbarItems>
    </NavbarContainer>
  );
};

export default Navbar;
