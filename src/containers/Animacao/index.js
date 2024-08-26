import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Peoples from '../../assets/logo.png';
import backgroundImg from '../../assets/5.png';  // Imagem de fundo

// Animação para o texto
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Animação para o logo
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  animation: ${bounce} 2s infinite;
`;

const Description = styled.p`
  color: white;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  animation: ${fadeIn} 3s ease-in-out;
`;

const Intro = () => {
  const history = useHistory();

  useEffect(() => {
    // Redireciona para a página de Menu após 5 segundos
    const timer = setTimeout(() => {
      history.push('/');
    }, 5000); // 5000 ms = 5 segundos

    // Limpa o timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IntroContainer>
      <Logo src={Peoples} alt="Innova Logo" />
      <Description>Bem-vindo à Innova! Explore nossas funcionalidades e tenha uma nova experiência com Jiu-Jitsu.</Description>
    </IntroContainer>
  );
};

export default Intro;
