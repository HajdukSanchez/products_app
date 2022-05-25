import React from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';

import { styles } from './TextInputForm.styles';

interface TextInputFormProps {
  placeholder: string;
  autoCorrect: boolean;
  placeholderTextColor: string;
  keyboardType: KeyboardTypeOptions;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters';
}

const TextInputForm = ({ autoCapitalize, autoCorrect, keyboardType, placeholder, placeholderTextColor }: TextInputFormProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
    />
  );
};

export { TextInputForm };
