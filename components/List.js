import React from 'react';
import { View, Button } from 'react-native';

export default class Header extends React.Component {
  render() {
    const { lists } = this.props;
    return lists.map(item => <Button key={item.id} title={item.title} />);
  }
}
