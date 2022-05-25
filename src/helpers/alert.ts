import { Alert } from 'react-native';

export const handleAlert = (title: string, message: string, buttonText: string, onPress: () => void) => {
  Alert.alert(title, message, [{ text: buttonText, onPress }]);
};
