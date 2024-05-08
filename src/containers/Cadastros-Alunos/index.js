import React, { useState } from "react";
import styled from "styled-components";
import Peoples from "../../assets/logoinnocva.png";

// Estilos reutilizáveis
const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0 auto;
  padding: 20px;
  background-color: black;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  max-height: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 700px) {

  height:100%  }

`;

const Container2 = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);  background-size: opacity;
  border-radius: 25px;
  width: 40%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 700px) {
  width: 95%;
  height:100vh  }

`;


const Container3 = styled.div`
overflow-y: auto; /* Adicionando rolagem vertical */
  max-height: 400px; /* Definindo a altura máxima */
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
  
  @media only screen and (max-width: 700px) {
  height: 70%; 
  }
`;


const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Imagem = styled.img`

width: 20%; 


  @media only screen and (max-width: 700px) {
  width: 50%; 
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding: 10px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  flex-basis: calc(50% - 10px);
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 20px;
  background-color: ${props => props.bgColor || "#007bff"};
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const StudentList = styled.div`
  margin-top: 20px;
`;

const StudentItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c82333;
  }
`;

const JiuJitsuPage = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "João", belt: "Branca", degrees: 1, attendance: 80, age: 25 },
    { id: 2, name: "Maria", belt: "Azul", degrees: 2, attendance: 90, age: 30 },
    { id: 3, name: "Pedro", belt: "Roxa", degrees: 3, attendance: 75, age: 28 },
  ]);

  const [newStudent, setNewStudent] = useState({
    name: "",
    belt: "Branca",
    degrees: 1,
    attendance: 0,
    age: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const addStudent = () => {
    if (!newStudent.name || newStudent.degrees < 1 || newStudent.age < 1) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }
    const id = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    const student = { id, ...newStudent };
    setStudents([...students, student]);
    setNewStudent({ name: "", belt: "Branca", degrees: 1, attendance: 0, age: 0 });
  };

  const deleteStudent = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este aluno?")) {
      setStudents(students.filter(student => student.id !== id));
    }
  };

  const editStudent = (id, field, value) => {
    setStudents(students.map(student => {
      if (student.id === id) {
        return { ...student, [field]: value };
      }
      return student;
    }));
  };

  return (
    <Container>
   <Imagem alt="img-pessoas" src={Peoples}/>

    <Container2> 
    <Heading>Controle de Presença e Evolução</Heading>
    <FormContainer>
        <InputGroup>
          <Label>Nome:</Label>
          <Input
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleInputChange}
            placeholder="Nome do Aluno"
          />
        </InputGroup>
        <InputGroup>
          <Label>Faixa:</Label>
          <Select
            name="belt"
            value={newStudent.belt}
            onChange={handleInputChange}
          >
            <option value="Branca">Branca</option>
            <option value="Azul">Azul</option>
            <option value="Roxa">Roxa</option>
            <option value="Marrom">Marrom</option>
            <option value="Preta">Preta</option>
            <option value="Vermelha">Vermelha</option>
            <option value="Coral">Coral</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>Graus:</Label>
          <Input
            type="number"
            name="degrees"
            value={newStudent.degrees}
            onChange={handleInputChange}
            placeholder="Graus"
          />
        </InputGroup>
        <InputGroup>
          <Label>Frequência (%):</Label>
          <Input
            type="number"
            name="attendance"
            value={newStudent.attendance}
            onChange={handleInputChange}
            placeholder="Frequência (%)"
          />
        </InputGroup>
        <InputGroup>
          <Label>Idade:</Label>
          <Input
            type="number"
            name="age"
            value={newStudent.age}
            onChange={handleInputChange}
            placeholder="Idade"
          />
        </InputGroup>
        <Button onClick={addStudent}>Adicionar Aluno</Button>
      </FormContainer>
   
    <Container3> 
      <StudentList>
        {students.map(student => (
          <StudentItem key={student.id}>
            <InputGroup>
              <Label>Nome:</Label>
              <Input
                type="text"
                value={student.name}
                onChange={(e) => editStudent(student.id, "name", e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>Faixa:</Label>
              <Select
                value={student.belt}
                onChange={(e) => editStudent(student.id, "belt", e.target.value)}
              >
                <option value="Branca">Branca</option>
                <option value="Azul">Azul</option>
                <option value="Roxa">Roxa</option>
                <option value="Marrom">Marrom</option>
                <option value="Preta">Preta</option>
                <option value="Vermelha">Vermelha</option>
                <option value="Coral">Coral</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Label>Graus:</Label>
              <Input
                type="number"
                value={student.degrees}
                onChange={(e) => editStudent(student.id, "degrees", parseInt(e.target.value))}
              />
            </InputGroup>
            <InputGroup>
              <Label>Frequência (%):</Label>
              <Input
                type="number"
                value={student.attendance}
                onChange={(e) => editStudent(student.id, "attendance", parseInt(e.target.value))}
              />
            </InputGroup>
            <InputGroup>
              <Label>Idade:</Label>
              <Input
                type="number"
                value={student.age}
                onChange={(e) => editStudent(student.id, "age", parseInt(e.target.value))}
              />
            </InputGroup>
            <DeleteButton onClick={() => deleteStudent(student.id)}>Excluir</DeleteButton>
          </StudentItem>
        ))}
      </StudentList>
        </Container3>
       </Container2>
    </Container>
  );
};

export default JiuJitsuPage;
