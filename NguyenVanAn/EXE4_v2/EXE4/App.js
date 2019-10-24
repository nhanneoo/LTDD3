import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Register from './Register';
import Login from './Login';
import InsertSp from './InsertSanPham';
import DSSP from './DanhSachSP';
import Home from './Home';
import FetchExample from './FetchExample';
import test from './test';

const MainNavigator = createStackNavigator(
    {

        Login: {screen: Login },
        Register: {screen: Register },
        InsertSp: {screen: InsertSp},
        DSSP: {screen: DSSP},
        Home: {screen: Home},
        FetchExample: {screen: FetchExample},
        test: {screen: test}
 
 

    },
    {
        initialRouteName: 'Login',
   

});

const App = createAppContainer(MainNavigator);

export default App;