import {createContext, useContext} from 'react';
import IAuthContextData from '../interfaces/auth-context-data';

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export default AuthContext;

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
