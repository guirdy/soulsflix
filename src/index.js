import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pagina404 from './components/Page404';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const CadastroVideo = () => {
  return (
    <div>Cadastro de vídeo</div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
