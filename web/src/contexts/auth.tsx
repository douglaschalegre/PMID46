import React, { createContext, useState, useEffect, useContext } from 'react';
import authenticate from '../services/admsignin';
import api from '../services/api';

interface User{
  id: number;
  admName: string;
  admPhone: string;
  admEmail: string;
  admRole: string;
}

interface AuthContextData{
  auth: boolean;
  user: User | null;
  loading: boolean;
  signIn(usr: string, pwd: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(){
      const storagedUser = localStorage.getItem('@AdminAuth:user');
      const storagedToken = localStorage.getItem('@AdminAuth:token');

      if (storagedUser && storagedToken){
        api.defaults.headers['x-access-token'] = `${storagedToken}`
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function signIn(usr: string, pwd: string){
    const response = await authenticate(usr, pwd);
    setUser(response.data.user);
    api.defaults.headers['x-access-token'] = `${response.data.token}`

    localStorage.setItem('@AdminAuth:user', JSON.stringify(response.data.user));
    localStorage.setItem('@AdminAuth:token', response.data.token);
  }

  function signOut(){
    localStorage.clear();
    setUser(null);
  }
  
  return(
    <AuthContext.Provider value={{auth: Boolean(user), user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
};

export default function useAuth(){
  const context = useContext(AuthContext);

  return context;
}