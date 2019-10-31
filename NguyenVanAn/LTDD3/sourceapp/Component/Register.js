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

export default class SignUp extends Component {
  // state: {
  //   password: string,
  //   email: string,
  //   hoten: string,
  //   sdt: string,
  //   password1: string,
  // };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hoten: '',
      sdt: '',
      password1: '',
    };
  }

  register() {
    fetch('http://10.0.2.2:8888/WebSV/Register.php', {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        hoten: this.state.hoten,
        sdt: this.state.sdt,
        //password1: this.state.password1,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson == 'true') {
          alert('Đăng kí thành công');
        } else {
          alert('Đăng kí thất bại');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  //onClickListener = viewId => {
  //Alert.alert('Alert', 'Button pressed ' + viewId);
  //};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Họ Tên"
            underlineColorAndroid="transparent"
            onChangeText={hoten => this.setState({hoten})}
          />
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                'https://img.icons8.com/color/40/000000/circled-user-male-skin-type-3.png',
            }}
          />
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
            source={{
              uri:
                'https://img.icons8.com/flat_round/40/000000/secured-letter.png',
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Số điện thoại"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={sdt => this.setState({sdt})}
          />
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                'https://www.iconbunny.com/icons/media/catalog/product/1/6/168.9-phone-icon-iconbunny.jpg',
            }}
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
            source={{
              uri: 'https://img.icons8.com/color/40/000000/password.png',
            }}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Nhập lại mật khẩu"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password1 => this.setState({password1})}
          />
          <Image
            style={styles.inputIcon}
            source={{
              uri: 'https://img.icons8.com/color/40/000000/password.png',
            }}
          />
        </View> */}

        <TouchableOpacity
          style={styles.btnByRegister}
          onPress={() => this.onClickListener('restore_password')}>
          <Text style={styles.textByRegister}>
            Đồng ý với điểu khoảng của chúng tôi
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.register()}>
          <Text style={styles.loginText}>Đăng kí</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.onClickListener('register')}>
          <Text style={styles.btnText}>Quay lại</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,128,192)',
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
  btnByRegister: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
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
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  textByRegister: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
