
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Exe1 from './Exe1';
import DangNhap from './Dangnhap';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  e1: {screen: Exe1},
  DangNhap: {screen: DangNhap},
    initialRouteName: 'DangNhap',
});



const App = createAppContainer(MainNavigator);

export default App;