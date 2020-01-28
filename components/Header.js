import React from 'react';
import { Header as HeaderNative} from 'react-native-elements';
import { Text } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <HeaderNative
        containerStyle={{ backgroundColor: '#ff0000' }}
        leftComponent={<Text>Вход в личный кабинет</Text>}
      />
    );
  }
}
