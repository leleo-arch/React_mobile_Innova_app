import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/logoinnocva.png";



const Body = styled.div`
background-color: black;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;


@media only screen and (max-width: 700px) {
 
  height: 145vh;
}

`;

const Imagem = styled.img`
  background-color: black;
  border-radius: 10px;
  height: 150px;



  @media only screen and (max-width: 700px) {
 
   margin-bottom:30px; 
   margin-top: 50px;

}

  @media only screen and (max-width: 600px) {

   margin-bottom:30px; 
   margin-top: 50px;


}


 
`;


const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.9);  background-size: cover;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
border-radius: 25px;
width: 32%;
padding: 20px;
overflow-x: auto;
max-height: 80vh; 

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


  @media only screen and (max-width: 400px) {
  width: 95%; }
  
@media only screen and (max-width: 700px) {
  width: 95%; }


@media only screen and (max-width: 600px) {
  width: 95%;  }

`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
  border-radius: 10px;
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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

`;

const ExerciseList = styled.ul`
  list-style-type: none;
  padding: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 70%;

  
`;

const ExerciseItem = styled.li`
  margin-bottom: 10px;
  color: #555;
  
`;

const Div = styled.li`
  margin-bottom: 20px;
  color: #555;
  display: flex;
  flex-direction:column;



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
    <Body>
    <Imagem alt="img-pessoas" src={logo}/>
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
      <ExerciseList>
        {previousTrainings.map((training, index) => (
          <Div key={index}>
            <div >Data: {training.date}</div>
            <div>
              Exercícios: 
              <li>
                {training.exercises.map((exercise, idx) => (
                  <ExerciseItem key={idx}>{exercise.name} ({exercise.type})</ExerciseItem>
                ))}
              </li>
            </div  >
            <div >Anotações: {training.notes}</div>
          </Div>
        ))}
      </ExerciseList>
    </Container>
    </Body>
  );
};

export default TrainingDayJiuJitsu;
