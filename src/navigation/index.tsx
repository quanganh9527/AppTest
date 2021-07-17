import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Test1, Test2} from '../screens/index';
const BottomTab = createMaterialBottomTabNavigator();
const RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Test1" barStyle={styles.tabBar}>
        <BottomTab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Test1"
          component={Test1}
        />
        <BottomTab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="home-city"
                color={color}
                size={26}
              />
            ),
          }}
          name="Test2"
          component={Test2}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigationContainer;
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#440778',
  },
});
