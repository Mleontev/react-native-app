import React from 'react';
import Authorization from '../containers/Authorization';
import List from '../containers/List';
import { connect } from 'react-redux';
import { NativeRouter, Switch, Route } from 'react-router-native';

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact patch="/" component={Authorization} />
          <Route exact patch="/list" component={List} />
        </Switch>
      </NativeRouter>
    );
  }
}

export default connect(state => {
  console.log('state', state);
  return {login: state.login};
})(App);
