
import React from 'react';
import NavBar from '../Nave/index';  
import backgroundImg2 from '../../assets/adcc.png';  
import backgroundImg3 from '../../assets/ibjjf.png';  
import backgroundImg4 from '../../assets/Paulista.png';  



import Home from '../../containers/Perfil'; 


import {
  Container,
  ContainerItems,
  Title,
  ButtonGallery,
  Button,
  IntroText,
  Button2,

  

} from "./Style";

const App = () => {
  return (
   
    <Container>

     <Home></Home>
      <ContainerItems>
        <Title>Innova</Title>
        <IntroText>
          Eventos e Campeonatos

        </IntroText>
        <ButtonGallery>

        <Button to="/Cadastros-Alunos">
        <img src={backgroundImg4}alt="Cadastro"/>
          </Button>
          <Button to="/Desafios">
          <img src={backgroundImg3}alt="Cadastro"/>
          </Button>
          <Button to="/Comunidade">
          <img src={backgroundImg4}alt="Cadastro"/>
          </Button>
          <Button to="/Timer">
          <img src={backgroundImg3}alt="Cadastro"/>
          </Button>
        
 
        </ButtonGallery>



      <ButtonGallery>
      <Button2 to="/Cadastros-Alunos">
          <img src={backgroundImg2}alt="Cadastro"/></Button2>
          <Button2 to="/Desafios">
          <img src={backgroundImg2}alt="Cadastro"/>
          </Button2>
          <Button2 to="/Comunidade">
          <img src={backgroundImg2}alt="Cadastro"/>     
           </Button2>
          <Button2 to="/Timer">
          <img src={backgroundImg2}alt="Cadastro"/>
           </Button2>
        </ButtonGallery>
      </ContainerItems>
      <NavBar/>

    </Container>
  );
};

export default App;
