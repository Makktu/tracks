import React from 'react';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';

const NavLink = ({ navigation, theText, routeName }) => {
  return (
    <Spacer>
      <Button
        style={styles.link}
        title={theText}
        buttonStyle={{ backgroundColor: 'darkgreen' }}
        onPress={() => navigation.navigate(routeName)}
      />
    </Spacer>
  );
};

const styles = StyleSheet.create({
  link: {
    marginHorizontal: 10,
    fontSize: 16,
    backgroundColor: 'green',
  },
});

export default withNavigation(NavLink);
