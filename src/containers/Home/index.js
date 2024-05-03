import {
  Conteiner,
  Imagem,
  ConteinerItens,
  H1,
  Button,
} from "./style";

import Peoples from "../../assets/logoinnocva.png";

function App() {
  

  return (
    <Conteiner>
      <Imagem alt="img-pessoas" src={Peoples}/>
      <ConteinerItens>
        <H1>Inova-Jiu-Jitsu</H1>

        <Button to="/Checkin-aula"Ver Menu> Check-in em aula</Button>
        <Button to="/Treino"Ver Historico> Treino do Dia </Button>
        <Button to="/Cadastro-Alunos"Ver Menu> Cadastro de Alunos </Button>
        <Button to="/Desafios"Ver Menu> Desafios Innova  </Button>
        <Button to="/Pertodevoce"Ver Menu> Mercado de Troca </Button> 
        <Button to="/Comunidade"Ver Menu> Comunidades INV </Button> 
        
      </ConteinerItens>
    </Conteiner>
  );
}

export default App;
