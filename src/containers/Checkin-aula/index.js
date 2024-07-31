import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Peoples from "../../assets/logoinnocva.png";
import Calendar from './Calendar';
import NavBar from '../Nave/index';


// Styled Components
const Container = styled.div`
  padding: 30px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #3498db;
  border: 2px solid white;


  @media only screen and (max-width: 900px) {
    width: 85%;

  }

  @media only screen and (max-width: 600px) {
    width:85%;

  }
`;

const Div = styled.div`
  padding: 20px;
  background-color: black;
  border-radius: 25px;
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 2px solid white;

`;

const ClassListContainer = styled.div`
  overflow-y: auto;
  max-height: 300px;
  margin-top: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  border: 6px solid white;
  border-radius: 20px;


  &::-webkit-scrollbar {
    width: 5px;
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
  flex-direction: column;
  align-items: center;
background-color: black;


`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;

  &:hover {
    background-color: #c82333;
  }
`;

const TimeInput = styled.input`
  width: 90px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ClassItem = styled.li`

  margin-bottom: 10px;
  color: white;
  text-align: center;
  font-family: "Roboto", sans-serif;
  padding: 10px;
  width: 90%;
  background-color: ${({ selected }) => (selected ? '#3498db' : 'black')};
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#3498db' : 'rgba(0, 123, 255, 0.1)')};
    transform: translateY(-5px);
    background: linear-gradient(10deg, #000000, #3498db);

  }
`;


const ClassInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  border: 2px solid white
  ;


  &:hover {
    background-color: #3498db;
  }
`;

const Divcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: black;
  transition: opacity 0.5s ease-in-out;
  

  @media only screen and (max-width: 900px) {
    height: auto;
  }
`;

const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;

  color: white;
`;

const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 23px;
  color: white;
`;

const Imagem = styled.img`
  height: 150px;
  margin-bottom: 50px;
  border-radius: 20px;

  @media only screen and (max-width: 600px) {
    height: 120px;
    margin-bottom: 30px;
  }
`;


// Certifique-se de que todos os componentes personalizados usados aqui estão definidos/importados corretamente.
// Isso inclui Divcontainer, Imagem, Container, Calendar, ClassListContainer, ClassList, ClassItem, ClassInfo, TimeInput, DeleteButton, Button, e P.

const JiuJitsuCheckIn = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [classes, setClasses] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedClasses = localStorage.getItem('jiuJitsuClasses');
        return savedClasses ? JSON.parse(savedClasses) : [];
      } catch (error) {
        console.error('Error reading localStorage:', error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('jiuJitsuClasses', JSON.stringify(classes));
      } catch (error) {
        console.error('Error writing to localStorage:', error);
      }
    }
  }, [classes]);

  const handleToggleSelection = (id) => {
    setClasses(classes.map(cls => cls.id === id ? { ...cls, selected: !cls.selected } : cls));
  };

  const handleCheckInAll = () => {
    setClasses(classes.map(cls => ({ ...cls, selected: true })));
  };

  const handleUncheckAll = () => {
    setClasses(classes.map(cls => ({ ...cls, selected: false })));
  };

  const handleAddClass = () => {
    if (selectedDate) {
      const newClass = {
        id: classes.length + 1,
        title: `Aula ${classes.length + 1}`,
        date: selectedDate.toLocaleDateString('en-US'),
        time: '19:00',
        selected: false
      };
      setClasses([...classes, newClass]);
    }
  };

  const handleDeleteClass = (id) => {
    const confirmed = window.confirm("Você tem certeza que deseja deletar esta aula?");
    if (confirmed) {
      setClasses(classes.filter(cls => cls.id !== id));
    }
  };

  const handleChangeTime = (id, newTime) => {
    setClasses(classes.map(cls => cls.id === id ? { ...cls, time: newTime } : cls));
  };

  const selectedCount = classes.filter(cls => cls.selected).length;

  return (
    
    <Divcontainer>
      <Imagem alt="img-pessoas" src={Peoples} />
      <H1>Controle das minhas aulas</H1>

      <Container>
      <P>Selecione uma data para salvar</P>
        <Calendar onSelectDate={setSelectedDate} />
        <Button onClick={handleAddClass} disabled={!selectedDate}>Salvar Data</Button>
        <P>Datas Salvas:</P>
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
                    <div>
                      Horário:
                      <TimeInput
                        type="time"
                        value={cls.time}
                        onChange={(e) => handleChangeTime(cls.id, e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </div>
                </ClassInfo>
                <DeleteButton onClick={(e) => { e.stopPropagation(); handleDeleteClass(cls.id); }}>
                  Deletar
                </DeleteButton>
              </ClassItem>
            ))}
          </ClassList>
        </ClassListContainer>
        <Div>
        <P>{selectedCount} Aula(s) Comparecida(s)</P>
          <Button onClick={handleCheckInAll}>Fazer Check-in em Todas as Aulas</Button>
          <Button onClick={handleUncheckAll}>Retirar Check-in de Todas as Aulas</Button>
        </Div>
        <NavBar></NavBar>

      </Container>
    </Divcontainer>
  );
};

export default JiuJitsuCheckIn;

