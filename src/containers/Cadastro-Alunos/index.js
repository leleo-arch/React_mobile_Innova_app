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
import Seta from "../../assets/􀰑.svg";

function App() {
  const [users, setUsers] = useState([]);
  const InputName = useRef();
  const InputAge = useRef();

  async function addNewuser() {
    const { data: newUser } = await axios.post(
      "http://localhost:5000/myprojects",
      { name: InputName.current.value, age: InputAge.current.value }
    );

    console.log(newUser);
    setUsers([...users, newUser]);
  }
  

  return (
    <Conteiner>
      <Imagem alt="img-pessoas" src={Peoples}/>
      <ConteinerItens>
        <H1>Inova-Jiu-Jitsu</H1>

        <InputLabel>Nome do Aluno:</InputLabel>
        <Input placeholder="Name" ref={InputName} />

        <InputLabel>Faixa:</InputLabel>
        <Input placeholder="Belt" ref={InputAge} />
        <Button to="/Alunos" onClick={addNewuser}>
          Cadastrar <img alt="Seta" src={Seta} />
        </Button>
        <Button to="/Alunos"Ver Alunos> Alunos Cadastrados <img alt="Seta" src={Seta} /> </Button>
        <Button to="/Menu"Ver Menu> Voltar Menu</Button>

      </ConteinerItens>
    </Conteiner>
  );
}

export default App;
