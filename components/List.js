import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Header extends React.Component {
  render() {
    const {lists} = this.props;
    return lists.map(item => (
      <TouchableOpacity style={styles.button}>
        <Text key={item.id} style={styles.text}>
          {item.title}
        </Text>
      </TouchableOpacity>
    ));
  }
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    margin: 10,
    width: '95%',
    textAlign: 'left',
    backgroundColor: 'white',
    padding: 15,
  },
  text: {
    fontSize: 22,
  },
});
