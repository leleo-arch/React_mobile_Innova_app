// src/components/Loading.js
import React from 'react';
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

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${BackgroundAnimation} 1s forwards;
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
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background-color: white;
  border-radius: 50%;
  animation: ${bounce} 1s forwards;
  animation-delay: ${({ delay }) => delay};
`;

const Loading = () => (
  <SpinnerContainer>
    <SpinnerWrapper>
      <Dot delay="0s" />
      <Dot delay="0.2s" />
      <Dot delay="0.4s" />
      <Dot delay="0.6s" />
    </SpinnerWrapper>
  </SpinnerContainer>
);

export default Loading;
