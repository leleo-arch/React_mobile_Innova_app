import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nave from "../Nave";
import Cont from "../Placar/Contador";
import backgroundImg from '../../assets/5.png';  // Importa a imagem de fundo


// Styled Components
const Body = styled.div`
  background-color: black;
  width: 100%;
  min-height: 125vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  gap: 15px;
  overflow-y: auto;
  background-image: url(${backgroundImg});  // Define a imagem de fundo
  background-size: cover;  // Faz com que a imagem cubra todo o contêiner
  background-position: center;  // Centraliza a imagem
  background-repeat: no-repeat;  // Evita que a imagem se repita


  @media (max-width: 380px) {
    padding: 20px;
    max-width: 400px;
    min-height: 170vh;

  }

  @media (max-width: 390px) {
    padding: 20px;
    max-width: 400px;
    min-height: 160vh;

  }
  
`;

const ScoreboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
  width: 120%;
  max-width: 400px;
  text-align: center;
  box-sizing: border-box;
  gap: 20px;

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
  width: 90%;
  margin: 6px 0;
  overflow-x: auto; 
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 24px;
  padding: 23px;
  gap: 25px;

  @media (min-width: 768px) {
    margin: 15px 0;
  }
`;

const ScoreLabel = styled.div`
  font-size: 1rem;
  color: #ecf0f1;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const ScoreValue = styled.div`
  font-size: 1.5rem;
  color: #fff;
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

const ScoreButton2 = styled.button`
  background-color: Black;
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

const SmallButton = styled(ScoreButton)`
  background-color: #e74c3c;
  font-size: 0.75rem;
  padding: 5px 10px;

  &:hover {
    background-color: #c0392b;
  }
`;


const SmallButton2 = styled(ScoreButton)`
  background-color: green;
  font-size: 0.75rem;
  padding: 5px 10px;

  &:hover {
    background-color: green;
  }
`;

const ResetButton = styled(ScoreButton)`
  background-color: #2980b9;
  padding: 10px 20px;
  margin-top: 15px;
  min-width: 70px;

  &:hover {
    background-color: #1f6f8b;
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
`;

const Results = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 10px;
`;

const techniques = [
  { name: "Pegada nas Costas", points: 4 },
  { name: "Montada", points: 4 },
  { name: "Passagem de Guarda", points: 3 },
  { name: "Queda", points: 2 },
  { name: "Raspagem", points: 2 },
  { name: "Joelho na Barriga", points: 2 },
];

const Scoreboard = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [pen1, setPen1] = useState(0);
  const [pen2, setPen2] = useState(0);
  const [pen3, setPen3] = useState(0);
  const [pen4, setPen4] = useState(0);

  // Effect to load state from localStorage
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("scoreboardState"));
    if (savedState) {
      setScore1(savedState.score1);
      setScore2(savedState.score2);
      setPen1(savedState.pen1);
      setPen2(savedState.pen2);
      setPen3(savedState.pen3);
      setPen4(savedState.pen4);
    }
  }, []);

  // Effect to save state to localStorage
  useEffect(() => {
    const stateToSave = {
      score1,
      score2,
      pen1,
      pen2,
      pen3,
      pen4
    };
    localStorage.setItem("scoreboardState", JSON.stringify(stateToSave));
  }, [score1, score2, pen1, pen2, pen3, pen4]);

  const totalScore = score1 + score2;

  const renderTechniqueButtons = (technique, setScore, score) => (
    <ScoreButtonContainer key={technique.name}>
      <ScoreLabel>{technique.name}</ScoreLabel>
      <ScoreButton onClick={() => setScore(score + technique.points)}>
        +{technique.points}
      </ScoreButton>
    </ScoreButtonContainer>
  );

  return (
    <Body>
      <ScoreboardContainer>
        <ScoreboardTitle>Placar de Jiu-Jitsu</ScoreboardTitle>
        <Instructions>
          Adicione ou remova pontos para cada técnica. Registre vantagens e punições.
        </Instructions>
        <Cont />

        <Results>
          <ScoreValue>{score1}</ScoreValue>

          <ScoreButtonContainer>
            <ScoreButton2 onClick={() => setScore1(score1 + 1)}>+</ScoreButton2>
            <ScoreButton2 onClick={() => setScore1(score1 - 1)} disabled={score1 === -100}>
              -
            </ScoreButton2>
          </ScoreButtonContainer>
          <ScoreButtonContainer>
            <SmallButton2 background="green" onClick={() => setPen1(pen1 + 1)}>Van {pen1} </SmallButton2>
            <SmallButton onClick={() => setPen3(pen3 - 1)} disabled={pen3 === -100}>
              Puni {pen3}
            </SmallButton>
          </ScoreButtonContainer>
        </Results>

        <ScoreRow borderColor="#3498db">
          {techniques.map((technique) =>
            renderTechniqueButtons(technique, setScore1, score1)
          )}
        </ScoreRow>

        <Results>
          <ScoreValue>{score2}</ScoreValue>

          <ScoreButtonContainer>
            <ScoreButton2 onClick={() => setScore2(score2 + 1)}>+</ScoreButton2>
            <ScoreButton2 onClick={() => setScore2(score2 - 1)} disabled={score2 === -1000}>
              -
            </ScoreButton2>
          </ScoreButtonContainer>
          <ScoreButtonContainer>
            <SmallButton2 background="green" onClick={() => setPen2(pen2 + 1)}>Van {pen2}</SmallButton2>
            <SmallButton onClick={() => setPen4(pen4 - 1)} disabled={pen4 === -1000}>
              Puni {pen4}
            </SmallButton>
          </ScoreButtonContainer>
        </Results>

        <ScoreRow borderColor="red">
          {techniques.map((technique) =>
            renderTechniqueButtons(technique, setScore2, score2)
          )}
        </ScoreRow>

        <ProgressBarContainer>
          <ProgressBar width={totalScore === 0 ? 0 : (score1 / totalScore) * 100} />
          <ProgressBar width={totalScore === 0 ? 0 : (score2 / totalScore) * 100} />
        </ProgressBarContainer>

        <ResetButton onClick={() => {
          setScore1(0);
          setScore2(0);
          setPen1(0);
          setPen3(0);
          setPen4(0);
          setPen2(0);
        }}>
          Resetar Placar
        </ResetButton>
      </ScoreboardContainer>
      <Nave />
    </Body>
  );
};

export default Scoreboard;
