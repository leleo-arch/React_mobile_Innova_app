import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { FaSearch, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import logo from "../../assets/logoinnocva.png"; // Certifique-se de que o caminho do logo está correto

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #e9ecef;
  font-family: 'Arial', sans-serif;
`;

const Imagem = styled.img`
  height: 100px;
  margin-bottom: 20px;
  border-radius: 20px;
  @media only screen and (max-width: 700px) {
    margin-top: 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
  width: 80%;
  max-width: 800px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 700px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  color: #343a40;
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px 0 0 5px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const MoveListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const MoveItemContainer = styled.li`
  margin-bottom: 20px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
align-items: center;
  &:hover {
    transform: scale(1.02);
  }
`;

const MoveHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const MoveName = styled.h2`
  margin: 0;
  color: #495057;
`;

const MoveDescription = styled.p`
  color: #6c757d;
  margin: 10px 0 0;
`;

const MoveImage = styled.link`
  max-width: 100%;
  border-radius: 5px;
  margin-top: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const FormInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  outline: none;
`;

const FormButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const DeleteButton = styled.button`
  background-color: #dc3545;

  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
  margin-top:30px;
  width: 40%;

  &:hover {
    background-color: #c82333;
  }
`;


// Supondo que os componentes estilizados estejam definidos/importados corretamente
// Isso inclui Body, Imagem, Container, Title, SearchContainer, SearchInput, SearchButton,
// MoveListContainer, MoveItemContainer, MoveHeader, MoveName, MoveDescription, MoveImage, Form,
// FormInput, FormButton.

const initialMoves = [
  {
    name: "Kimura",
    description: "Uma técnica de submissão que torce o braço do oponente em um ângulo doloroso.",
    image: "link_to_kimura_image",
    level: "advanced"
  },
  //... outros golpes
];
const MoveItem = ({ move, index, expanded, toggleExpand, Delete }) => (
  <MoveItemContainer>
    <MoveHeader onClick={() => toggleExpand(index)}>
      <MoveName>{move.name}</MoveName>
      {expanded === index ? <FaAngleUp /> : <FaAngleDown />}
    </MoveHeader>
    {expanded === index && (
      <>
        <MoveDescription>{move.description}</MoveDescription>
        <MoveImage src={move.image} alt={move.name} />
      </>
    )}
    <DeleteButton onClick={() => Delete(index)}>Deletar</DeleteButton>
  </MoveItemContainer>
);

// Componente MoveList
const MoveList = ({ moves, expanded, toggleExpand, Delete }) => (
  <MoveListContainer>
    {moves.map((move, index) => (
      <MoveItem
        key={index}
        move={move}
        index={index}
        expanded={expanded}
        toggleExpand={toggleExpand}
        Delete={Delete} // Passando a função Delete para MoveItem
      />
    ))}
  </MoveListContainer>
);

// Componente principal
const JiuJitsuMoves = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState(null);
  const [newMove, setNewMove] = useState({ name: '', description: '', image: '', level: 'all' });
  const [moveList, setMoveList] = useState(() => {
    const savedMoves = localStorage.getItem('jiuJitsuMoves');
    return savedMoves ? JSON.parse(savedMoves) : initialMoves;
  });
  const [filterLevel] = useState('all');

  useEffect(() => {
    localStorage.setItem('jiuJitsuMoves', JSON.stringify(moveList));
  }, [moveList]);

  const handleDeleteExercise = (index) => {
    const updatedMoveList = moveList.filter((_, i) => i !== index);
    setMoveList(updatedMoveList);
  };

  const filteredMoves = moveList.filter(move =>
    (filterLevel === 'all' || move.level === filterLevel) &&
    move.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleNewMoveChange = (e) => {
    const { name, value } = e.target;
    setNewMove({ ...newMove, [name]: value });
  };

  const handleNewMoveSubmit = (e) => {
    e.preventDefault();
    setMoveList([...moveList, newMove]);
    setNewMove({ name: '', description: '', image: '', level: 'all' });
  };

  return (
    
    <Body>
      
      <Imagem alt="Logo Innocva" src={logo} />
      <Title>Golpes de Jiu-Jitsu</Title>
      <Container>
       
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Buscar Golpe..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </SearchContainer>
        <p>Sua lista de golpes aqui:</p>
        <MoveList moves={filteredMoves} expanded={expanded} toggleExpand={toggleExpand} Delete={handleDeleteExercise}
        /> 
       <p>Salve seu golpe aqui:</p>
        <Form onSubmit={handleNewMoveSubmit}>
          <FormInput
            type="text"
            name="name"
            value={newMove.name}
            onChange={handleNewMoveChange}
            placeholder="Nome do Golpe"
            required
          />
          <FormInput
            type="text"
            name="description"
            value={newMove.description}
            onChange={handleNewMoveChange}
            placeholder="Descrição do Golpe"
            required
          />
          <FormInput
            type="text"
            name="image"
            value={newMove.image}
            onChange={handleNewMoveChange}
            placeholder="link do video"
            required
          />
          <FormButton type="submit">Cadastrar Golpe</FormButton>
        </Form>
      </Container>
    </Body>
  );
};

export default JiuJitsuMoves;

