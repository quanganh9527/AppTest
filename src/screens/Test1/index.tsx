import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {
  deviceWidth,
  getDataFromAsyncStorage,
  saveDataToAsyncStorage,
} from '../../helper';
import {AppContext} from '../../provider/AppProvider';
import {fetchAPI} from '../../services';
import Header from './Header';
import Modal from './Modal';

const keyExtractor = ({name}, index) => `${name}_${index}`;
const Test1 = () => {
  const {insetsDevice, isConnected} = useContext(AppContext);
  const refModal = useRef(null);
  const getAnimals = async () => {
    const value = await getDataFromAsyncStorage('animals').then(res =>
      res ? JSON.parse(res) : [],
    );
    setAnimals(value);
  };

  const fetchData = async () => {
    const data = await fetchAPI();
    saveDataToAsyncStorage('animals', data);
    setAnimals(data);
    return data;
  };

  const [animals, setAnimals] = useState([]);
  const [size, setSize] = useState(Dimensions.get('window').width);
  const [numberColumn, setNumberColumn] = useState(3);

  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      console.log('change dimension');
      if (width < height) {
        setSize(width);
        setNumberColumn(3);
      } else {
        setSize(height);
        setNumberColumn(5);
      }
    });
  }, []);

  useEffect(() => {
    if (isConnected) {
      fetchData();
    } else {
      getAnimals();
    }
  }, []);

  const openModal = label => {
    refModal.current.onOpen();
    refModal.current.label = label;
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    const {name, url} = item;
    return (
      <View style={styles.containerItem}>
        <TouchableOpacity onPress={() => openModal(name)}>
          <Image
            style={{width: size / 3 - 20, height: size / 3 - 20}}
            source={{uri: url}}
          />
        </TouchableOpacity>
        <Text>{name}</Text>
      </View>
    );
  };

  // console.log('animals', animals);
  return (
    <View style={[styles.container, {paddingTop: insetsDevice.top}]}>
      <Modal ref={refModal} />
      <Header onPressQuestion={() => openModal('Species details')} />
      <FlatList
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={numberColumn}
        key={numberColumn}
        extraData={[size, animals]}
        data={animals}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Test1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  photo: {
    height: deviceWidth / 3 - 20,
    width: deviceWidth / 3 - 20,
  },
  containerItem: {
    // justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    // marginHorizontal: 50,
    // marginVertical: 10,
  },
  columnWrapperStyle: {
    marginHorizontal: 7,
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});
