import React from 'react';
import Authorization from '../containers/Authorization';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return <Authorization />;
  }
}

export default connect(state => {
  console.log('state', state);
  return {login: state.login};
})(App);
