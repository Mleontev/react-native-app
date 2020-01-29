import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { Input } from 'react-native-elements';

export default class Authorization extends React.Component {
  static navigationOptions = {
    title: 'Вход в личный кабинет',
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTitleStyle: {
      color: 'white',
    },
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    const { text } = this.state;
    const { signIn, dispatch, navigation } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.title}>Вход</Text>
        <Text style={styles.text}>
          Согласно классификации М. Вебера, форма политического сознания
          предсказуема. Политическая психология, согласно традиционным
          представлениям, символизирует системный культ личности. Согласно
          классификации М. Вебера, форма политического сознания предсказуема.
          Политическая психология, согласно традиционным представлениям,
          символизирует системный культ личности. Согласно классификации М.
          Вебера, форма политического сознания предсказуема.
        </Text>
        <Input
          placeholder="Логин"
          label="Логин"
          containerStyle={styles.input}
          labelStyle={styles.label}
          onChangeText={text => this.setState({text})}
        />
        <Input
          placeholder="Пароль"
          containerStyle={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(signIn(text));
            return navigation.navigate('Li');
          }}>
          <Text style={styles.textButton}>Войти</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  button: {
    marginTop: 17,
    borderWidth: 1,
    width: 250,
    backgroundColor: 'red',
    borderRadius: 8,
  },
  label: {
    fontSize: 15,
    color: 'darkgray',
    fontWeight: 'normal',
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 60,
    marginBottom: 30,
  },
  text: {
    textAlign: 'center',
    color: 'darkgray',
    fontSize: 15,
    marginBottom: 25,
  },
  input: {
    paddingLeft: 60,
    paddingRight: 60,
    marginBottom: 10,
  },
  textButton: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
});
