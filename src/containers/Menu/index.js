
import React from 'react';
import NavBar from '../Nave/index';  
import relogio from '../../assets/timer.png'; 
import Placar from '../../assets/punch.png'; 
import Controle from '../../assets/controle.png'; 
import Noticias from '../../assets/noticias.png'; 
import Home from '../../containers/Perfil'; 




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
     <Home></Home>
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

         <Circle to="/Noticias"> 
        <Tempo src={Noticias} alt="Noticias"/>
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
          <img src='https://cdn.discordapp.com/attachments/1274071230512894016/1276237486825148456/banner_campeonato.png?ex=66c8cc48&is=66c77ac8&hm=c071ef1e2e4c6c57881d3c0c5b9c6c30339ab2f65b337c8a4a50309fe4d0a6aa&'alt="Cadastro"/>
          </Button>
          <Button to="/Desafios">
          <img src='https://cdn.discordapp.com/attachments/1274071230512894016/1276237487202762844/banner_controle_de_alunos.png?ex=66c8cc48&is=66c77ac8&hm=4c583313526fd439d5b35a77c143b3e7b28e74e01d3103bdf18fbb54725973e9&' alt="Desafios"/>
          </Button>
          <Button to="/Comunidade">
          <img src='https://cdn.discordapp.com/attachments/1274071230512894016/1276237486825148456/banner_campeonato.png?ex=66c8cc48&is=66c77ac8&hm=c071ef1e2e4c6c57881d3c0c5b9c6c30339ab2f65b337c8a4a50309fe4d0a6aa&'alt="Cadastro"/>
          </Button>
          <Button to="/Timer">
          <img src='https://cdn.discordapp.com/attachments/1274071230512894016/1276237487202762844/banner_controle_de_alunos.png?ex=66c8cc48&is=66c77ac8&hm=4c583313526fd439d5b35a77c143b3e7b28e74e01d3103bdf18fbb54725973e9&' alt="Desafios"/>
          </Button>
        </ButtonGallery>
      </ContainerItems>
      <NavBar/>

    </Container>
  );
};

export default App;
