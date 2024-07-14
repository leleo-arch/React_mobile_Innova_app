import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Spinner animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120vh;
  padding: 20px;
  background-color: #f5f5f5;
  transition: opacity 0.5s ease-in-out;
`;

export const Image = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 20px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
  font-size: 32px;
  color: #333;
  text-align: center;
`;

export const Button = styled(Link)`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px 20px;
  margin: 10px 0;
  text-decoration: none;
  text-align: center;
  border-radius: 5px;
  width: 220px;
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }
`;

export const IntroText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  max-width: 600px;
  color: #555;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 10px;
`;

export const LoadingText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  text-align: center;
  color: #007bff;
`;
