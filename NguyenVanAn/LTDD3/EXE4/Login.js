import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

export default class Login extends Component {
  //state: {password: string, email: string};
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-undef
    this.state = {
      email: '',
      password: '',
    };
  }

  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  render() {

    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.logo}
            source={{ uri: 'https://cdn0.iconfinder.com/data/icons/BrushedMetalIcons_meBaze/512/Apple-03.png' }}>
          </Image>
          <Text style={styles.txtDangnhap}>Đăng nhập</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />
          <Image
            style={styles.inputIcon}
            source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
          <Image
            style={styles.inputIcon}
            source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}
          />
        </View>

        <TouchableOpacity
          style={styles.btnForgotPassword}>
          <Text style={styles.btnText}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.login()}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.btnText}>Đăng kí</Text>
        </TouchableOpacity>
      </View>
    );
  }
  login() {
  const{navigate} = this.props.navigation;
    fetch('http://192.168.100.33/WebSVDrinks/login.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson == 'true') { 
          navigate('Home',{name: 'Jane'});
        } else {
          alert('Login Failed');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3366CC',
  },

  txtDangnhap: {
    color: 'black',
    fontSize: 40,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  logo: {
    marginLeft: 25,
    width: 130,
    height: 120,

  },

  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: '#00b5ec',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
