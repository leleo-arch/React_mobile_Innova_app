import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaHome, FaUser, FaCogs, FaHandsHelping, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: ${props => (props.isOpen ? '250px' : '0')};
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
  gap: 20px;

  @media (max-width: 768px) {
    width: ${props => (props.isOpen ? '250px' : '0')};
  }
`;

const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #00AAFF;
    color: #fff;
  }

  svg {
    margin-right: 10px;
  }

  &.active {
    background-color: #00AAFF;
    color: #fff;
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
        <div></div>
        <div>
          <SidebarItem to="/Menu" isOpen={isOpen}>
            <FaHome /> Menu
          </SidebarItem>
          <SidebarItem to="/profile" isOpen={isOpen}>
            <FaUser /> Perfil
          </SidebarItem>
          <SidebarItem to="/settings" isOpen={isOpen}>
            <FaCogs /> Configurações
          </SidebarItem>
          <SidebarItem to="/support" isOpen={isOpen}>
            <FaHandsHelping /> Suporte
          </SidebarItem>
          <SidebarItem to="/contact" isOpen={isOpen}>
            <FaEnvelope /> Contato
          </SidebarItem>
          <SidebarItem to="/" isOpen={isOpen}>
            <FaSignOutAlt /> Sair
          </SidebarItem>
        </div>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
