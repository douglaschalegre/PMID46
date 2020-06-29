import React, { createContext, useState } from 'react';
import authenticate from '../services/admsignin';

interface AuthContextData{
  auth: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn(){
    const response = await authenticate('douglas@email.com', 'password');
    console.log(response.data);
    setUser(response.data.user);
  }

  function signOut(){
		setUser(null);
  }
  
  return(
    <AuthContext.Provider value={{auth: Boolean(user), user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext