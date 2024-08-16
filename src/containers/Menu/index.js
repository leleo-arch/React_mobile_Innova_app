// src/pages/App.js
import React from 'react';
import NavBar from '../Nave/index'; // Certifique-se de que o caminho para o NavBar esteja correto
import CheckinImage from '../../assets/checkin.png.jpg'; // Corrigido a extensão
import CheckinImage2 from '../../assets/png2.jpg'; // Corrigido a extensão
import CheckinImage3 from '../../assets/png3.jpg'; // Corrigido a extensão
import relogio from '../../assets/timer.png'; // Corrigido a extensão
import Placar from '../../assets/punch.png'; // Corrigido a extensão



import {
  Container,
  ContainerItems,
  Title,
  ButtonGallery,
  Button,
  IntroText,
  CircleContainer,
  Circle,
  Tempo

} from "./style";

const App = () => {
  return (
    <Container>
      <ContainerItems>
        <Title>Innova</Title>
        <IntroText>
          Bem-vindo à Innova! Explore nossas opções para check-in em aula, treino do dia, cadastro de alunos, desafios Innova e comunidades INV.
        </IntroText>
        <CircleContainer>
        <Circle to="/Timer"> 
        <Tempo src={relogio} alt="Desafios"/>
         </Circle >              
          <Circle to="/Placar">
          <Tempo src={Placar} alt="Desafios"/>
          </Circle>
          <Circle to="/Placar"/>
          <Circle />
        </CircleContainer>
      <ButtonGallery>
          <Button to="/Cadastros-Alunos">
          <img src={CheckinImage} alt="Cadastro"/>
          </Button>
          <Button to="/Desafios">
          <img src={CheckinImage2} alt="Desafios"/>
          </Button>
          <Button to="/Comunidade">
          <img src={CheckinImage3} alt="Comunidade"/>
          </Button>
          <Button to="/Timer">
          <img src={CheckinImage} alt="Timer"/>
          </Button>
        </ButtonGallery>
        <NavBar />
      </ContainerItems>

    </Container>
  );
};

export default App;
