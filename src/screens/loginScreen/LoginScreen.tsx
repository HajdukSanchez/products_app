import React, { useContext, useEffect } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { useForm } from '../../hooks';
import { styles } from './LoginScreen.styles';
import { RootAuthStackParamList } from '../../routes/routes';
import { AuthContext } from '../../context/authContext/AuthContext';
import { Background, Button, LoadingModal, Logo, TextInputForm } from '../../components';
import { handleAlert } from '../../helpers/alert';

interface LoginScreenProps extends StackScreenProps<RootAuthStackParamList, 'Login'> {}

const LoginScreen = ({ navigation: { replace } }: LoginScreenProps) => {
  const { isLoading, errorMessage, signIn, removeError } = useContext(AuthContext);
  const {
    form: { email, password },
    onChange,
  } = useForm({ email: '', password: '' });

  useEffect(() => {
    if (errorMessage.length === 0) return;
    handleAlert('Bad credentials', errorMessage, 'OK', removeError);
  }, [errorMessage]);

  const handleLogin = () => {
    Keyboard.dismiss(); // Dismiss keyboard
    signIn({ email, password });
  };

  const handleRegister = () => {
    replace('Register'); // Replace current screen with 'Register' (Delete this screen from navigation stack)
  };

  return (
    <>
      <Background />
      <LoadingModal isVisible={isLoading} />
      <KeyboardAvoidingView style={styles.keyBoardView} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <Logo />
          <Text style={styles.title}>Login</Text>
          <TextInputForm
            placeholder="Email"
            placeholderTextColor={'rgba(255,255,255,0.4)'}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={text => onChange(text, 'email')}
            value={email}
          />
          <TextInputForm
            placeholder="Password"
            placeholderTextColor={'rgba(255,255,255,0.4)'}
            keyboardType={'default'}
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={text => onChange(text, 'password')}
            value={password}
            isPassword
          />
          <Button text="Login" onPress={handleLogin} />
          <Button text="New register" withBorder={false} onPress={handleRegister} />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export { LoginScreen };
