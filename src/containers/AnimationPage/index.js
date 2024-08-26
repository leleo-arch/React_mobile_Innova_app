import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import animationImage from '../../assets/logo.png';  // Imagem de animação

// Animação
const fadeIn = keyframes`
  from {
    opacity: -1;
  
  }
  to {
    opacity: 1;
  }
`;

const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: black; // Cor de fundo
  color: black;

  
`;

const AnimationLogo = styled.img`
  width: 300px;
  height: auto;
  animation: ${fadeIn} 5s ease-in-out;
`;

const AnimationPage = () => {
  const history = useHistory();

  useEffect(() => {
    // Redireciona para a página de introdução após 3 segundos
    const timer = setTimeout(() => {
      history.push('/Intro');
    }, 7000); // 3000 ms = 3 segundos

    // Limpa o timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <AnimationContainer>
      <AnimationLogo src={animationImage} alt="Animação" />
    </AnimationContainer>
  );
};

export default AnimationPage;
