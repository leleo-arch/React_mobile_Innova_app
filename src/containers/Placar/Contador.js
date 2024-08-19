import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 2px solid #3498db;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 300px;
  text-align: center;
  box-sizing: border-box;
  margin: 10px auto;
`;

const TimeDisplay = styled.div`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
  letter-spacing: 0.1em;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  @media (min-width: 768px) {
    gap: 15px;
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.40rem;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
`;

const Timer = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [running, setRunning] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [countdownRunning, setCountdownRunning] = useState(false);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('timerState'));
    if (savedState) {
      setTime(savedState.time);
      setRunning(savedState.running);
      setCountdown(savedState.countdown);
      setCountdownRunning(savedState.countdownRunning);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('timerState', JSON.stringify({
      time,
      running,
      countdown,
      countdownRunning
    }));
  }, [time, running, countdown, countdownRunning]);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 0) {
            clearInterval(interval);
            setRunning(false);
            return 0;
          }
          return prevTime - 1000; // Decrease time by 1 second
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    let countdownInterval;
    if (countdownRunning && countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown <= 0) {
            clearInterval(countdownInterval);
            setCountdownRunning(false);
            return 0;
          }
          return prevCountdown - 1000; // Decrease countdown by 1 second
        });
      }, 1000);
    } else {
      clearInterval(countdownInterval);
    }
    return () => clearInterval(countdownInterval);
  }, [countdownRunning, countdown]);

  const formatTime = (time) => {
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
    const minutes = `0${Math.floor((time % 3600000) / 60000)}`.slice(-2);
    const seconds = `0${Math.floor((time % 60000) / 1000)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleSetCountdown = () => {
    const input = prompt("Defina o tempo do temporizador em minutos:", "1");
    if (input !== null) {
      const minutes = parseInt(input, 10);
      if (!isNaN(minutes) && minutes > 0) {
        setCountdown(minutes * 60 * 1000); // Convert minutes to milliseconds
        setCountdownRunning(true);
        setRunning(false); // Stop the timer if running
      }
    }
  };

  const handleStart = () => {
    if (countdown !== null) {
      setRunning(true);
      setCountdownRunning(false);
      setTime(countdown); // Set the time to the countdown value
    }
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setCountdownRunning(false);
    setTime(0);
    setCountdown(null);
  };

  return (
    <TimerContainer>
      <TimeDisplay>{formatTime(countdownRunning ? countdown : time)}</TimeDisplay>
      <ButtonContainer>
        {countdown === null && (
          <Button onClick={handleSetCountdown} disabled={running}>
            Definir Temporizador
          </Button>
        )}
        <Button onClick={handleStart} disabled={running || countdownRunning || countdown === null}>
          Iniciar
        </Button>
        <Button onClick={handlePause} disabled={!running && !countdownRunning}>
          Pausar
        </Button>
        <Button onClick={handleReset}>
          Resetar
        </Button>
      </ButtonContainer>
    </TimerContainer>
  );
};

export default Timer;
