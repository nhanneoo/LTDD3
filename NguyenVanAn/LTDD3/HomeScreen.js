import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null 
};
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.up}>
           <Text style={styles.title}>
              Demo Flexbox
          </Text>
          </View>

      <View style={styles.container}>
        <View style={styles.down}>
          <View style={styles.loginButtonTitle}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle} onPress={() => this.props.navigation.navigate('Details')}>Details</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle} onPress={() => this.props.navigation.navigate('MuaHang')}>Mua Hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle} onPress={() => this.props.navigation.navigate('FlatList')}>List View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(92, 99,216, 1)"
  },
  up: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    //flex: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    color: 'rgb(255,119,34)',
    textAlign: 'center',
    //width: 400,
    fontSize: 23
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgb(221, 97, 97)'
  },
  
  loginButton: {
    width: 200,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

    backgroundColor: 'rgb(221, 97, 97)'
  },
  title: {
    color: 'white',
    color: 'rgb(255,119,34)',
    textAlign: 'center',
    width: 400,
    fontSize: 23
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },
  
});
