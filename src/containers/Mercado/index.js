import React, { useState } from 'react';
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
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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

const MoveList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const MoveItem = styled.li`
  margin-bottom: 20px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
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

const MoveImage = styled.img`
  max-width: 100%;
  border-radius: 5px;
  margin-top: 10px;
`;

const moves = [
  {
    name: "Armbar (Chave de Braço)",
    description: "Uma técnica de submissão que aplica pressão na articulação do cotovelo.",
    image: "link_to_armbar_image"
  },
  {
    name: "Triangle Choke (Triângulo)",
    description: "Um estrangulamento que usa as pernas para prender o pescoço do oponente.",
    image: "link_to_triangle_choke_image"
  },
  {
    name: "Kimura",
    description: "Uma chave de ombro que aplica pressão na articulação do ombro.",
    image: "link_to_kimura_image"
  },
  {
    name: "Rear Naked Choke (Mata Leão)",
    description: "Um estrangulamento aplicado pelas costas, usando o braço para comprimir o pescoço.",
    image: "link_to_rear_naked_choke_image"
  },
  {
    name: "Guillotine Choke (Guilhotina)",
    description: "Um estrangulamento frontal que usa o braço para comprimir o pescoço do oponente.",
    image: "link_to_guillotine_choke_image"
  },
  {
    name: "Omoplata",
    description: "Uma técnica de submissão que aplica pressão no ombro usando as pernas.",
    image: "link_to_omoplata_image"
  },
  {
    name: "Ezekiel Choke (Ezequiel)",
    description: "Um estrangulamento que usa o antebraço para comprimir o pescoço do oponente.",
    image: "link_to_ezekiel_choke_image"
  },
  {
    name: "Americana",
    description: "Uma chave de ombro que aplica pressão na articulação do ombro.",
    image: "link_to_americana_image"
  },
  {
    name: "Ankle Lock (Chave de Tornozelo)",
    description: "Uma técnica de submissão que aplica pressão na articulação do tornozelo.",
    image: "link_to_ankle_lock_image"
  },
  {
    name: "Heel Hook",
    description: "Uma técnica de submissão que aplica pressão no tornozelo e joelho.",
    image: "link_to_heel_hook_image"
  },
  {
    name: "Cross Collar Choke",
    description: "Um estrangulamento usando a gola do oponente para comprimir os lados do pescoço.",
    image: "link_to_cross_collar_choke_image"
  },
  {
    name: "Bow and Arrow Choke",
    description: "Um estrangulamento onde a gola é puxada enquanto se segura a perna do oponente, similar a um arqueiro puxando uma flecha.",
    image: "link_to_bow_and_arrow_choke_image"
  },
  {
    name: "Peruvian Necktie",
    description: "Um estrangulamento onde o oponente é pressionado contra o solo enquanto o pescoço é comprimido.",
    image: "link_to_peruvian_necktie_image"
  },
  {
    name: "North South Choke",
    description: "Um estrangulamento onde o pescoço do oponente é comprimido entre o braço e a lateral do corpo do atacante.",
    image: "link_to_north_south_choke_image"
  },
  {
    name: "Darce Choke",
    description: "Um estrangulamento que envolve o braço do oponente e comprime o pescoço.",
    image: "link_to_darce_choke_image"
  }
];

const JiuJitsuMoves = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState(null);

  const filteredMoves = moves.filter(move =>
    move.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Body>
      <Imagem alt="Logo Innocva" src={logo} />
      <Container>
        <Title>Golpes de Jiu-Jitsu</Title>
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
        <MoveList>
          {filteredMoves.map((move, index) => (
            <MoveItem key={index}>
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
            </MoveItem>
          ))}
        </MoveList>
      </Container>
    </Body>
  );
};

export default JiuJitsuMoves;
