import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../../assets/5.png';  // Importa a imagem de fundo
import NavBar from '../Nave/index'; // Certifique-se de que o caminho para o NavBar esteja correto
import Home from '../../containers/Perfil'; 


const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  height: 100vh;
  gap: 25px;
  margin: auto;
  background-image: url(${backgroundImg});  // Define a imagem de fundo
  background-size: cover;  // Faz com que a imagem cubra todo o contêiner
  background-position: center;  // Centraliza a imagem
  background-repeat: no-repeat;  // Evita que a imagem se repita
`;

const ProfileHeader = styled.div`
margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  gap:20px;

`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
  margin-bottom: 10px;
`;

const ProfileName = styled.h1`
  font-size: 28px;
  color: #fff;
`;

const ProfileEmail = styled.p`
  font-size: 18px;
  color: #fff;
`;

const ProfileContent = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProfileSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;
`;

const SectionContent = styled.p`
  font-size: 18px;
  color: #666;
`;

const EditButton = styled.button`
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

const Profile = () => {
  const handleEditClick = () => {
    // Implement further edit functionality here
    console.log('Edit profile clicked');
  };

  return (
    <ProfileContainer>
        <Home></Home>
      <ProfileHeader>
        <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
        <ProfileName>John Doe</ProfileName>
        <ProfileEmail>john.doe@example.com</ProfileEmail>
      </ProfileHeader>
      <ProfileContent>
        <ProfileSection>
          <SectionTitle>Sobre Mim</SectionTitle>
          <SectionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </SectionContent>
        </ProfileSection>
        <ProfileSection>
          <SectionTitle>Informações de Contato</SectionTitle>
          <SectionContent>
            Telefone: (123) 456-7890<br />
            Endereço: Rua Exemplo, 123, Cidade, Estado
          </SectionContent>
        </ProfileSection>
        <ProfileSection>
          <SectionTitle>Preferências</SectionTitle>
          <SectionContent>
            Preferências de notificação e privacidade.
          </SectionContent>
        </ProfileSection>
        <EditButton onClick={handleEditClick}>Editar Perfil</EditButton>
      </ProfileContent>
      <NavBar></NavBar>
    </ProfileContainer>
  );
};

export default Profile;
