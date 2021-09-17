import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Pages/Home';

import GlobalStyle, { Container, CalendarIcon, TrophyIcon, MegaphoneIcon, UserIcon } from './globalStyles';

function App() {
  return (
    <Container>
      <Router>
        <header>
          <Link to="/">Cronograma</Link>
          <Link to="/">Top Animes/Mangas</Link>
          <Link to="/" className="logo">
            <span>Ani</span>
            <img src="/Logo.png" alt="Logo" />
            <span>Mo</span>
          </Link>
          <Link to="/">Animes Anunciados</Link>
          <Link to="/">meu Perfil</Link>
        </header>
        <nav>
          <Link to="/"><CalendarIcon /></Link>
          <Link to="/"><TrophyIcon /></Link>
          <Link to="/"><MegaphoneIcon /></Link>
          <Link to="/"><UserIcon /></Link>
        </nav>
        <div className="banner" />
        <Switch>
          <Route exact path="/" children={<Home />} />
        </ Switch>
      </Router>
      <GlobalStyle/>
    </Container>
  );
}

export default App;
