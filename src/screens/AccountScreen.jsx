import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.containerStyle} forceInset={{ top: 'always' }}>
      <Text style={styles.headerStyle}>Your Account</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signOut} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 30,
  },
  headerStyle: {
    fontSize: 48,
    alignSelf: 'center',
  },
});

export default AccountScreen;
