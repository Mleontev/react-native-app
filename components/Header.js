import React from 'react';
import { Header as HeaderNative} from 'react-native-elements';
import { Text } from 'react-native';

export default class Header extends React.Component {
  render() {
    console.log(11111111);
    console.log(this.props.login);
    return (
      <HeaderNative
        containerStyle={{ backgroundColor: '#ff0000' }}
        leftComponent={<Text>Вход в личный кабинет</Text>}
      />
    );
  }
}
