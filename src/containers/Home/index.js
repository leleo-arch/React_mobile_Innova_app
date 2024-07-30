import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Estilos com styled-components
const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: black;
  min-height: 100vh;
  padding: 20px;
`;

const HeaderContainer = styled.header`
  background-color: black;
  padding: 10px;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #004d99;
  }
`;

const Button2 = styled(Link)`
  width: 93%;
  padding: 10px;
  background-color: #0066cc;
  color: white;
  border: none;
  margin-top: 1px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #004d99;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #0066cc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de autenticação com tempo de espera
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        setIsLoggedIn(true);
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <AppContainer>
      <HeaderContainer>
        <Title>Jiu-Jitsu App</Title>
      </HeaderContainer>
      {!isLoggedIn ? (
        <LoginFormContainer>
          <Subtitle>Login de Jiu-Jitsu</Subtitle>
          <form onSubmit={handleLogin}>
            <FormGroup>
              <Label>Usuário</Label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Senha</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <Button type="submit">Entrar</Button>
          </form>
          <Button2 to="/Session">Cadastrar-se</Button2>
          <Button2 to="/Menu">Pular</Button2>
          {loading && (
            <LoadingContainer>
              <Spinner />
              <p>Carregando...</p>
            </LoadingContainer>
          )}
        </LoginFormContainer>
      ) : (
        <p>Você está logado!</p>
      )}
    </AppContainer>
  );
};

export default App;
