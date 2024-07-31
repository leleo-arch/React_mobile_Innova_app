// src/pages/App.js
import React from 'react';
import NavBar from '../Nave/index'; // Certifique-se de que o caminho para o NavBar esteja correto
import Peoples from "../../assets/logoinnocva.png";
import CheckinImage from '../../assets/checkin.png.jpg'; // Corrigido a extensão
import CheckinImage2 from '../../assets/png2.jpg'; // Corrigido a extensão
import CheckinImage3 from '../../assets/png3.jpg'; // Corrigido a extensão

import {
  Container,
  Image,
  ContainerItems,
  Title,
  ButtonGallery,
  Button,
  IntroText,
  CircleContainer,
  Circle,

} from "./style";

const App = () => {
  return (
    <Container>
      <Image alt="img-pessoas" src={Peoples} />
      <ContainerItems>
        <Title>Innova</Title>
        <IntroText>
          Bem-vindo à Innova! Explore nossas opções para check-in em aula, treino do dia, cadastro de alunos, desafios Innova e comunidades INV.
        </IntroText>
        <CircleContainer>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </CircleContainer>
      <ButtonGallery>
          <Button to="/Cadastros-Alunos">
          <img src={CheckinImage} alt="Cadastros-Alunos"/>
          </Button>
          <Button to="/Desafios">
          <img src={CheckinImage2} alt="Desafios"/>
          </Button>
          <Button to="/Comunidade">
          <img src={CheckinImage3} alt="Comunidade"/>
          </Button>
          <Button to="/Cronometro">
          <img src={CheckinImage} alt="Cronometro"/>
          </Button>
        </ButtonGallery>
        <NavBar />
      </ContainerItems>

    </Container>
  );
};

export default App;
