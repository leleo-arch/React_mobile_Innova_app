// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: green;
    border-radius: 5px;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Checkin-aula">Check-in</NavLink>
      <NavLink to="/Treino">Treino do Dia</NavLink>
      <NavLink to="/Cadastros-Alunos">Cadastro de Alunos</NavLink>
      <NavLink to="/Golpes">Lista de Golpes</NavLink>
      <NavLink to="/Desafios">Desafios</NavLink>
      <NavLink to="/Comunidade">Comunidades</NavLink>
    </NavContainer>
  );
};

export default NavBar;
