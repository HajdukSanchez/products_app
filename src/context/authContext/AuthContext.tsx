import React, { createContext, ReactNode, useReducer } from 'react';

import { authReducer } from './authReducer';
import { AuthContextProps, AuthState } from '../../models/authContext.model';

export const AuthContext = createContext({} as AuthContextProps);

const authInitialState: AuthState = {
  status: 'checking',
  user: null,
  token: null,
  errorMessage: '',
};

interface AuthProviderProps {
  children: ReactNode | ReactNode[];
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const signUp = () => {};

  const signIn = () => {};

  const logOut = () => {};

  const removeError = () => {};

  const returnValue: AuthContextProps = {
    ...state,
    signUp,
    signIn,
    logOut,
    removeError,
  };

  return <AuthContext.Provider value={returnValue}>{children}</AuthContext.Provider>;
};
