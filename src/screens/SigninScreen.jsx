import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signIn, clearErrorMessage } = useContext(Context);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Sign in to your account'
        errorMessage={state.errorMessage}
        onSubmit={signIn}
        buttonText='Sign in'
      />
      <NavLink
        theText="Don't have account? Sign up instead"
        routeName='Signup'
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return { header: () => false };
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: '35%',
  },
});

export default SigninScreen;
