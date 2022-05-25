import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './Button.styles';

interface ButtonProps {
  text: string;
  withBorder?: boolean;
  onPress: () => void;
}

const Button = ({ text, withBorder = true, onPress }: ButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} style={{ ...styles.button, borderWidth: withBorder ? styles.button.borderWidth : 0 }} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Button };
