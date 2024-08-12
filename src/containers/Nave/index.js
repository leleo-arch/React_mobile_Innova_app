import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import CheckinImage from '../../assets/sport.png';
import CheckinImage1 from '../../assets/home-button_9073243.png';
import CheckinImage2 from '../../assets/check1.png';
import CheckinImage3 from '../../assets/check_14293370.png';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(0px);
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
  height: 60px;
  bottom: 0;
  z-index: 1000;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  box-sizing: border-box;
  border: 1px solid #3498db;
  border-radius: 20px 20px 0px 0px;

  @media (max-width: 768px) {
    padding: 6px 12px;
  }
`;


const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${BackgroundAnimation} 1s infinite alternate;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 50%;
`;

const ImageLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10px;
  font-size: 10px;
  color: white;

  &:hover img {
    transform: scale(1.3);
    width: 30px;
  }

  img {
    width: 30px; 
    height: 30px; 
    transition: transform 0.3s ease;
  }
`;


const Dot = styled.div`
  width: 12px;
  height: 12px;
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

const BottomNavBar = ({ loading }) => {
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
          <ImageLink to="/Menu">
            <img src={CheckinImage1} alt="Home" />Home
          </ImageLink>
          <ImageLink to="/Checkin-aula">
            <img src={CheckinImage3} alt="Check-in em aula" />Check-in
          </ImageLink>
          <ImageLink to="/Treino">
            <img src={CheckinImage2} alt="Treino" />Treino
          </ImageLink>
          <ImageLink to="/Golpes">
            <img src={CheckinImage} alt="Golpes" />Golpes
          </ImageLink>
        </BottomNavContainer>
      )}
    </>
  );
};

export default BottomNavBar;
