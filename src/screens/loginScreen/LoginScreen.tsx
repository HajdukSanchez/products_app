import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { useForm } from '../../hooks';
import { styles } from './LoginScreen.styles';
import { RootStackParamList } from '../../routes/routes';
import { Background, Button, Logo, TextInputForm } from '../../components';

interface LoginScreenProps extends StackScreenProps<RootStackParamList, 'Login'> {}

const LoginScreen = ({ navigation: { replace } }: LoginScreenProps) => {
  const {
    form: { email, password },
    onChange,
  } = useForm({ email: '', password: '' });

  const handleLogin = () => {
    Keyboard.dismiss(); // Dismiss keyboard
    // TODO: Add login logic
  };

  const handleRegister = () => {
    replace('Register'); // Replace current screen with 'Register' (Delete this screen from navigation stack)
  };

  return (
    <>
      <Background />
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
