import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const useStorage = () => {
  const [data, setData] = useState<string>();

  const setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setData(value);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { data, setItem, getItem };
};

export { useStorage };
