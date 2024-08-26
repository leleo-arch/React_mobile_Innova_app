import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Peoples from "../../assets/logoinnocva.png";

const Container = styled.div`
  background-color: #f5f5f5;  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const Div3 = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
  width: 60%;
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 600px) {
    width: 95%;
    height: auto;
    margin-bottom: 50px;
  }
`;

const Div2 = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  width: 100%;
  max-height: 430px;
  margin-top: 20px;
  overflow-y: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 28px;
  font-family: 'Arial', sans-serif;
  margin-bottom: 20px;
  text-align: center;
`;

const MonthlyChallengeSection = styled.div`
  margin-bottom: 20px;
`;

const MonthlyChallengeTitle = styled.h2`
  color: #333;
  font-size: 22px;
  margin-bottom: 15px;
`;

const ChallengeList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ChallengeItem = styled.li`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  ${({ completed }) =>
    completed &&
    css`
      animation: bounce 0.5s forwards;
    `}

  @keyframes bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-5px);
    }
  }
`;

const ChallengeTitle = styled.h3`
  color: #007bff;
  font-size: 18px;
  margin-bottom: 10px;
`;

const ChallengeDescription = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Reward = styled.p`
  color: #28a745;
  font-weight: bold;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: ${({ completed }) => (completed ? '#28a745' : '#007bff')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${({ completed }) => (completed ? 'not-allowed' : 'pointer')};
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ completed }) => (completed ? '#218838' : '#0056b3')};
  }
`;

const Progress = styled.div`
  margin-top: 10px;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: ${({ completed }) => (completed ? '#28a745' : '#007bff')};
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
`;

const CompletionMessage = styled.span`
  font-weight: bold;
  color: #28a745;
`;

const GlobalProgressBar = styled.div`
  margin-top: 20px;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const GlobalProgress = styled.div`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: #28a745;
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.div`
  width: 20px;
  height: 20px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #007bff;
  border-radius: 50%;
  animation: ${rotateAnimation} 1s linear infinite;
`;

const Imagem = styled.img`
  height: 150px;
  margin-bottom: 30px;
border-radius: 20px;
`;


const ChallengePage = () => {
  const [monthlyChallenges, setMonthlyChallenges] = useState(() => {
    const savedChallenges = localStorage.getItem('monthlyChallenges');
    return savedChallenges ? JSON.parse(savedChallenges) : [
      {
        month: 'Janeiro',
        challenges: [
          {
            id: 1,
            title: 'Desafio de Técnica',
            description: 'Pratique a técnica de raspagem de guarda durante 30 minutos.',
            reward: '15 pontos no ranking de técnicas.',
            completed: false,
          },
          {
            id: 2,
            title: 'Desafio de Resistência',
            description: 'Realize 50 burpees seguidos, descansando apenas 1 minuto entre cada série.',
            reward: '10 pontos no ranking de resistência.',
            completed: false,
          },
        ],
      },
      {
        month: 'Fevereiro',
        challenges: [
          {
            id: 3,
            title: 'Desafio de Flexibilidade',
            description: 'Alongue-se por 15 minutos após o treino, focando em cada grupo muscular.',
            reward: '20 pontos no ranking de flexibilidade.',
            completed: false,
          },
          {
            id: 4,
            title: 'Desafio de Cardio',
            description: 'Corra 5km em menos de 25 minutos.',
            reward: '15 pontos no ranking de cardio.',
            completed: false,
          },
          {
            id: 5,
            title: 'Desafio de Força',
            description: 'Realize 3 séries de 10 repetições de agachamento com 100% do seu peso corporal.',
            reward: '25 pontos no ranking de força.',
            completed: false,
          },
        ],
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem('monthlyChallenges', JSON.stringify(monthlyChallenges));
  }, [monthlyChallenges]);

  const totalChallenges = monthlyChallenges.reduce((total, month) => total + month.challenges.length, 0);
  const completedChallenges = monthlyChallenges.reduce((total, month) => {
    return (
      total +
      month.challenges.reduce((acc, challenge) => {
        return challenge.completed ? acc + 1 : acc;
      }, 0)
    );
  }, 0);
  const globalProgress = (completedChallenges / totalChallenges) * 100;

  const handleChallengeComplete = (monthIndex, challengeId) => {
    const updatedChallenges = [...monthlyChallenges];
    updatedChallenges[monthIndex].challenges = updatedChallenges[monthIndex].challenges.map((challenge) =>
      challenge.id === challengeId ? { ...challenge, completed: true } : challenge
    );
    setMonthlyChallenges(updatedChallenges);
  };

  return (
    <Container>
      <Imagem alt="img-pessoas" src={Peoples} />

      <Div3>
        <Title>Desafios Mensais de Treino</Title>
    
        <Div2>
        <GlobalProgressBar>
            <GlobalProgress progress={globalProgress} />
          </GlobalProgressBar>
          {monthlyChallenges.map((monthlyChallenge, monthIndex) => (
            <MonthlyChallengeSection key={monthlyChallenge.month}>
              <MonthlyChallengeTitle>
                Desafios de {monthlyChallenge.month} - Concluídos: {monthlyChallenge.challenges.filter((c) => c.completed).length}/{monthlyChallenge.challenges.length}
              </MonthlyChallengeTitle>
              <ChallengeList>
                {monthlyChallenge.challenges.map((challenge) => (
                  <ChallengeItem key={challenge.id} completed={challenge.completed}>
                    <ChallengeTitle>{challenge.title}</ChallengeTitle>
                    <ChallengeDescription>{challenge.description}</ChallengeDescription>
                    <Reward>Recompensa: {challenge.reward}</Reward>
                    <Button
                      onClick={() => handleChallengeComplete(monthIndex, challenge.id)}
                      completed={challenge.completed}
                      disabled={challenge.completed}
                    >
                      {challenge.completed ? <LoadingIcon /> : '\u{2714}'}
                      {challenge.completed ? 'Concluído' : 'Concluir'}
                    </Button>
                    <Progress>
                      <ProgressBar progress={challenge.completed ? 100 : 0} completed={challenge.completed} />
                    </Progress>
                    {challenge.completed && <CompletionMessage>Desafio concluído!</CompletionMessage>}
                  </ChallengeItem>
                ))}
              </ChallengeList>
            </MonthlyChallengeSection>
          ))}
        </Div2>
      </Div3>
    </Container>
  );
};

export default ChallengePage;

