import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const image = {
  uri: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
};

const SignupScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);

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
          <AuthForm
            headerText='Sign Up for Tracker'
            errorMessage={state.errorMessage}
            buttonText='Sign Up'
            onSubmit={signUp}
          />
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Spacer>
                <Button
                  title={'Already Registered? Sign In instead'}
                  buttonStyle={{ backgroundColor: 'darkgreen' }}
                  style={styles.link}
                  onPress={() => navigation.navigate('Signin')}
                />
              </Spacer>
            </TouchableOpacity>
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

  link: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default SignupScreen;
