import api from './api';

export default function signIn( user: string, pwd: string){
  return api.post('/Admin/login',{
    user,
    pwd
    // user:'douglas@email.com',
    // pwd:'password'
  });
};