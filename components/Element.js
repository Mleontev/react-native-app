import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default class Element extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'График',
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: 'white',
      },
      headerRight: () => (
        <Text style={styles.loginText}>{navigation.getParam('log')}</Text>
      ),
    };
  };
  
  logOut = () => {
    const { navigation, dispatch, signOut, login } = this.props;
    dispatch(signOut(login));
    navigation.navigate('Auth');
  };

  back = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>{navigation.getParam('title')}</Text>
          <Text style={styles.desc}>{navigation.getParam('desc')}</Text>
        </View>
        <View style={styles.containerTwo}>
          <TouchableOpacity style={styles.buttonBack} onPress={this.back}>
            <Text style={styles.textBack}>Назад</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogOut} onPress={this.logOut}>
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
    fontSize: 17,
    color: 'red',
    textAlign: 'center',
    paddingTop: 5,
  },
  textLogOut: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    paddingTop: 7,
  },
  title: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 20,
  },
  desc: {
    color: 'gray',
    fontSize: 20,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  loginText: {
    fontSize: 22,
    color: 'white',
    paddingRight: 8,
  },
});
