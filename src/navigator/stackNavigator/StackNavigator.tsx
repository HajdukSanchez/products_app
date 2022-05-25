import React from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { RootStackParamList } from '../../routes/routes';
import { LoginScreen, ProtectedScreen, RegisterScreen } from '../../screens';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Navigator screenOptions={_screenOptions} initialRouteName="Login">
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Register" component={RegisterScreen} />
      <Screen name="Protected" component={ProtectedScreen} />
    </Navigator>
  );
};

const _screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export { StackNavigator };
