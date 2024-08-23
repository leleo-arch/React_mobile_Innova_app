import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { FaSearch, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import NavBar from '../Nave/index'; // Certifique-se de que o caminho para o NavBar esteja correto
import backgroundImg from '../../assets/5.png';  // Importa a imagem de fundo
import backgroundImg2 from '../../assets/Banner.png';  // Importa a imagem de fundo
import Home from '../../containers/Perfil'; 



const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 115vh;
  padding: 20px;
  background-color:black;
  font-family: 'Arial', sans-serif;
  margin-top: -130px;
  background-image: url(${backgroundImg});  // Define a imagem de fundo
  background-size: cover;  // Faz com que a imagem cubra todo o contêiner
  background-position: center;  // Centraliza a imagem
  background-repeat: no-repeat;  // Evita que a imagem se repita
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 25px;
  width: 100%;
  max-width: 100%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 667px) {
    width: 90%;
  }
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);

  border-radius: 25px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 10px;
  border: none;
  background-color: rgba(0, 123, 255, 0.1);
  color: white;
  border-radius: 25px;
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
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
align-items: center;
background-image: url(${backgroundImg2});  // Define a imagem de fundo
  background-size: 500px;  // Faz com que a imagem cubra todo o contêiner
  background-position: center;  // Centraliza a imagem
  background-repeat: no-repeat;  // Evita que a imagem se repita
  opacity: 90%;
  &:hover {
    transform: scale(1.02);
  }
`;

const MoveHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: white;
`;

const MoveName = styled.h2`
  margin: 0;
  color: white;
`;

const MoveDescription = styled.p`
  color: white;
  margin: 10px 0 0;
`;

const MoveImage = styled.link`
  max-width: 100%;
  border-radius: 25px;
  margin-top: 10px;
  color: white;

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
  border-radius: 25px;
  outline: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);

`;

const FormButton = styled.button`
  padding: 10px;
  border: none;
  background-color: rgba(0, 123, 255, 0.1);
  color: white;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: #004d99;
  }
`;

const DeleteButton = styled.button`
  background-color: rgba(0, 123, 255, 0.1);

  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
  margin-top:30px;
  width: 40%;
  border: 2px solid white;

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
    link: "link_to_kimura_video",
    level: "advanced"
  },
  //... outros golpes
];
const MoveItem = ({ move, index, expanded, toggleExpand, Delete }) => (
  <MoveItemContainer>
    <Home></Home>
    <MoveHeader onClick={() => toggleExpand(index)}>
      <MoveName>{move.name}</MoveName>
      {expanded === index ? <FaAngleUp /> : <FaAngleDown />}
    </MoveHeader>
    {expanded === index && (
      <>
        <MoveDescription>{move.description}</MoveDescription>
        <MoveImage src={move.link} alt={move.name} />
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
  const [newMove, setNewMove] = useState({ name: '', description: '', link: '', level: 'all' });
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
    setNewMove({ name: '', description: '', link: '', level: 'all' });
  };

  return (
    
    <Body>
          <Home></Home>

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
        <MoveList moves={filteredMoves} expanded={expanded} toggleExpand={toggleExpand} Delete={handleDeleteExercise}
        /> 
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
            type="link"
            name="link"
            value={newMove.link}
            onChange={handleNewMoveChange}
            placeholder="link do video"
            required
          />
          <FormButton type="submit">Cadastrar Golpe</FormButton>
        </Form>
        <NavBar />
      </Container>
    </Body>
  );
};

export default JiuJitsuMoves;

