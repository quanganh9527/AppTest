import React from 'react';
import {
  Image,
  platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import {icon} from '../../assets';
const toolbarHeight = platform === 'ios' ? 64 : 56;
const hitSlop = {right: 7, left: 7, bottom: 7, top: 7};
type Props = {
  onPressQuestion: () => void;
};
const Header = (props: Props) => {
  const {onPressQuestion} = props;
  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <Feather name="menu" size={26} />
        <Text style={styles.label}>Find the butterflies!</Text>
      </View>
      <View style={styles.horizontal}>
        <TouchableOpacity
          onPress={onPressQuestion}
          style={styles.icon}
          hitSlop={hitSlop}>
          <EvilIcons name="question" size={26} />
        </TouchableOpacity>
        <Image source={icon.butterfly} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: toolbarHeight,
    elevation: 3,
    shadowOffset: {width: 0, height: 2},
    top: 0,
    left: 0,
    right: 0,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    paddingLeft: 20,
  },
  icon: {
    paddingRight: 10,
  },
});
