import React from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';

import { styles } from './TextInputForm.styles';

interface TextInputFormProps {
  placeholder: string;
  autoCorrect: boolean;
  placeholderTextColor: string;
  keyboardType: KeyboardTypeOptions;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters';
  value: string;
  isPassword?: boolean;
  onChangeText: (text: string) => void;
}

const TextInputForm = ({
  autoCapitalize,
  autoCorrect,
  keyboardType,
  placeholder,
  placeholderTextColor,
  value,
  isPassword = false,
  onChangeText,
}: TextInputFormProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      onChangeText={value => onChangeText(value)}
      secureTextEntry={isPassword}
      value={value}
    />
  );
};

export { TextInputForm };
