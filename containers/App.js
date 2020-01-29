import React from 'react';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Authorization from '../containers/Authorization';
import List from '../containers/List';
import Element from '../containers/Element';

const RootStack = createStackNavigator(
  {
    Auth: Authorization,
    Li: List,
    Elem: Element,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default connect(state => {
  return {login: state.login};
})(App);
