import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];
  for (let a = 0; a < 20; a++) {
    if (a % 2 === 0) {
      points.push({
        latitude: 52.38868556905321 + a * 0.001,
        longitude: -1.4619245190814745 + a * 0.001,
      });
    } else {
      points.push({
        latitude: 52.38868556905321 - a * 0.002,
        longitude: -1.4619245190814745 - a * 0.001,
      });
    }
  }
  return (
    <View>
      <Text>Ich bin ein Map</Text>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 52.38868556905321,
          longitude: -1.4619245190814745,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004,
        }}
      >
        <Polyline coordinates={points} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 300,
  },
});

export default Map;
