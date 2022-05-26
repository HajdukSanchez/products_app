import axios from 'axios';

const baseURL: string = 'https://react-native-products-app-jhs.herokuapp.com/api';
const API = axios.create({ baseURL });

export { API };
