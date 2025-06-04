import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 40px;
  z-index: 1000;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #4cc9f0;
  font-size: 24px;
  cursor: pointer;
`;

// The dropdown menu itself visibility controlled by `isOpen` prop
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #0a0a1f;
  border-radius: 5px;
  padding: 10px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

// Each menu item is a styled `Link` to a different route/page
const MenuItem = styled(Link)`
  display: block;
  color: #ffffff;
  text-decoration: none;
  padding: 5px 10px;

  // Subtle background change on hover to make navigation feel responsive
  &:hover {
    background-color: #003366;
  }
`;

const NavigationMenu = () => {
  // State to track whether the dropdown is visible
  const [isOpen, setIsOpen] = useState(false);

  return (
    // The menu will close when the mouse leaves the container
    <MenuContainer onMouseLeave={() => setIsOpen(false)}>
      {/* When the mouse hovers over the button, the menu opens */}
      <MenuButton onMouseEnter={() => setIsOpen(true)}>☰</MenuButton>

      {/* Conditionally visible dropdown menu */}
      <DropdownMenu isOpen={isOpen}>
        {/* Navigation links */}
        <MenuItem to="/home">Home</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
        <MenuItem to="/achievements">Achievements</MenuItem>
        <MenuItem to="/experience">Experience</MenuItem>
        <MenuItem to="/introduction">Learn about me</MenuItem>
      </DropdownMenu>
    </MenuContainer>
  );
};

export default NavigationMenu;
