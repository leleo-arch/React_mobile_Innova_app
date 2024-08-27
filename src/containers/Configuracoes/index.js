import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImg from '../../assets/5.png';  // Importa a imagem de fundo
import NavBar from '../Nave/index'; // Certifique-se de que o caminho para o NavBar esteja correto
import Home from '../../containers/Perfil'; 


// Estilos para o contêiner da página de configurações
const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  height: 100vh;

  margin: auto;
  background-image: url(${backgroundImg});  // Define a imagem de fundo
  background-size: cover;  // Faz com que a imagem cubra todo o contêiner
  background-position: center;  // Centraliza a imagem
  background-repeat: no-repeat;  // Evita que a imagem se repita
`;

// Estilos para o título da página de configurações
const SettingsTitle = styled.h1`
  font-size: 24px;
  margin-top: 40px;
  color: #fff;
  margin-bottom: 20px;
`;

// Estilos para o formulário
const SettingsForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

// Estilos para os campos do formulário
const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

// Estilos para os rótulos dos campos
const Label = styled.label`
  font-size: 16px;
  color: #fff;
  margin-bottom: 5px;
`;

// Estilos para os campos de entrada
const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 25px;
`;

// Estilos para o botão de salvar
const SaveButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Settings = () => {
  // Estado para armazenar as configurações
  const [settings, setSettings] = useState({
    email: '',
    password: '',
    theme: 'light',
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica para salvar as configurações
    console.log('Settings saved:', settings);
  };

  return (
    <SettingsContainer>
        <Home></Home>
      <SettingsTitle>Configurações</SettingsTitle>
      <SettingsForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="email">E-mail:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">Senha:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={settings.password}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="theme">Tema:</Label>
          <Input
            type="text"
            id="theme"
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            placeholder="Tema (ex: light, dark)"
          />
        </FormField>
        <SaveButton type="submit">Salvar Alterações</SaveButton>
      </SettingsForm>
      <NavBar></NavBar>
    </SettingsContainer>
  );
};

export default Settings;
