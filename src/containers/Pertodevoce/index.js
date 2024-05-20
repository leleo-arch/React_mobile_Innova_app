import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

// Temas
const lightTheme = {
  body: '#FFFFFF',
  text: '#000000',
  header: '#282c34',
  headerText: '#FFFFFF',
  cardBg: '#FFFFFF',
  inputBg: '#F5F5F5',
  buttonBg: '#61dafb',
  buttonText: '#FFFFFF',
  buttonHover: '#21a1f1',
  notificationBg: '#61dafb',
  notificationText: '#FFFFFF',
};

const darkTheme = {
  body: '#2E2E2E',
  text: '#FFFFFF',
  header: '#1C1C1C',
  headerText: '#FFFFFF',
  cardBg: '#3E3E3E',
  inputBg: '#4E4E4E',
  buttonBg: '#61dafb',
  buttonText: '#000000',
  buttonHover: '#21a1f1',
  notificationBg: '#21a1f1',
  notificationText: '#000000',
};

// Estilos Globais e Reset
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.header};
  min-height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${(props) => props.theme.headerText};
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding: 20px 0;
`;

const CommunityList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const ThemeToggle = styled.button`
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }
`;

const FormContainer = styled.div`
  background: ${(props) => props.theme.cardBg};
  padding: 20px;
  margin: 20px 0;
  width: 80%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-radius: 4px;
  background: ${(props) => props.theme.inputBg};
  color: ${(props) => props.theme.text};
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-radius: 4px;
  resize: none;
  background: ${(props) => props.theme.inputBg};
  color: ${(props) => props.theme.text};
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  background-color: ${(props) => props.theme.buttonBg};
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.buttonText};
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
`;

const SearchContainer = styled.div`
  margin: 20px 0;
  width: 80%;
  max-width: 600px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${(props) => props.theme.inputBg};
  color: ${(props) => props.theme.text};
`;

const CommunityItem = styled.div`
  background: ${(props) => props.theme.cardBg};
  padding: 20px;
  margin: 10px 0;
  width: 80%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CommunityName = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
`;

const CommunityDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff6961;
  border: none;
  border-radius: 50%;
  color: white;
  width: 25px;
  height: 25px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff5c5c;
  }
`;

const NotificationContainer = styled.div`
  background: ${(props) => props.theme.notificationBg};
  color: ${(props) => props.theme.notificationText};
  padding: 10px 20px;
  border-radius: 4px;
  position: fixed;
  top: 20px;
  right: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Componente de Notificação
const Notification = ({ message }) => (
  <NotificationContainer>
    {message}
  </NotificationContainer>
);

// Componente de Formulário de Comunidade
const CommunityForm = ({ addCommunity }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || description.trim() === '') {
      setError('Todos os campos são obrigatórios.');
      return;
    }
    addCommunity(name, description);
    setName('');
    setDescription('');
    setError('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome da Comunidade"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={error && name.trim() === ''}
          required
        />
        <Textarea
          placeholder="Descrição da Comunidade"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          error={error && description.trim() === ''}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Adicionar Comunidade</Button>
      </Form>
    </FormContainer>
  );
};

// Componente de Barra de Pesquisa
const SearchBar = ({ filterCommunities }) => {
  const handleSearch = (e) => {
    filterCommunities(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Pesquisar Comunidades..." onChange={handleSearch} />
    </SearchContainer>
  );
};

// Componente de Comunidade
const Community = ({ name, description, index, removeCommunity }) => (
  <CommunityItem>
    <RemoveButton onClick={() => removeCommunity(index)}>×</RemoveButton>
    <CommunityName>{name}</CommunityName>
    <CommunityDescription>{description}</CommunityDescription>
  </CommunityItem>
);

// Componente Principal
const App = () => {
  const [communities, setCommunities] = useState([
    { name: 'React Developers', description: 'A community for React developers to share and learn.' },
    { name: 'JavaScript Enthusiasts', description: 'A place for JavaScript enthusiasts to discuss and collaborate.' },
    { name: 'Web Design Lovers', description: 'Sharing and learning about the latest in web design.' },
  ]);
  const [filteredCommunities, setFilteredCommunities] = useState(communities);
  const [theme, setTheme] = useState('light');
  const [notification, setNotification] = useState('');

  const addCommunity = (name, description) => {
    const newCommunity = { name, description };
    setCommunities([...communities, newCommunity]);
    setFilteredCommunities([...communities, newCommunity]);
    setNotification(`Comunidade "${name}" adicionada com sucesso!`);
    setTimeout(() => setNotification(''), 3000);
  };

  const removeCommunity = (index) => {
    if (window.confirm('Tem certeza que deseja remover esta comunidade?')) {
      const communityName = communities[index].name;
      const newCommunities = communities.filter((_, i) => i !== index);
      setCommunities(newCommunities);
      setFilteredCommunities(newCommunities);
      setNotification(`Comunidade "${communityName}" removida com sucesso!`);
      setTimeout(() => setNotification(''), 3000);
    }
  };

  const filterCommunities = (searchTerm) => {
    const filtered = communities.filter((community) =>
      community.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCommunities(filtered);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>Página de Comunidade</Title>
          <ThemeToggle onClick={toggleTheme}>
            Mudar para tema {theme === 'light' ? 'escuro' : 'claro'}
          </ThemeToggle>
        </Header>
        {notification && <Notification message={notification} />}
        <CommunityForm addCommunity={addCommunity} />
        <SearchBar filterCommunities={filterCommunities} />
        <CommunityList>
          {filteredCommunities.map((community, index) => (
            <Community
              key={index}
              index={index}
              name={community.name}
              description={community.description}
              removeCommunity={removeCommunity}
            />
          ))}
        </CommunityList>
      </Container>
    </ThemeProvider>
  );
};

export default App;
