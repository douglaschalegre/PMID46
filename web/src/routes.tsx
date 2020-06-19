import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Admin from './pages/Admin';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={LandingPage} path="/admin" exact />
      <Route component={Login} path="/admin/login" exact />
      <Route component={Admin} path="/admin/painel" exact />
    </BrowserRouter>
  );
}

export default Routes;