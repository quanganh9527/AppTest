import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Main from './src/main';
const App = () => {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
};

export default App;
