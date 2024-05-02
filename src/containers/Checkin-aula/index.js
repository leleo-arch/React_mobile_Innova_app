import React, { useState } from 'react';
import styled from 'styled-components';
import Peoples from "../../assets/logoinnocva.png";
import Calendar from './Calendar';
// Componentes estilizados
const Container = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);  background-size: cover;
background-size: cover;
display: flex;
border-radius:20px;
flex-direction: column;
align-items: center;
gap: 20px;

@media only screen and (max-width: 600px) {
  width: 90%;  }
`;

const Div = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);  background-size: opacity;
  border-radius: 25px;
  width: 95%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
  color: #333;
  font-size: 20px;
  margin-bottom: 20px;
  margin-left: 82px;

`;

const ClassListContainer = styled.div`
  overflow-y: auto; /* Adicionando rolagem vertical */
  max-height: 300px; /* Definindo a altura máxima */
  margin-top: 40px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;

  /* Estilos da barra de rolagem */
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

const ClassList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction:column;
  align-items: center;
  background: linear-gradient(rgba(32, 10, 43, 0.69) 87.68%);
  
`;

const ClassItem = styled.li`
  margin-bottom: 10px;
  color: #333;
  text-align: center;
  font-family: "Roboto", sans-serif;
  margin-bottom: 5px; 
  padding: 10px;
  width: 90%;
  background-color: ${({ selected }) => (selected ? 'rgba(0, 123, 255, 0.3)' : 'rgba(255, 255, 255, 0.8)')};
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ selected }) => (selected ? 'rgba(0, 123, 255, 0.5)' : 'rgba(0, 123, 255, 0.1)')};
  }
  transition: transform 0.3s ease; /* Adiciona uma transição suave */
  &:hover {
    transform: translateY(-5px); /* Move para cima quando o mouse passa por cima */
  }
`;

const ClassInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const CheckBox = styled.input`
  margin-right: 5px;
  background-color: rgb(255, 255, 255);
  border-radius:20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.25);
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

`;

const Button2 = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 175px;


`;

const Divcontainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
    background-color: black;
  width: 100%;

@media only screen and (max-width: 600px) {
  height: 150vh;  }

  @media only screen and (max-width: 400px) {
  height: 150vh;  }


`;


const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 25px;
`;

const Imagem = styled.img`
  height: 150px;
  margin-bottom: 50px;
`;

// Função para obter todas as segundas, quartas e sexta-feira do ano
const getWeekdaysOfYear = (year) => {
  const weekdays = [];
  for (let month = 0; month < 12; month++) {
    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, month, day);
      if (date.getFullYear() !== year) {
        break;
      }
      const dayOfWeek = date.getDay();
      if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 6) {
        weekdays.push(date.toLocaleDateString('en-US'));
      }
    }
  }
  return weekdays;
};

const JiuJitsuCheckIn = () => {
  const [classes, setClasses] = useState(getWeekdaysOfYear(2024).map((date, index) => ({
    id: index + 1,
    title: `Aula ${index + 1}`,
    date: date,
    time: '19:00',
    selected: false
  })));

  const handleToggleSelection = (id) => {
    setClasses(classes.map(cls => cls.id === id ? { ...cls, selected: !cls.selected } : cls));
  };

  const handleCheckInAll = () => {
    setClasses(classes.map(cls => ({ ...cls, selected: true })));
  };
  
  const handleCheckInAll2 = () => {
    setClasses(classes.map(cls => ({ ...cls, selected: false })));
  };

  const selectedCount = classes.filter(cls => cls.selected).length;

  return (
    <Divcontainer>
      <Imagem alt="img-pessoas" src={Peoples}/>
      <Container>
        <Calendar /> {}

        <ClassListContainer>
          <ClassList>
            {classes.map(cls => (
              <ClassItem 
                key={cls.id} 
                onClick={() => handleToggleSelection(cls.id)}
                selected={cls.selected}
              >
                <ClassInfo>
                  <div>
                    <div>{cls.title}</div>
                    <div>Data: {cls.date}</div>
                    <div>Horário: {cls.time}</div>
                  </div>
                </ClassInfo>
              </ClassItem>
            ))}
          </ClassList>
        </ClassListContainer>
        <Div>
        <Button to="/Menu"Ver Menu> Voltar Menu</Button>
        <Button onClick={handleCheckInAll}>Fazer Check-in em Todas as Aulas</Button>
        <Button onClick={handleCheckInAll2}>Retirar Check-in</Button>
      
        <P>{selectedCount} Aulas Comparecidas(s)</P>
     

        </Div>
      </Container>
     </Divcontainer>
  );
};

export default JiuJitsuCheckIn;
