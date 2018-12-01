import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import configStore from './src/Redux/ConfigStore';

const store = configStore();

class RNRedux extends React.Component {
    render() {
      return (
        <Provider store={store}>
            <App />
        </Provider>
      )
    }
}

AppRegistry.registerComponent('placesMobileApp', () => RNRedux);
