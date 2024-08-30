import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaHome, FaUser, FaCogs, FaHandsHelping, FaEnvelope, FaSignOutAlt, FaUserFriends } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: ${props => (props.isOpen ? '250px' : '0px')};
  height: 100vh;
  background-color: #333;
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
  padding-top: 60px;

  @media (max-width: 768px) {
    width: ${props => (props.isOpen ? '250px' : '0px')};
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

  ${props => !props.isOpen && `
    justify-content: center;
    svg {
      margin-right: 0;
    }
    span {
      display: none;
    }
  `}
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
        <div>
          <SidebarItem to="/Menu" isOpen={isOpen}>
            <FaHome />
            {isOpen && <span>Menu</span>}
          </SidebarItem>
          <SidebarItem to="/MeuPerfil" isOpen={isOpen}>
            <FaUser />
            {isOpen && <span>Perfil</span>}
          </SidebarItem>
          <SidebarItem to="/Configuracoes" isOpen={isOpen}>
            <FaCogs />
            {isOpen && <span>Configurações</span>}
          </SidebarItem>
          <SidebarItem to="/Suporte" isOpen={isOpen}>
            <FaHandsHelping />
            {isOpen && <span>Suporte</span>}
          </SidebarItem>
          <SidebarItem to="/Contato" isOpen={isOpen}>
            <FaEnvelope />
            {isOpen && <span>Contato</span>}
          </SidebarItem>
          <SidebarItem to="/" isOpen={isOpen}>
            <FaSignOutAlt />
            {isOpen && <span>Sair</span>}
          </SidebarItem>
          <SidebarItem to="/" isOpen={isOpen}>
            <FaUserFriends />
            {isOpen && <span>Instagram</span>}
          </SidebarItem>
        </div>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

