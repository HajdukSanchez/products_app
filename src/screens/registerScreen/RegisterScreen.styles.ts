import { StyleSheet } from 'react-native';
import { globalStyles } from '../../theme/appTheme';

export const styles = StyleSheet.create({
  keyBoardView: {
    flex: 1,
    backgroundColor: '#5856D6',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    ...globalStyles.title,
  },
  floatingButton: {
    position: 'absolute',
  },
});
