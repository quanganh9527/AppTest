import NetInfo from '@react-native-community/netinfo';
import React, {useEffect, useState} from 'react';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

type IAppContext = {
  isConnected: boolean;
  insetsDevice: EdgeInsets;
};

export const AppContext = React.createContext<IAppContext>(undefined);

const AppProvider = (props) => {
  const insetsDevice = useSafeAreaInsets();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isConnected,
        insetsDevice,
      }}>
      {props.children && React.Children.only(props.children)}
    </AppContext.Provider>
  );
};

export default AppProvider;
