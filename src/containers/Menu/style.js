// src/pages/style.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/5.png';  // Importa a imagem de fundo

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-image: url(${backgroundImg});  // Define a imagem de fundo
  background-size: cover;  // Faz com que a imagem cubra todo o contêiner
  background-position: center;  // Centraliza a imagem
  background-repeat: no-repeat;  // Evita que a imagem se repita

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    height: auto;
  }


  @media (min-width: 375px) {
    max-width: 500px;
    max-height: 150vh;

  }
`;

export const Image = styled.img`
  width: 270px;
  height: auto;
  margin-bottom: 0px;
  border-radius: 20px;
`;
export const Tempo = styled.img`
  width: 35px;
  height: 35px;
`;

export const Imagem = styled.img`
  width: 270px;
  height: auto;
  margin-bottom: 0px;
  border-radius: 20px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContainerItems2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  gap:49px;
  margin-top: -28px;
  margin-bottom: 50px;
  margin-right: 13px;
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
    background: transparent;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: scroll;
  }
`;

export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 16px;
    margin-bottom: 15px;
  }
`;

export const Circle = styled(Link)`
  width: 90px;
  height: 80px;
  background-color: #00AAFF;
  border-radius: 50%;
  border: solid 2px #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 30px;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
 background-color: white;
  color: white;
  border: 2px solid #3498db;
  border-radius: 12px;
  padding: 0;
  text-decoration: none;
  width: 180px;
  height: 220px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  overflow-x: 0;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  
  img {
   width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
color:black;
  }

  span {
    position: absolute;
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }

  &:hover {

    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 300px;
  }
`;

export const IntroText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  max-width: 500px;
  color: white;
  background-color:rgba(0, 123, 255, 0.3) ;
  border-radius:20px;
  padding: 10px;
  margin-bottom: 30px;


  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 80%;
    margin-bottom: 60px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    max-width: 80%;
    margin-bottom: 60px;

  }


`;

export const IntroText2 = styled.p`
color: white;
font-size: 10px;


`;
