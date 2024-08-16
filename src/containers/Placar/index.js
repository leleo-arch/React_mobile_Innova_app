import React, { useState } from 'react';
import styled from 'styled-components';
import Nave from '../Nave';
import Cont from '../Placar/Contador';

const Body = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  gap:35px;
`;

const ScoreboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  background: #000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-sizing: border-box;
  gap:30px;

  @media (min-width: 768px) {
    padding: 20px;
    max-width: 500px;
  }

  @media (min-width: 1024px) {
    padding: 25px;
    max-width: 600px;
  }
`;

const ScoreboardTitle = styled.h1`
  font-size: 1.25rem;
  color: #3498db;
  margin-bottom: 10px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;

const Instructions = styled.p`
  font-size: 0.75rem;
  color: #ecf0f1;
  margin-bottom: 15px;
  

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const ScoreRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 8px 0;
  overflow-y: auto;
  
  gap:25px;

  

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 0;
    overflow-x: auto;
  }
`;

const ScoreLabel = styled.div`
  font-size: 1rem;
  color: #ecf0f1;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const ScoreValue = styled.div`
  font-size: 1.5rem;
  color: #3498db;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const ScoreButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 5px;

  @media (min-width: 768px) {
    gap: 10px;
    margin-top: 0;
  }
`;

const ScoreButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.875rem;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 50px;

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
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.875rem;
  margin-top: 15px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 70px;

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
  height: 8px;
  background: red;
  border-radius: 4px;
  margin-top: 15px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  background: #3498db;
  transition: width 0.3s ease;
  overflow: hidden;

`;

const techniques = [
  { name: 'Pegada nas Costas', points: 4 },
  { name: 'Montada', points: 4 },
  { name: 'Passagem de Guarda', points: 3 },
  { name: 'Queda', points: 2 },
  { name: 'Raspagem', points: 2 },
  { name: 'Joelho na Barriga', points: 2 },
];

const Scoreboard = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [adv1, setAdv1] = useState(0);
  const [adv2, setAdv2] = useState(0);
  const [pen1, setPen1] = useState(0);
  const [pen2, setPen2] = useState(0);

  const totalScore = score1 + score2;

  const renderTechniqueButtons = (technique, setScore, score) => (
    <ScoreButtonContainer key={technique.name}>
      <ScoreLabel>{technique.name}</ScoreLabel>
      <ScoreButton onClick={() => setScore(score + technique.points)}>+{technique.points}</ScoreButton>
    </ScoreButtonContainer>
  );

  return (
    <Body>
      <ScoreboardContainer>
        <ScoreboardTitle>Placar de Jiu-Jitsu</ScoreboardTitle>
        <Instructions>Adicione ou remova pontos para cada técnica. Registre vantagens e punições.</Instructions>
        <Cont></Cont>
        <ScoreRow>
          <ScoreLabel>Competidor 1:</ScoreLabel>
          <ScoreValue>{score1}</ScoreValue>
          {techniques.map((tech) => renderTechniqueButtons(tech, setScore1, score1))}
          <ScoreButtonContainer>
            <ScoreLabel>Vantagem:</ScoreLabel>
            <ScoreButton onClick={() => setAdv1(adv1 + 1)}>+1</ScoreButton>
            <ScoreLabel>{adv1}</ScoreLabel>
          </ScoreButtonContainer>
          <ScoreButtonContainer>
            <ScoreLabel>Punição:</ScoreLabel>
            <ScoreButton onClick={() => setPen1(pen1 + 1)}>+1</ScoreButton>
            <ScoreLabel>{pen1}</ScoreLabel>
          </ScoreButtonContainer>
        </ScoreRow>

        <ScoreRow>
          <ScoreLabel>Competidor 2:</ScoreLabel>
          <ScoreValue>{score2}</ScoreValue>
          {techniques.map((tech) => renderTechniqueButtons(tech, setScore2, score2))}
          <ScoreButtonContainer>
            <ScoreLabel>Vantagem:</ScoreLabel>
            <ScoreButton onClick={() => setAdv2(adv2 + 1)}>+1</ScoreButton>
            <ScoreLabel>{adv2}</ScoreLabel>
          </ScoreButtonContainer>
          <ScoreButtonContainer>
            <ScoreLabel>Punição:</ScoreLabel>
            <ScoreButton onClick={() => setPen2(pen2 + 1)}>+1</ScoreButton>
            <ScoreLabel>{pen2}</ScoreLabel>
          </ScoreButtonContainer>
        </ScoreRow>

        <ProgressBarContainer>
          <ProgressBar width={totalScore === 0 ? 0 : (score1 / totalScore) * 100} />
          <ProgressBar width={totalScore === 0 ? 0 : (score2 / totalScore) * 100} />
        </ProgressBarContainer>
        <ResetButton
          onClick={() => {
            setScore1(0);
            setScore2(0);
            setAdv1(0);
            setAdv2(0);
            setPen1(0);
            setPen2(0);
          }}
        >
          Resetar Placar
        </ResetButton>
        <Nave />
      </ScoreboardContainer>
      </Body>
        );
      };

export default Scoreboard;