import React, { useState } from 'react';
import styled from 'styled-components';
import Nave from '../Nave';
import Cont from '../Placar/Contador';



const Body = styled.body `
background-color: black;
width: 100%;
height: 110vh;

`;

const ScoreboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 15px;
  background: #000; /* Black background */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7);
  width: 90%;
  height: auto;
  max-width: 600px;
  text-align: center;
  box-sizing: border-box;
  margin: 0px auto;


  @media (min-width: 768px) {
    padding: 30px;
    max-width: 600px;
    height: 100vh;
  }

  @media (min-width: 1024px) {
    padding: 40px;
    max-width: 800px;
    height: 100vh;

  }
`;

const ScoreboardTitle = styled.h1`
  font-size: 1.5rem;
  color: #3498db;
  margin-bottom: 10px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Instructions = styled.p`
  font-size: 0.875rem;
  color: #ecf0f1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const ScoreRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 10px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
  }
`;

const ScoreLabel = styled.div`
  font-size: 1.25rem;
  color: #ecf0f1;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;

const ScoreValue = styled.div`
  font-size: 1.75rem;
  color: #3498db;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const ScoreButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;

  @media (min-width: 768px) {
    gap: 15px;
    margin-top: 0;
  }
`;

const ScoreButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 60px;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(1);
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
`;

const ResetButton = styled.button`
  background-color: #2980b9;
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 80px;

  &:hover {
    background-color: #1f6f8b;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(1);
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background: #95a5a6;
  border-radius: 5px;
  margin-top: 20px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${props => props.width}%;
  background: #3498db;
  transition: width 0.3s ease;
`;

const Scoreboard = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const totalScore = score1 + score2;

  return (
    <Body>
    
    <ScoreboardContainer>
      <ScoreboardTitle>Placar dos Competidores</ScoreboardTitle>
      <Instructions>Use os botões para adicionar ou remover pontos. O botão "Resetar Placar" zera todos os pontos.</Instructions>
       <Cont></Cont>
      <ScoreRow>
        <ScoreLabel>Competidor 1:</ScoreLabel>
        <ScoreValue>{score1}</ScoreValue>
        <ScoreButtonContainer>
          <ScoreButton onClick={() => setScore1(score1 + 1)}>+</ScoreButton>
          <ScoreButton 
            onClick={() => setScore1(score1 - 1)} 
            disabled={score1 === 0}
          >
            -
          </ScoreButton>
        </ScoreButtonContainer>
      </ScoreRow>
      <ScoreRow>
        <ScoreLabel>Competidor 2:</ScoreLabel>
        <ScoreValue>{score2}</ScoreValue>
        <ScoreButtonContainer>
          <ScoreButton onClick={() => setScore2(score2 + 1)}>+</ScoreButton>
          <ScoreButton 
            onClick={() => setScore2(score2 - 1)} 
            disabled={score2 === 0}
          >
            -
          </ScoreButton>
        </ScoreButtonContainer>
      </ScoreRow>
      <ProgressBarContainer>
        <ProgressBar width={(totalScore === 0 ? 0 : (score1 / totalScore) * 100)} />
        <ProgressBar width={(totalScore === 0 ? 0 : (score2 / totalScore) * 100)} />
      </ProgressBarContainer>
      <ResetButton onClick={() => { setScore1(0); setScore2(0); }}>
        Resetar Placar
      </ResetButton>
      <Nave />
    </ScoreboardContainer>
    </Body>
  );
};

export default Scoreboard;
