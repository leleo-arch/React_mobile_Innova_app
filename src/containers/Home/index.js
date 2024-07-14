import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Estilos com styled-components
const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f0f0f0;
  min-height: 100vh;
  padding: 20px;
`;

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 10px;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const LoginFormContainer = styled.div`
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
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
  cursor: pointer;
  
  &:hover {
    background-color: #004d99;
  }
`;

const SessionContainer = styled.div`
  margin-top: 20px;
`;

export const Button2 = styled(Link)`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px 20px;
  margin: 10px 0;
  text-decoration: none;
  text-align: center;
  border-radius: 5px;
  width: 220px;
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }
`;

const LogoutButton = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #990000;
  }
`;

const WelcomeMessage = styled.p`
  font-size: 18px;
  color: #333;
`;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica de autenticação
    if (username === 'user' && password === 'password') {
      setUser(username);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser('');
    setUsername('');
    setPassword('');
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
            <Button type="submit" >Entrar</Button>
          </form>
          
          <Button2 to="/Menu">Pular</Button2>
          <a>cadastro</a>

        </LoginFormContainer>
      ) : (
        <SessionContainer>
          <Subtitle>Bem-vindo, {user}!</Subtitle>
          <WelcomeMessage>Estamos felizes em vê-lo novamente.</WelcomeMessage>
          <p>Conteúdo relacionado ao Jiu-Jitsu pode ser exibido aqui.</p>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </SessionContainer>
      )}
    </AppContainer>
  );
};

export default App;
