import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('error');
  }
};

export const getStoredData = async (key: string): Promise<any> => {
  try {
    const response = await AsyncStorage.getItem(key);
    return response != null ? JSON.parse(response) : null;
  } catch (e) {
    // error reading value
    console.error();
  }
};
