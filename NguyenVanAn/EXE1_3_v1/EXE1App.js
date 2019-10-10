import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import EXE1 from './EXE1.js';
import Touch from './Touch.js';
import Cart from './MuaHang.js';
import Login from './Login.js';

const MainNavigator = createStackNavigator(
    {
        Login: {screen: Login },
        Home: {screen: EXE1 },
        Touch: {screen: Touch},
        Cart: {screen: Cart},

    },
    {
        initialRouteName: 'Home',
   

});

const App = createAppContainer(MainNavigator);

export default App;