import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import cadastro from "./containers/Cadastro-Alunos";
import alunos from "./containers/Alunos";
import Login  from "./containers/Home-Login";

function Routes() {

    return(
  
   <Router>
    <Switch>
        <Route exact path="/" component = {cadastro}/>
        <Route exact path="/Alunos"component = {alunos}/>
        <Route exact path="/Home-Login"component = {Login}/>
    </Switch>
   </Router> 

    );

}

export default Routes;


Routes()