import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';

const AuthenticateRoutes = () => {
  return (
    <BrowserRouter>
      <Route component={LandingPage} path="/admin" exact />
      <Route component={Login} path="/admin/login" exact />
      <Route component={Login} path="/admin/painel" exact />
      <Route component={Login} path="/admin/cadastrar" exact />
    </BrowserRouter>
  );
}

export default AuthenticateRoutes;