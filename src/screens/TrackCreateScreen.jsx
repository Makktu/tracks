import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestForegroundPermissionsAsync } from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      setErr(null);
    } catch (e) {
      console.log(e);
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
  // const { granted } = await requestForegroundPermissionsAsync();
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.container} h2>
        TrackCreateScreen
      </Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignSelf: 'center',
  },
});

export default TrackCreateScreen;
