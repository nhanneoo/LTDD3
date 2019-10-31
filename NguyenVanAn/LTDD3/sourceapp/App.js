import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Login from './LoginScreen';
import Register from './Component/Register';

const MainNavigator = createStackNavigator(
    {

        Login: {screen: Login },
        Home: {screen: Home },
        Register: {screen: Register }
    },
    {
        initialRouteName: 'Register',
   

});

const App = createAppContainer(MainNavigator);

export default App;