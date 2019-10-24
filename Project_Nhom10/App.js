import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from "./Login";
import FetchExample from './FetchExample';
import Splash from './Splash';
import SanPham from './SanPham';
import InsertSanPham from "./InsertSanPham";
import Register from './Register';
import Home from './Home';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  FetchExample: {screen: FetchExample},
  Splash: {screen: Splash},
  SanPham: {screen: SanPham},
  Register: {screen: Register},
  Home: {screen: Home},
  InsertSanPham: {screen: InsertSanPham},
});

const App = createAppContainer(MainNavigator);

export default App;
