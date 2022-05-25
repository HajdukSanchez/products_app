import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './Button.styles';

interface ButtonProps {
  text: string;
  withBorder?: boolean;
}

const Button = ({ text, withBorder = true }: ButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} style={{ ...styles.button, borderWidth: withBorder ? styles.button.borderWidth : 0 }}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Button };
