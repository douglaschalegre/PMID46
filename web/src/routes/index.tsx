import React from 'react';
import useAuth from '../contexts/auth';
import AuthenticateRoutes from './authenticate.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const { auth } = useAuth();
  return auth ? <AppRoutes/> : <AuthenticateRoutes/>
}

export default Routes;