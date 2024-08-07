import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from '../Nave/index'; // Certifique-se de que o caminho para o NavBar esteja correto

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: black;
`;

const Container = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 25px;
  width: 32%;
  padding: 20px;
  overflow-y: auto;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 700px) {
    width: 95%;
  }
`;


const SectionTitle = styled.h2`
  color: #fff;
  font-size: 20px;
  margin-top: 10px;
`;

const Input = styled.input`
  margin-bottom: 1px;
  padding: 8px;
  width: 100%;
  border-radius: 25px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Select = styled.select`
  margin-bottom: 1px;
  padding: 8px;
  width: 100%;
  border-radius: 25px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: rgba(0, 123, 255, 0.1);
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: 0px 2px 4px white;

  &:hover {
    background-color: rgba(0, 123, 255, 0.1);;
  }
`;

const DeleteButton = styled(Button)`
    background-color: rgba(0, 123, 255, 0.1);;

  margin-bottom: 25px;
  margin-top: 20px;

  &:hover {
    background-color: rgba(0, 123, 255, 0.1);;
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
  margin-bottom: 1px;
  color: #fff;
  background-color: rgba(0, 123, 255, 0.1);;
  padding: 10px;
  border: 2px solid white;

  border-radius: 25px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const TrainingDiv = styled.div`
  margin-bottom: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 123, 255, 0.1);;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid white

`;

const SearchInput = styled.input`
  margin-bottom: 20px;
  padding: 8px;
  width: 100%;
  border-radius: 25px;
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
          <NavBar />
      </Container>
    </Body>
  );
};

export default TrainingDayJiuJitsu;
