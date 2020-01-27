import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    const { text } = this.state;
    const { signIn, dispatch, login } = this.props;
    console.log('login', login);
    
    return (
      <View style={styles.container}>
        <Text style={{color: 'red', fontWeight: 'bold', fontSize: 60}}>
          Вход
        </Text>
        <Text style={{textAlign: 'center', color: 'darkgray', fontSize: 15}}>
          Согласно классификации М. Вебера, форма политического сознания
          предсказуема. Политическая психология, согласно традиционным
          представлениям, символизирует системный культ личности
        </Text>
        <Text style={{fontSize: 15, color: 'darkgray', textAlign: 'auto'}}>
          Логин
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 250}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Пароль"
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 250}}
        />
        <Button
          title="Войти"
          color="red"
          onPress={() => dispatch(signIn(text))}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
