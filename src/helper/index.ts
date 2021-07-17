import AsyncStorage from '@react-native-community/async-storage';
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const saveDataToAsyncStorage = (key: string, value: any) => {
	const data = JSON.stringify(value);
	try {
		return AsyncStorage.setItem(key, data);
	} catch (e) {
		console.log('Failed to save the data to the storage', e);
	}
};
const getDataFromAsyncStorage = async (key: string) => {
	const value = await AsyncStorage.getItem(key);
	return value;
};
export {
	deviceHeight,
	deviceWidth,
	getDataFromAsyncStorage,
	saveDataToAsyncStorage,
};
