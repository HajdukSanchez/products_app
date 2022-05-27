import { StyleSheet } from 'react-native';
import { globalStyles } from '../../theme/appTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.background,
  },
  title: {
    ...globalStyles.title,
  },
  text: {
    ...globalStyles.label,
    marginVertical: 20,
    marginHorizontal: 40,
  },
});
