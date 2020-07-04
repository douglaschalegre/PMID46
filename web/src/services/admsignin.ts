import api from './api';

export default async function signIn( user: string, pwd: string){
  return api.post('/Admin/login',{
    user,
    pwd
  });
};