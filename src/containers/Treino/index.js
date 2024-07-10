import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from "../../assets/logoinnocva.png";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Imagem = styled.img`
  background-color: black;
  border-radius: 10px;
  height: 150px;
  margin-bottom: 30px;

  @media only screen and (max-width: 700px) {
    margin-bottom: 30px;
    margin-top: 50px;
  }
`;

const Container = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 25px;
  width: 32%;
  padding: 20px;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 700px) {
    width: 95%;
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 30px;
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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

const ExerciseList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin-bottom: 20px;
`;

const ExerciseItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: #555;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const TrainingDiv = styled.div`
  margin-bottom: 20px;
  color: #555;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  margin-bottom: 20px;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
// Supondo que os componentes estilizados estejam definidos/importados corretamente
// Isso inclui Body, Imagem, Container, Title, SectionTitle, Input, Select, Button, ExerciseList,
// ExerciseItem, DeleteButton, SearchInput, TrainingDiv

const TrainingDayJiuJitsu = () => {
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [notes, setNotes] = useState('');
  const [previousTrainings, setPreviousTrainings] = useState(() => {
    const savedTrainings = localStorage.getItem('previousTrainings');
    return savedTrainings ? JSON.parse(savedTrainings) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('previousTrainings', JSON.stringify(previousTrainings));
  }, [previousTrainings]);

  const handleAddExercise = () => {
    if (exerciseName && exerciseType) {
      if (!exercises.find(ex => ex.name === exerciseName && ex.type === exerciseType)) {
        setExercises([...exercises, { name: exerciseName, type: exerciseType }]);
        setExerciseName('');
        setExerciseType('');
      } else {
        alert('Este exercício já foi adicionado.');
      }
    }
  };

  const handleDeleteExercise = (index) => {
    const updatedExercises = exercises.filter((_, i) => i !== index);
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

  const handleDeleteTraining = (index) => {
    if (window.confirm("Tem certeza que deseja excluir este treino?")) {
      const updatedTrainings = previousTrainings.filter((_, i) => i !== index);
      setPreviousTrainings(updatedTrainings);
    }
  };

  const handleDeleteAllTrainings = () => {
    if (window.confirm("Tem certeza que deseja excluir todo o histórico de treinos?")) {
      setPreviousTrainings([]);
    }
  };

  const filteredTrainings = previousTrainings.filter(training =>
    training.exercises.some(exercise =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Body>
      <Imagem alt="Logo Innocva" src={logo} />
      <Title>Treino do Dia - Jiu-Jitsu</Title>
      <Container>
    
        <SectionTitle>Adicionar Exercícios:</SectionTitle>
        <Input 
          type="text" 
          value={exerciseName} 
          onChange={(e) => setExerciseName(e.target.value)} 
          placeholder="Nome do Exercício"
          aria-label="Nome do Exercício" 
        />
        <Select 
          value={exerciseType} 
          onChange={(e) => setExerciseType(e.target.value)}
          aria-label="Tipo de Exercício"
        >
          <option value="">Selecione o Tipo de Exercício</option>
          <option value="aquecimento">Aquecimento</option>
          <option value="técnico">Técnico</option>
          <option value="drill">Drill</option>
          <option value="sparring">Sparring</option>
        </Select>
        <Button onClick={handleAddExercise}>Adicionar Exercício</Button>
        <SectionTitle>Exercícios do Treino:</SectionTitle>
        <ExerciseList>
          {exercises.map((exercise, index) => (
            <ExerciseItem key={index}>
              {exercise.name} ({exercise.type})
              <DeleteButton onClick={() => handleDeleteExercise(index)}>Excluir</DeleteButton>
            </ExerciseItem>
          ))}
        </ExerciseList>
        <SectionTitle>Anotações:</SectionTitle>
        <Input 
          type="text" 
          value={notes} 
          onChange={(e) => setNotes(e.target.value)} 
          placeholder="Digite suas anotações aqui"
          aria-label="Anotações" 
        />
        <Button onClick={handleSaveNotes}>Salvar Anotações</Button>
        <Button onClick={handleSaveTraining}>Salvar Treino</Button>
        <SectionTitle>Histórico de Treinos</SectionTitle>
        <SearchInput 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar no histórico de treinos..."
          aria-label="Pesquisar no histórico de treinos"
        />
        <ExerciseList>
          {filteredTrainings.map((training, index) => (
            <TrainingDiv key={index}>
              <div>Data: {training.date}</div>
              <div>
                Exercícios: 
                <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                  {training.exercises.map((exercise, idx) => (
                    <li key={idx} style={{ marginBottom: '5px' }}>{exercise.name} ({exercise.type})</li>
                  ))}
                </ul>
              </div>
              <div>Anotações: {training.notes}</div>
              <DeleteButton onClick={() => handleDeleteTraining(index)}>Excluir</DeleteButton>
            </TrainingDiv>
          ))}
        </ExerciseList>
        {previousTrainings.length > 0 && (
          <DeleteButton onClick={handleDeleteAllTrainings}>Excluir Todo o Histórico</DeleteButton>
        )}
      </Container>
    </Body>
  );
};

export default TrainingDayJiuJitsu;
