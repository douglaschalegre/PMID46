import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Admin from '../pages/Admin';
import Cadastro from '../pages/Cadastro';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route component={LandingPage} path="/admin" exact />
      <Route component={Admin} path="/admin/login" exact />
      <Route component={Admin} path="/admin/painel" exact />
      <Route component={Cadastro} path="/admin/cadastrar" exact />
    </BrowserRouter>
  );
}

export default AppRoutes;