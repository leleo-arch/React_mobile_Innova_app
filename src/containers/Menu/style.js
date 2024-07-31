// src/pages/style.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0;
  background-color: black;

  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    height: auto;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 20px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
  font-size: 32px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ButtonGallery = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 10px 0;
  gap: 15px;
  width: 100%;
  box-sizing: border-box;

  /* Scrollbar styles for WebKit browsers */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: scroll;
  }
`;

export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    margin-bottom: 15px;
  }
`;

export const Circle = styled(Link)`
  width: 50px;
  height: 50px;
  background-color: #3498db;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  border: 2px solid #3498db;
  border-radius: 12px;
  padding: 0;
  text-decoration: none;
  width: 180px;
  height: 180px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  img {
    max-width: 200px;
    max-height: 120px;
    object-fit: cover;
    border-radius: 10px;
  }

  span {
    position: absolute;
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }

  &:hover {
    background-color: green;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

export const IntroText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  max-width: 600px;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 90%;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    max-width: 100%;
  }
`;