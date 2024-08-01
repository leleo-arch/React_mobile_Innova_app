// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import NavBar from '../Nave/index'; 

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1c1c1c;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    overflow: hidden; 
  }
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 3px solid #3498db;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7);
  width: 90%;
  max-width: 600px;
  text-align: center;
  box-sizing: border-box;
  margin-left: 19px;

  @media (min-width: 768px) {
    padding: 0px;
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    padding: 40px;
    max-width: 800px;
  }
`;

const TimeDisplay = styled.div`
  font-size: 25px;
  color: #3498db;
  margin-bottom: 20px;
  letter-spacing: 0.1em;
  color: white;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 15px;
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [countdownRunning, setCountdownRunning] = useState(false);
  const intervalRef = useRef(null);
  const countdownRef = useRef(null);
  const alarmRef = useRef(new Audio('/alarm.mp3'));

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  useEffect(() => {
    if (countdownRunning) {
      countdownRef.current = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown <= 0) {
            clearInterval(countdownRef.current);
            setCountdownRunning(false);
            alarmRef.current.play(); 
            return 0;
          }
          return prevCountdown - 1000;
        });
      }, 1000);
    } else {
      clearInterval(countdownRef.current);
    }
    return () => clearInterval(countdownRef.current);
  }, [countdownRunning]);

  const formatTime = (time) => {
    const getMilliseconds = `00${Math.floor(time % 1000 / 10)}`.slice(-2);
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(minutes / 60)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  const formatCurrentTime = (date) => {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatCountdown = (countdown) => {
    if (countdown === null) return '00:00:00';
    const seconds = Math.floor(countdown / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(minutes / 60)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const handleSetCountdown = () => {
    const input = prompt("Defina o tempo do temporizador em minutos:", "1");
    if (input !== null) {
      const minutes = parseInt(input, 10);
      if (!isNaN(minutes)) {
        setCountdown(minutes * 60 * 1000);
        setCountdownRunning(true);
      }
    }
  };

  return (
    <>
      <GlobalStyle />
      <TimerContainer>
        <TimeDisplay>Relógio: {formatCurrentTime(currentTime)}</TimeDisplay>
        <TimeDisplay>Cronômetro: {formatTime(time)}</TimeDisplay>
        <TimeDisplay>Temporizador: {formatCountdown(countdown)}</TimeDisplay>
        <ButtonContainer>
          <Button onClick={() => setRunning(true)}>Iniciar Cronômetro</Button>
          <Button onClick={() => setRunning(false)}>Pausar Cronômetro</Button>
          <Button onClick={() => { setRunning(false); setTime(0); }}>Resetar Cronômetro</Button>
          <Button onClick={handleSetCountdown}>Definir Temporizador</Button>
          <Button onClick={() => setCountdownRunning(false)}>Parar Temporizador</Button>
        </ButtonContainer>
        <NavBar />
      </TimerContainer>
    </>
  );
};

export default Timer;
