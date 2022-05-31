import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from './src/navigator';
import { AuthProvider } from './src/context/authContext/AuthContext';
import { ProductsProvider } from './src/context/productsContext/ProductsContext';

interface AppStateProps {
  children: ReactNode | ReactNode[];
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} translucent />
      <_AppState>
        <AuthStackNavigator />
      </_AppState>
    </NavigationContainer>
  );
};

const _AppState = ({ children }: AppStateProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  );
};

export { App };
