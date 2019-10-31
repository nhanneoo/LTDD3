import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import EXE1 from './EXE1.js';
import Detail from './DetailsScreen';
import Login from './LoginScreen';

const MainNavigator = createStackNavigator(
    {

        Login: {screen: Login },
        Home: {screen: EXE1 },
        Detail: {screen: Detail }
 

    },
    {
        initialRouteName: 'Login',
   

});

const App = createAppContainer(MainNavigator);

export default App;