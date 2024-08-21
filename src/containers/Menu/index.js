
import React from 'react';
import NavBar from '../Nave/index'; 
import CheckinImage2 from '../../assets/png2.jpg'; 
import CheckinImage3 from '../../assets/png3.jpg'; 
import relogio from '../../assets/timer.png'; 
import Placar from '../../assets/punch.png'; 
import Controle from '../../assets/controle.png'; 
import Noticias from '../../assets/noticias.png'; 



import {
  Container,
  ContainerItems,
  Title,
  ButtonGallery,
  Button,
  IntroText,
  CircleContainer,
  ContainerItems2,
  Circle,
  IntroText2,
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
         
          <Circle to="/Cadastros-Alunos"> 
        <Tempo src={Controle} alt="Desafios"/>
         </Circle > 

         <Circle to="/Timer"> 
        <Tempo src={Noticias} alt="Desafios"/>
         </Circle > 

        </CircleContainer>


        <ContainerItems2>
    <IntroText2>Cronômetro</IntroText2>
    <IntroText2>Placar</IntroText2>
    <IntroText2>Presença</IntroText2>
    <IntroText2>Notícias</IntroText2>

  </ContainerItems2>


      <ButtonGallery>
          <Button to="/Cadastros-Alunos">
          <img src={CheckinImage3} alt="Cadastro"/>
          </Button>
          <Button to="/Desafios">
          <img src={CheckinImage2} alt="Desafios"/>
          </Button>
          <Button to="/Comunidade">
          <img src={CheckinImage3} alt="Comunidade"/>
          </Button>
          <Button to="/Timer">
          <img src={CheckinImage2} alt="Timer"/>
          </Button>
        </ButtonGallery>
        <NavBar />
      </ContainerItems>
      
    </Container>
  );
};

export default App;
