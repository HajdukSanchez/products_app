import React, { createContext, ReactNode, useEffect, useReducer, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { API } from '../../api/api';
import { authReducer } from './authReducer';
import { LoginRequest, LoginResponse } from '../../models/login.model';
import { AuthActionType, AuthContextProps, AuthState, AuthStorageData } from '../../models/authContext.model';

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

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const tokenStored = await AsyncStorage.getItem(AuthStorageData.TOKEN);
      if (!tokenStored) return dispatch({ type: AuthActionType.NOT_AUTHENTICATED });

      setIsLoading(true);
      const {
        data: { token, usuario: user },
        status,
      } = await API.get<LoginResponse>('/auth', { headers: { 'x-token': tokenStored } });
      if (status !== 200) return dispatch({ type: AuthActionType.NOT_AUTHENTICATED });
      dispatch({ type: AuthActionType.SIGN_IN, payload: { token, user } });
    } catch (error: any) {
      dispatch({ type: AuthActionType.ADD_ERROR, payload: error.response.data.msg || 'No authenticated' });
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = () => {};

  const signIn = async ({ email, password }: LoginRequest) => {
    try {
      setIsLoading(true);
      const {
        data: { token, usuario: user },
      } = await API.post<LoginResponse>('/auth/login', { correo: email, password });
      await AsyncStorage.setItem(AuthStorageData.TOKEN, token);
      dispatch({ type: AuthActionType.SIGN_IN, payload: { token, user } });
    } catch (error: any) {
      dispatch({ type: AuthActionType.ADD_ERROR, payload: error.response.data.msg || 'Incorrect login information' });
    } finally {
      setIsLoading(false);
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem(AuthStorageData.TOKEN);
    dispatch({ type: AuthActionType.LOG_OUT });
  };

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
