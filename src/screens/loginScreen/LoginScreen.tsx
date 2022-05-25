import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './LoginScreen.styles';
import { Background, Button, Logo, TextInputForm } from '../../components';

const LoginScreen = () => {
  return (
    <>
      <Background />
      <View style={styles.container}>
        <Logo />
        <Text style={styles.title}>Login</Text>
        <TextInputForm
          placeholder="Email"
          placeholderTextColor={'rgba(255,255,255,0.4)'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <TextInputForm
          placeholder="Password"
          placeholderTextColor={'rgba(255,255,255,0.4)'}
          keyboardType={'default'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <Button text="Login" />
        <Button text="New register" withBorder={false} />
      </View>
    </>
  );
};

export { LoginScreen };
