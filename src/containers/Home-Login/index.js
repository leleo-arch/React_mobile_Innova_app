import axios from "axios";
import React, { useRef, useState } from "react";

import {
  Conteiner,
  Imagem,
  ConteinerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./style";

import Peoples from "../../assets/logoinnocva.png";

function App() {

  return (
    <Conteiner>
      <Imagem alt="img-pessoas" src={Peoples}/>
      <ConteinerItens>
        <H1>Inova-Jiu-Jitsu</H1>

        <InputLabel>E-mail</InputLabel>
        <Input placeholder="E-mail"  />

        <InputLabel>Senha</InputLabel>
        <Input placeholder="Senha" />
        <Button to="/"Ver Alunos> Entrar </Button>
      </ConteinerItens>
    </Conteiner>
  );
}

export default App;
