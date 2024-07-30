// src/components/BottomNavBar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const BackgroundAnimation = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0.8);
  }
  50% {
    background-color: rgba(0, 0, 0, 0.6);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const BottomNavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  padding: 8px 16px;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  box-sizing: border-box;
  border: 1px solid green;


  @media (max-width: 768px) {
    padding: 6px 12px;
  }
`;

const BottomNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 14px;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-align: center;

  &:hover {
    background-color: green;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${BackgroundAnimation} 1.5s infinite alternate;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 20px;
  height: 22px;
  margin: 0 5px;
  background-color: white;
  border-radius: 50%;
  animation: ${bounce} 1s infinite;
  animation-delay: ${({ delay }) => delay};

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

const BottomNavBar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SpinnerContainer>
          <SpinnerWrapper>
            <Dot delay="0s" />
            <Dot delay="0.2s" />
            <Dot delay="0.4s" />
            <Dot delay="0.6s" />
          </SpinnerWrapper>
        </SpinnerContainer>
      ) : (
        <BottomNavContainer>
          <BottomNavLink to="/">Home</BottomNavLink>
          <BottomNavLink to="/Checkin-aula">Checkin</BottomNavLink>
          <BottomNavLink to="/Treino">Treino</BottomNavLink>
          <BottomNavLink to="/Cadastros-Alunos">Cadastros</BottomNavLink>
          <BottomNavLink to="/Golpes">Golpes</BottomNavLink>
          <BottomNavLink to="/Comunidade">Comunidade</BottomNavLink>
        </BottomNavContainer>
      )}
    </>
  );
};

export default BottomNavBar;
