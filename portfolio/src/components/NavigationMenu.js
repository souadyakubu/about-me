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

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #0a0a1f;
  border-radius: 5px;
  padding: 10px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const MenuItem = styled(Link)`
  display: block;
  color: #ffffff;
  text-decoration: none;
  padding: 5px 10px;

  &:hover {
    background-color: #003366;
  }
`;

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContainer onMouseLeave={() => setIsOpen(false)}>
      <MenuButton onMouseEnter={() => setIsOpen(true)}>☰</MenuButton>
      <DropdownMenu isOpen={isOpen}>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/introduction">Introduction</MenuItem>
        <MenuItem to="/experience">Experience</MenuItem>
        <MenuItem to="/pet-projects">Pet Projects</MenuItem>
        <MenuItem to="/achievements">Achievements</MenuItem>
      </DropdownMenu>
    </MenuContainer>
  );
};

export default NavigationMenu;