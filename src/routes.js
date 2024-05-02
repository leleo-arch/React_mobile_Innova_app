import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import cadastro from "./containers/Cadastro-Alunos";
import alunos from "./containers/Alunos";
import historico  from "./containers/Treino";
import login  from "./containers/Desafios";
import Home  from "./containers/Home";
import check  from "./containers/Checkin-aula";

function Routes() {

    return(
  
   <Router>
    <Switch>
        <Route path="/" exact component={Home} /> {Home}
        <Route exact path="/Treino"component = {historico}/>
        <Route exact path="/Desafios"component = {login}/>
        <Route exact path="/Cadastro-Alunos" component = {cadastro}/>
        <Route exact path="/Alunos"component = {alunos}/>
        <Route exact path="/Checkin-aula"component = {check}/>
        
    </Switch>
   </Router> 

    );

}

export default Routes;


Routes()