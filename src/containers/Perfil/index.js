import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: ${props => (props.isOpen ? '200px' : '0')};
  height: 100vh;
  background-color: #333;
  padding: ${props => (props.isOpen ? '20px' : '0')};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  overflow-x: hidden;
  transition: width 0.3s ease;
  z-index: 1000;
  gap:20px;

`;

const SidebarItem = styled(Link)`
  margin-top: 70px;

  color: white;
  text-decoration: none;
  font-size: 18px;
  margin: 40px 0;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  &:hover {
    color: #00AAFF;
  }
`;


const MenuIcon = styled(FaBars)`
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 24px;
  color: white;
  cursor: pointer;
  z-index: 1100;
  margin-bottom: 50px;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuIcon onClick={toggleSidebar} />
      <SidebarContainer isOpen={isOpen}>
        <div>
          <SidebarItem to="/dashboard" isOpen={isOpen}>Dashboard</SidebarItem>
          <SidebarItem to="/profile" isOpen={isOpen}>Perfil</SidebarItem>
          <SidebarItem to="/settings" isOpen={isOpen}>Configurações</SidebarItem>
          <SidebarItem to="/support" isOpen={isOpen}>Suporte</SidebarItem>
          <SidebarItem to="/contact" isOpen={isOpen}>Contato</SidebarItem>
          <SidebarItem to="/" isOpen={isOpen}>Sair</SidebarItem>

        </div>
        </SidebarContainer>
    </>
  );
};

export default Sidebar;
