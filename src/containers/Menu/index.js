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
  IntroText
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
        <ButtonGallery>
          <Button to="/Checkin-aula">
            <img src={CheckinImage} alt="Check-in em aula"/>
          </Button>
          <Button to="/Treino">
          <img src={CheckinImage2} alt="Check-in em aula"/>
          </Button>
          <Button to="/Cadastros-Alunos">
          <img src={CheckinImage3} alt="Check-in em aula"/>
          </Button>
          <Button to="/Golpes">
          <img src={CheckinImage} alt="Check-in em aula"/>
          </Button>
          <Button to="/Desafios">
          <img src={CheckinImage2} alt="Check-in em aula"/>
          </Button>
          <Button to="/Comunidade">
          <img src={CheckinImage3} alt="Check-in em aula"/>
          </Button>
        </ButtonGallery>
        <NavBar />
      </ContainerItems>
    </Container>
  );
};

export default App;
