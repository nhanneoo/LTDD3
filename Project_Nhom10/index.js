/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Login from './Login';
import Register from './Register';
import {name as appName} from './app.json';
import Splash from './Splash';
import SanPham from './SanPham';
import FetchExample from './FetchExample';
import InsertSanPham from "./InsertSanPham";
import App from './App';
import Home from './Home';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {currentScreen: 'Splash'};
    //console.log('asd');
    setTimeout(() => {
      this.setState({currentScreen: 'App'});
    }, 1000);
  }
  render() {
    const {currentScreen} = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <App/>;
    return mainScreen;
  }
}
AppRegistry.registerComponent(appName, () => Main);
