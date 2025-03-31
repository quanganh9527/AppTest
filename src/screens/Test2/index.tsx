// import MapboxGL from '@react-native-mapbox-gl/maps';
import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { AppContext } from "../../provider/AppProvider";
// MapboxGL.setAccessToken(
//   'pk.eyJ1IjoiYW50aWtlbiIsImEiOiJja3I1MDhqN3ozMTM1MnZxaGg4bWZlYndvIn0.PeYwMkO2KIs0FvXJg0PcqA',
// );
const Test2 = () => {
  const { insetsDevice } = useContext(AppContext);

  return (
    <View style={[styles.container, { paddingTop: insetsDevice.top }]}>
      {/* <MapboxGL.MapView style={styles.map} /> */}2234
    </View>
  );
};

export default Test2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});
