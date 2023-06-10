import React, { useState, useContext } from 'react';
import { View, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const image = {
  uri: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
};

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <View style={styles.backgroundStyle}>
        <StatusBar color='auto' />

        <ImageBackground
          source={image}
          resizeMode='cover'
          style={styles.image}
          imageStyle={{ opacity: 0.5 }}
        >
          <View>
            <Spacer>
              <Text style={{ alignSelf: 'center', color: 'whitesmoke' }} h3>
                Sign Up For Tracks
              </Text>
            </Spacer>
            <Spacer>
              <Input
                style={styles.inputStyle}
                label='Email'
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
              />
              <Input
                secureTextEntry
                style={styles.inputStyle}
                label='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
              />
              <Button
                title={'Sign Up'}
                buttonStyle={{ backgroundColor: 'dodgerblue' }}
                containerStyle={{ width: '50%', alignSelf: 'center' }}
              />
            </Spacer>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'black',
    height: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60,
  },
  inputStyle: {
    color: 'white',
  },
});

export default SignupScreen;
