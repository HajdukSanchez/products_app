import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseURL: string = 'https://react-native-products-app-jhs.herokuapp.com/api';
const API = axios.create({ baseURL });

// Those are the Middlewares
API.interceptors.request.use(async ({ headers }) => {
  const token = await AsyncStorage.getItem('TOKEN');
  console.log({ token });
  if (token) {
    headers = { ...headers, 'x-token': token };
  }
  return headers;
});

export { API };
