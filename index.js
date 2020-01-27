/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './containers/Authorization';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/app';

const store = createStore(reducer);

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
