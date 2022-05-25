import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './src/navigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} translucent />
      <StackNavigator />
    </NavigationContainer>
  );
};

export { App };
