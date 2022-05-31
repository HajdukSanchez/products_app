import { StyleSheet } from 'react-native';
import { globalStyles } from '../../theme/appTheme';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.background,
    flex: 1,
    paddingHorizontal: 20,
  },
  product: {},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  productText: {
    ...globalStyles.label,
    marginTop: 0,
    marginLeft: 10,
    fontSize: 15,
  },
  productCategory: {
    marginTop: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'lightgrey',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
  },
  productPrice: {
    ...globalStyles.label,
    marginTop: 0,
    fontSize: 20,
  },
  separator: {
    marginVertical: 10,
    borderColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
  },
  headerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 100,
  },
  headerButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
