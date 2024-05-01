import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Conteiner,
  Imagem,
  ConteinerItens,
  H1,
  Button,
  User,
} from "./style";

import faixas from "../../assets/faixas.png";
import Seta from "../../assets/􀰑.svg";
import Lata from "../../assets/18297 4.svg";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function fetchUsers() {
      
      const {data: newUser} = await axios.get("http://localhost:5000/myprojects");

      setUsers(newUser);

    }

    fetchUsers() 

  }, [])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:5000/myprojects/${userId}`)
    const DeleteUser = users.filter((user) => user.id !== userId);
    setUsers(DeleteUser);
  }

  return (
    <Conteiner>
      <Imagem alt="img-pessoas" src={faixas}/>
      <ConteinerItens>
        <H1>Inova-Alunos</H1>

        <ul>
          {users.map((user) => (
            <User key={users.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Lata} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        
        </ul>

        <Button to="/">
        <img alt="Seta" src={Seta} /> Voltar
        </Button>

      </ConteinerItens>
    </Conteiner>

  );

  
}

export default Users;
