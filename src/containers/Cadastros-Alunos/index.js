import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Peoples from "../../assets/logoinnocva.png";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
`;

const StyledContainer = styled.div`
  padding: 20px;
  border-radius: 25px;
  width: 90%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  overflow-y: auto;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Imagem = styled.img`
  width: 20%;
  margin-bottom: 20px;
  border-radius: 20px;

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
  padding: 20px;
  background-color: #e9ecef;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.bgColor || "#007bff"};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const StudentList = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const StudentItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const JiuJitsuPage = () => {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students');
    return savedStudents ? JSON.parse(savedStudents) : [
      { id: 1, name: "João", belt: "Branca", degrees: 1, attendance: 80, age: 25 },
    ];
  });

  const [newStudent, setNewStudent] = useState({
    name: "",
    belt: "Branca",
    degrees: 1,
    attendance: 0,
    age: 0,
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const validateStudent = () => {
    const { name, degrees, attendance, age } = newStudent;
    if (!name.trim() || degrees < 1 || degrees > 6 || attendance < 0 || attendance > 100 || age < 1) {
      alert("Por favor, preencha todos os campos corretamente.");
      return false;
    }
    return true;
  };

  const addStudent = () => {
    if (!validateStudent()) return;

    const id = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    const student = { id, ...newStudent, degrees: parseInt(newStudent.degrees), attendance: parseInt(newStudent.attendance), age: parseInt(newStudent.age) };
    setStudents([...students, student]);
    setNewStudent({ name: "", belt: "Branca", degrees: 1, attendance: 0, age: 0 });
  };

  const deleteStudent = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este aluno?")) {
      setStudents(students.filter((student) => student.id !== id));
    }
  };

  const editStudent = (id, field, value) => {
    setStudents(
      students.map((student) => (student.id === id ? { ...student, [field]: value } : student))
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Imagem alt="img-pessoas" src={Peoples} />
      <Heading>Controle de Presença e Evolução</Heading>
      <FormContainer>
        <InputGroup>
          <Label htmlFor="name">Nome:</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleInputChange}
            placeholder="Nome do Aluno"
            aria-label="Nome do Aluno"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="belt">Faixa:</Label>
          <Select
            id="belt"
            name="belt"
            value={newStudent.belt}
            onChange={handleInputChange}
            aria-label="Faixa do Aluno"
          >
            {["Branca", "Azul", "Roxa", "Marrom", "Preta"].map((belt) => (
              <option key={belt} value={belt}>
                {belt}
              </option>
            ))}
          </Select>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="degrees">Graus:</Label>
          <Input
            id="degrees"
            type="number"
            name="degrees"
            value={newStudent.degrees}
            onChange={handleInputChange}
            placeholder="Graus"
            aria-label="Graus do Aluno"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="attendance">Frequência (%):</Label>
          <Input
            id="attendance"
            type="number"
            name="attendance"
            value={newStudent.attendance}
            onChange={handleInputChange}
            placeholder="Frequência (%)"
            aria-label="Frequência do Aluno"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="age">Idade:</Label>
          <Input
            id="age"
            type="number"
            name="age"
            value={newStudent.age}
            onChange={handleInputChange}
            placeholder="Idade"
            aria-label="Idade do Aluno"
          />
        </InputGroup>
        <Button onClick={addStudent}>Adicionar Aluno</Button>
      </FormContainer>
      <StyledContainer>
        <Heading>Lista de Alunos</Heading>
        <SearchInput
          type="text"
          placeholder="Pesquisar alunos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Pesquisar alunos"
        />
        <StudentList>
          {filteredStudents.map((student) => (
            <StudentItem key={student.id}>
              <InputGroup>
                <Label htmlFor={`name-${student.id}`}>Nome:</Label>
                <Input
                  id={`name-${student.id}`}
                  type="text"
                  value={student.name}
                  onChange={(e) => editStudent(student.id, "name", e.target.value)}
                  aria-label={`Nome do Aluno ${student.name}`}
                />
              </InputGroup>
              <InputGroup>
                <Label htmlFor={`belt-${student.id}`}>Faixa:</Label>
                <Select
                  id={`belt-${student.id}`}
                  value={student.belt}
                  onChange={(e) => editStudent(student.id, "belt", e.target.value)}
                  aria-label={`Faixa do Aluno ${student.name}`}
                >
                  {["Branca", "Azul", "Roxa", "Marrom", "Preta"].map((belt) => (
                    <option key={belt} value={belt}>
                      {belt}
                    </option>
                  ))}
                </Select>
              </InputGroup>
              <InputGroup>
                <Label htmlFor={`degrees-${student.id}`}>Graus:</Label>
                <Input
                  id={`degrees-${student.id}`}
                  type="number"
                  value={student.degrees}
                  onChange={(e) => editStudent(student.id, "degrees", parseInt(e.target.value))}
                  aria-label={`Graus do Aluno ${student.name}`}
                />
              </InputGroup>
              <InputGroup>
                <Label htmlFor={`attendance-${student.id}`}>Frequência (%):</Label>
                <Input
                  id={`attendance-${student.id}`}
                  type="number"
                  value={student.attendance}
                  onChange={(e) => editStudent(student.id, "attendance", parseInt(e.target.value))}
                  aria-label={`Frequência do Aluno ${student.name}`}
                />
              </InputGroup>
              <InputGroup>
                <Label htmlFor={`age-${student.id}`}>Idade:</Label>
                <Input
                  id={`age-${student.id}`}
                  type="number"
                  value={student.age}
                  onChange={(e) => editStudent(student.id, "age", parseInt(e.target.value))}
                  aria-label={`Idade do Aluno ${student.name}`}
                />
              </InputGroup>
              <DeleteButton onClick={() => deleteStudent(student.id)}>Excluir</DeleteButton>
            </StudentItem>
          ))}
        </StudentList>
      </StyledContainer>
    </Container>
  );
};

export default JiuJitsuPage;

