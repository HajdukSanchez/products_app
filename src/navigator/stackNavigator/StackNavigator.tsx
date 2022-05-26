import React, { useContext } from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { RootStackParamList } from '../../routes/routes';
import { AuthContext } from '../../context/authContext/AuthContext';
import { LoadingScreen, LoginScreen, ProtectedScreen, RegisterScreen } from '../../screens';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
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
        <Screen name="Protected" component={ProtectedScreen} />
      )}
    </Navigator>
  );
};

const _screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export { StackNavigator };
