import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useForm } from '../../hooks';
import { styles } from './RegisterScreen.styles';
import { RootStackParamList } from '../../routes/routes';
import { Button, LoadingModal, Logo, TextInputForm } from '../../components';

interface RegisterScreenProps extends StackScreenProps<RootStackParamList, 'Register'> {}

const RegisterScreen = ({ navigation: { replace } }: RegisterScreenProps) => {
  const {
    form: { name, email, password },
    onChange,
  } = useForm({ name: '', email: '', password: '' });
  const { top, right } = useSafeAreaInsets();

  const handleRegister = () => {
    Keyboard.dismiss(); // Dismiss keyboard
    // TODO: Add Register logic
  };

  const handleLogin = () => {
    replace('Login');
  };

  return (
    <>
      <LoadingModal isVisible={false} />
      <KeyboardAvoidingView style={styles.keyBoardView} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <Logo />
          <Text style={styles.title}>Register</Text>
          <TextInputForm
            placeholder="Name"
            placeholderTextColor={'rgba(255,255,255,0.4)'}
            keyboardType={'default'}
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={text => onChange(text, 'name')}
            value={name}
          />
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
          <Button text="Register" onPress={handleRegister} />
          <View style={{ ...styles.floatingButton, top: top + 10, right: right - 20 }}>
            <Button text="Login" withBorder={false} onPress={handleLogin} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export { RegisterScreen };
