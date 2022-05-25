import React, { createContext, ReactNode } from 'react';
import { AuthContextProps } from '../../models/authContext.model';

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode | ReactNode[];
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const returnValue: AuthContextProps = {} as any;

  return <AuthContext.Provider value={returnValue}>{children}</AuthContext.Provider>;
};
