import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';

export const storeData = async (key: any, value: any) =>
  await AsyncStorage.setItem(key, value);

export const getStoredData = async (key: string): Promise<any> => {
  const response = await AsyncStorage.getItem(key);
  return response != null ? JSON.parse(response) : null;
};
