import React, { createContext, useState, useEffect, useContext } from 'react';
import { signIn } from '../services'

const AuthContext = createContext()

export const Context = ({children}) => {
  const [user, setUser] = useState(null);
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [itens, setItens] = useState([]);
  const [timePassed, setTime] = useState(false);

  useEffect(() => {}, [])

  async function load() {
    const response = await signIn();
    setUser(response.user);
    setEstabelecimentos(response.estabelecimentos);
    setItens(response.itens);
    setTime(true);
  }

  return (
    <AuthContext.Provider value={{ user, estabelecimentos, itens, timePassed, load}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

 