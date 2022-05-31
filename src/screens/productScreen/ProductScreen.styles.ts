import { StyleSheet } from 'react-native';
import { globalStyles } from '../../theme/appTheme';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.background,
    flex: 1,
    paddingHorizontal: 20,
  },
  label: {
    marginTop: 15,
    fontSize: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  image: {
    marginVertical: 20,
    justifyContent: 'center',
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
});
