import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default class Element extends React.Component {
  static navigationOptions = {
    title: 'График',
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: 'white',
    },
  };
  render() {
    const { navigation, dispatch, login, signOut } = this.props;
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>{navigation.getParam('title')}</Text>
          <Text style={styles.desc}>{navigation.getParam('desc')}</Text>
        </View>
        <View style={styles.containerTwo}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => navigation.goBack()}>
            <Text style={styles.textBack}>Назад</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLogOut}
            onPress={() => {
              dispatch(signOut(login));
              return navigation.navigate('Auth');
            }}>
            <Text style={styles.textLogOut}>Выйти из аккаунта</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerTwo: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonBack: {
    borderColor: 'red',
    borderWidth: 3,
    width: 207,
    height: 45,
    backgroundColor: 'white',
  },
  buttonLogOut: {
    borderColor: 'red',
    borderWidth: 1,
    width: 207,
    height: 45,
    backgroundColor: 'red',
  },
  textBack: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    paddingTop: 4,
  },
  textLogOut: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    paddingTop: 6,
  },
  title: {
    fontSize: 25,
    margin: 10,
  },
  desc: {
    color: 'gray',
    fontSize: 20,
    textAlign: 'left',
    padding: 10,
  },
});
