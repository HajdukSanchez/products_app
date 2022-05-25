import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './src/navigator';
import { AuthProvider } from './src/context/authContext/AuthContext';

interface AppStateProps {
  children: ReactNode | ReactNode[];
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} translucent />
      <_AppState>
        <StackNavigator />
      </_AppState>
    </NavigationContainer>
  );
};

const _AppState = ({ children }: AppStateProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export { App };
