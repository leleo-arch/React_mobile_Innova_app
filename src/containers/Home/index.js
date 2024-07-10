import React, { useState, useEffect } from 'react';
import {
  Container,
  Image,
  ContainerItems,
  Title,
  Button,
  IntroText,
  LoadingContainer,
  Spinner
} from "./style";

import Peoples from "../../assets/logoinnocva.png";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulated loading time of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Image alt="img-pessoas" src={Peoples} />
      <ContainerItems>
        <Title>Innova</Title>
        {loading ? (
          <LoadingContainer>
            <Spinner />
            <p>Carregando...</p>
          </LoadingContainer>
        ) : (
          <>
            <IntroText>
              Bem-vindo à Innova! Explore nossas opções para check-in em aula, treino do dia, cadastro de alunos, desafios Innova e comunidades INV.
            </IntroText>
            <Button to="/Checkin-aula">Check-in em aula</Button>
            <Button to="/Treino">Treino do Dia</Button>
            <Button to="/Cadastros-Alunos">Cadastro de Alunos</Button>
            <Button to="/Golpes">Lista de golpes</Button>
            <Button to="/Desafios">Desafios Innova - Test</Button>
            <Button to="/Comunidade">Comunidades INV - Test</Button>
          </>
        )}
      </ContainerItems>
    </Container>
  );
}

export default App;
