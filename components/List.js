import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

export default class Header extends React.Component {
  static navigationOptions = {
    title: 'Список',
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTitleStyle: {
      color: 'white',
    },
  };
  render() {
    const {lists, navigation} = this.props;
    return (
      <View style={styles.container}>
        {lists.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.button}
            onPress={() => {
              navigation.navigate('Elem', {
                title: item.title,
                desc: item.description,
              });
            }}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
