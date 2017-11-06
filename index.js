import App from './app/App';
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';



export default class Scribbledpoem extends Component {
  render() {
    return (
      <App />
    );
  }
}
AppRegistry.registerComponent('scribbledpoems', () => Scribbledpoem);
