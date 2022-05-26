import React, { useContext } from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { RootAuthStackParamList } from '../../routes/routes';
import { AuthContext } from '../../context/authContext/AuthContext';
import { LoadingScreen, LoginScreen, RegisterScreen } from '../../screens';
import { ProductsStackNavigator } from '../productsStackNavigator/ProductsStackNavigator';

const { Navigator, Screen } = createStackNavigator<RootAuthStackParamList>();

const AuthStackNavigator = () => {
  const { status } = useContext(AuthContext);

  if (status === 'checking') return <LoadingScreen />; // Initial state

  return (
    <Navigator screenOptions={_screenOptions} initialRouteName="Login">
      {status !== 'authenticated' ? (
        <>
          <Screen name="Login" component={LoginScreen} />
          <Screen name="Register" component={RegisterScreen} />
        </>
      ) : (
        <>
          <Screen name="ProductsStack" component={ProductsStackNavigator} />
        </>
      )}
    </Navigator>
  );
};

const _screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export { AuthStackNavigator };
