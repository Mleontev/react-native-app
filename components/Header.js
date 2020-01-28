import React from 'react';
import { Header as HeaderNative } from 'react-native-elements';
import { Text, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <HeaderNative
        placement="left"
        containerStyle={styles.container}
        leftComponent={<Text style={styles.text}>Вход в личный кабинет</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: 22,
    color: 'white',
    marginBottom: 10,
  },
});
