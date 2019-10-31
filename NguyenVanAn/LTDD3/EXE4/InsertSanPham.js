/* eslint-disable no-alert */
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
  //   masp: string,
  //   title: string,
  //   image: string,
  //   price: string,
  // };
  constructor(props) {
    super(props);
    this.state = {
      masp: '',
      title: '',
      image: '',
      price: '',
      ActivityIndicator_Loading: false,
    };
  }

  insertSP() {
    fetch('http://192.168.100.33/WebSVDrinks/Insert_SanPham.php', {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        masp: this.state.masp,
        title: this.state.title,
        image: this.state.image,
        price: this.state.price,
      }),
    })
      .then(response => response.json())
      .then(responseJsonFromServer => {
        alert(responseJsonFromServer);
        this.setState({ActivityIndicator_Loading: false});
      })
      .catch(error => {
        console.log(error);
        this.setState({ActivityIndicator_Loading: false});
      });
  }

  //onClickListener = viewId => {
  //Alert.alert('Alert', 'Button pressed ' + viewId);
  //};

  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          style={styles.TextInputStyleClass}
          placeholder="Nhập mã sản phẩm"
          underlineColorAndroid="transparent"
          onChangeText={masp => this.setState({masp})}
        />

        <TextInput
          style={styles.TextInputStyleClass}
          placeholder="Nhập tên sản phẩm"
          underlineColorAndroid="transparent"
          onChangeText={title => this.setState({title})}
        />

        <TextInput
          style={styles.TextInputStyleClass}
          placeholder="Nhập tên hình ảnh"
          underlineColorAndroid="transparent"
          onChangeText={image => this.setState({image})}
        />
        <TextInput
          style={styles.TextInputStyleClass}
          placeholder="Nhập giá sản phẩm"
          underlineColorAndroid="transparent"
          onChangeText={price => this.setState({price})}
        />

        <TouchableOpacity
          style={[styles.TouchableOpacityStyle]}
          onPress={() => this.insertSP()}>
          <Text style={styles.TextStyle}>Thêm sản phẩm</Text>
        </TouchableOpacity>
        {this.state.ActivityIndicator_Loading ? (
          <ActivityIndicator
            color="#009688"
            size="large"
            style={styles.ActivityIndicatorStyle}
          />
        ) : null}
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
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#009688',
    marginBottom: 20,
    width: '90%',
  },
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
},

  TextInputStyleClass: {
    textAlign: 'center',
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 7,
    marginBottom: 10,
    width: '95%',
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
