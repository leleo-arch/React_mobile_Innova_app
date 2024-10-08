import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Importa os componentes
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
import Intro from "./containers/Intro";
import configuracoes from "./containers/Configuracoes";
import meuperfil from "./containers/MeuPerfil";
import contato from "./containers/Contato";
import suporte from "./containers/Suporte";
import AnimationPage from "./containers/AnimationPage";
import campeonatos from "./containers/Campeonatos";




function Routes() {
  return (
    <Router>
      <Switch>
        {/* Rota para a página de animação, que será a primeira página a ser exibida */}
        <Route path="/" exact component={AnimationPage} />
        
        {/* Rota para a página inicial após a animação */}
        <Route exact path="/home" component={home} />
        
        {/* Outras rotas */}
        <Route exact path="/Intro" component={Intro} />
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
        <Route exact path="/Configuracoes" component={configuracoes} />
        <Route exact path="/MeuPerfil" component={meuperfil} />
        <Route exact path="/Contato" component={contato} />
        <Route exact path="/Suporte" component={suporte} />
        <Route exact path="/Campeonatos" component={campeonatos} />





        
        {/* Redireciona qualquer outra rota para a página inicial */}
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}

export default Routes;
