import React from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { RootProductsStackParamList } from '../../routes/routes';
import { ProductScreen, ProductsScreen, ProtectedScreen } from '../../screens';

const { Navigator, Screen } = createStackNavigator<RootProductsStackParamList>();

const ProductsStackNavigator = () => {
  return (
    <Navigator screenOptions={_screenOptions} initialRouteName="Products">
      <Screen name="Products" component={ProductsScreen} />
      <Screen name="Product" component={ProductScreen} options={{ headerShown: true, headerTitleAlign: 'center' }} />
      <Screen name="Protected" component={ProtectedScreen} />
    </Navigator>
  );
};

const _screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export { ProductsStackNavigator };
