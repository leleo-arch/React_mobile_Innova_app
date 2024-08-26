import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import backgroundImg from '../../assets/5.png';

// Animação para o texto
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  background: url(${backgroundImg}) center/cover no-repeat;
`;


const Description = styled.p`
  color: white;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  animation: ${fadeIn} 3s ease-in-out;
  padding: 10px;
`;

const Intro = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('home');
    }, 5000); // 5000 ms = 5 segundos

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IntroContainer>
      <Description>
        Bem-vindo à Innova! Explore nossas funcionalidades e tenha uma nova experiência com Jiu-Jitsu.
      </Description>
    </IntroContainer>
  );
};

export default Intro;
