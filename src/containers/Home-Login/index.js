import {
  Conteiner,
  Imagem,
  ConteinerItens,
  H1,
  InputLabel,
  Input,
  Button,
  Logos,
  Imagem2
} from "./style";

import Peoples from "../../assets/logoinnocva.png";
import Facebook from "../../assets/facebook_icon 1.png";
import Google from "../../assets/google_icon 1.png";
import Twiter from "../../assets/twitter_bird_icon 1.png";

function App() {

  return (
    <Conteiner>
      <Imagem2 alt="img-pessoas" src={Peoples}/>
      <ConteinerItens>
        <H1>Inova-Jiu-Jitsu</H1>

        <InputLabel>E-mail</InputLabel>
        <Input placeholder="E-mail"  />

        <InputLabel>Senha</InputLabel>
        <Input placeholder="Senha" />
        <Button to="/Menu"Ver Menu> Entrar </Button>
        
       <Logos>
        <Imagem alt="img-pessoas" src={Google}/>
        <Imagem alt="img-pessoas" src={Facebook}/>
        <Imagem alt="img-pessoas" src={Twiter}/>
        </Logos>
      </ConteinerItens>

    </Conteiner>
  );
}

export default App;
