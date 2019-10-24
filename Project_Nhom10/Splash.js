import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./img/logo.png')} />
        <Text style={styles.title}> EXE3_Nguyen_Cong_Nhan </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255,128,192)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
      color: 'white'
  },
  logo: {
    width: 250,
    height: 250,
  },
});
