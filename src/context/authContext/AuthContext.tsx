import React, { createContext, ReactNode, useReducer, useState } from 'react';

import { API } from '../../api/api';
import { authReducer } from './authReducer';
import { LoginRequest, LoginResponse } from '../../models/login.model';
import { AuthActionType, AuthContextProps, AuthState } from '../../models/authContext.model';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const signUp = () => {};

  const signIn = async ({ email, password }: LoginRequest) => {
    try {
      setIsLoading(true);
      const {
        data: { token, usuario: user },
      } = await API.post<LoginResponse>('/auth/login', { correo: email, password });
      dispatch({ type: AuthActionType.SIGN_UP, payload: { token, user } });
    } catch (error: any) {
      dispatch({ type: AuthActionType.ADD_ERROR, payload: error.response.data.msg || 'Incorrect login information' });
    } finally {
      setIsLoading(false);
    }
  };

  const logOut = () => {};

  const removeError = () => {
    dispatch({ type: AuthActionType.REMOVE_ERROR });
  };

  const returnValue: AuthContextProps = {
    ...state,
    isLoading,
    signUp,
    signIn,
    logOut,
    removeError,
  };

  return <AuthContext.Provider value={returnValue}>{children}</AuthContext.Provider>;
};
