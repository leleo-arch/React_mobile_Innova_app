import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  width: 60%;
  margin: 50px auto;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 20px;
  margin-top: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
`;

const ExerciseList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ExerciseItem = styled.li`
  margin-bottom: 10px;
  color: #555;
`;

const TrainingDayJiuJitsu = () => {
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [notes, setNotes] = useState('');
  const [previousTrainings, setPreviousTrainings] = useState([]);

  const handleAddExercise = () => {
    if (exerciseName && exerciseType) {
      setExercises([...exercises, { name: exerciseName, type: exerciseType }]);
      setExerciseName('');
      setExerciseType('');
    }
  };

  const handleDeleteExercise = (index) => {
    const updatedExercises = [...exercises];
    updatedExercises.splice(index, 1);
    setExercises(updatedExercises);
  };

  const handleSaveNotes = () => {
    console.log('Anotações salvas:', notes);
  };

  const handleSaveTraining = () => {
    const newTraining = {
      date: new Date().toLocaleDateString(),
      exercises: exercises,
      notes: notes
    };
    setPreviousTrainings([...previousTrainings, newTraining]);
    setExercises([]);
    setExerciseName('');
    setExerciseType('');
    setNotes('');
  };

  return (
    <Container>
      <Title>Treino do Dia - Jiu-Jitsu</Title>
      <SectionTitle>Adicionar Exercícios</SectionTitle>
      <Input 
        type="text" 
        value={exerciseName} 
        onChange={(e) => setExerciseName(e.target.value)} 
        placeholder="Nome do Exercício" 
      />
      <Select 
        value={exerciseType} 
        onChange={(e) => setExerciseType(e.target.value)}
      >
        <option value="">Selecione o Tipo de Exercício</option>
        <option value="aquecimento">Aquecimento</option>
        <option value="técnico">Técnico</option>
        <option value="drill">Drill</option>
        <option value="sparring">Sparring</option>
      </Select>
      <Button onClick={handleAddExercise}>Adicionar Exercício</Button>
      <SectionTitle>Exercícios do Treino</SectionTitle>
      <ExerciseList>
        {exercises.map((exercise, index) => (
          <ExerciseItem key={index}>
            {exercise.name} ({exercise.type})
            <Button onClick={() => handleDeleteExercise(index)}>Excluir</Button>
          </ExerciseItem>
        ))}
      </ExerciseList>
      <SectionTitle>Anotações</SectionTitle>
      <Input 
        type="text" 
        value={notes} 
        onChange={(e) => setNotes(e.target.value)} 
        placeholder="Digite suas anotações aqui" 
      />
      <Button onClick={handleSaveNotes}>Salvar Anotações</Button>
      <Button onClick={handleSaveTraining}>Salvar Treino</Button>
      <SectionTitle>Histórico de Treinos</SectionTitle>
      <ul>
        {previousTrainings.map((training, index) => (
          <li key={index}>
            <div>Data: {training.date}</div>
            <div>
              Exercícios: 
              <ul>
                {training.exercises.map((exercise, idx) => (
                  <li key={idx}>{exercise.name} ({exercise.type})</li>
                ))}
              </ul>
            </div>
            <div>Anotações: {training.notes}</div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TrainingDayJiuJitsu;
