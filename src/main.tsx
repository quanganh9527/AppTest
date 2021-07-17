import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigationContainer from './navigation';
import AppProvider from './provider/AppProvider';

const Main = () => {
  return (
    <AppProvider>
      <>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <RootNavigationContainer />
      </>
    </AppProvider>
  );
};

export default Main;
