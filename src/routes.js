import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import cadastro from "./containers/Cadastro-Alunos";
import session from "./containers/Session";
import historico from "./containers/Treino";
import menu from "./containers/Menu";
import home from "./containers/Home";
import check from "./containers/Checkin-aula";
import comunidades from "./containers/Cadastros-Alunos";
import golpes from "./containers/Golpes";
import comunidade from "./containers/Comunidade";
import timer from "./containers/Timer";
import placar from "./containers/Placar";
import perfil from "./containers/Perfil";
import noticia from "./containers/Noticias";
import animacao from "./containers/Animacao";
import Intro from "./containers/Intro"; // Adicione o caminho correto para o seu componente Intro
import AnimationPage from "./containers/AnimationPage"; // Adicione o caminho correto para o seu componente AnimationPage

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} /> {/* Adiciona a página de animação */}

        <Route exact path="/AnimationPage" component={AnimationPage} />
          <Route exact path="/Intro" component={Intro} /> {/* Adiciona a página de introdução */}
        <Route exact path="/Cadastros-Alunos" component={comunidades} />
        <Route exact path="/Golpes" component={golpes} />
        <Route exact path="/Treino" component={historico} />
        <Route exact path="/Menu" component={menu} />
        <Route exact path="/Cadastro-Alunos" component={cadastro} />
        <Route exact path="/Session" component={session} />
        <Route exact path="/Checkin-aula" component={check} />
        <Route exact path="/Comunidade" component={comunidade} />
        <Route exact path="/Timer" component={timer} />
        <Route exact path="/Placar" component={placar} />
        <Route exact path="/Perfil" component={perfil} />
        <Route exact path="/Noticias" component={noticia} />
        <Route exact path="/Animacao" component={animacao} />
      </Switch>
    </Router>
  );
}

export default Routes;

