import { Input, Text, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Spacer from './Spacer';

export default function AuthForm({
  headerText,
  errorMessage,
  buttonText,
  onSubmit,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text style={{ alignSelf: 'center', color: 'whitesmoke' }} h3>
          {headerText}
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
        {errorMessage ? (
          <Text style={styles.errorStyle}>{errorMessage}</Text>
        ) : null}
        <Button
          title={buttonText}
          buttonStyle={{ backgroundColor: 'dodgerblue' }}
          containerStyle={{ width: '50%', alignSelf: 'center' }}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
}

const styles = StyleSheet.create({
  errorStyle: {
    color: 'red',
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  inputStyle: {
    color: 'white',
  },
});
