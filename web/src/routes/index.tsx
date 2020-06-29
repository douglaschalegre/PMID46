import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';
import AuthenticateRoutes from './authenticate.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const { auth } = useContext(AuthContext);
  return auth ? <AppRoutes/> : <AuthenticateRoutes/>
}

export default Routes;