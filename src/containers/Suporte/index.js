import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImg from '../../assets/5.png';  // Importa a imagem de fundo
import NavBar from '../Nave/index'; // Certifique-se de que o caminho para o NavBar esteja correto
import Home from '../../containers/Perfil'; 



const SupportContainer = styled.div`
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

// Estilos para o título da página de suporte
const SupportTitle = styled.h1`
margin-top: 40px;
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
`;

// Estilos para o conteúdo do suporte
const SupportContent = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
`;

// Estilos para o formulário
const SupportForm = styled.form`
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

// Estilos para a área de texto
const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 25px;
  resize: vertical;
`;

// Estilos para o botão de enviar
const SubmitButton = styled.button`
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

const Support = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica para enviar os dados do formulário
    console.log('Formulário enviado:', formData);
  };

  return (
    <SupportContainer>
        <Home></Home>
      <SupportTitle>Suporte</SupportTitle>
      <SupportContent>
        Se precisar de ajuda, preencha o formulário abaixo para entrar em contato com nosso suporte técnico.
      </SupportContent>
      <SupportForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Nome:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="email">E-mail:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="message">Mensagem:</Label>
          <TextArea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormField>
        <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
      </SupportForm>
      <NavBar/>
    </SupportContainer>
  );
};

export default Support;
