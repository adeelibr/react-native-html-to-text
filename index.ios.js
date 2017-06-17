import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import MainPage from './app/MainPage';

export default class HtmlText extends Component {
  render() { return (<MainPage />) }
}

AppRegistry.registerComponent('HtmlText', () => HtmlText);
