import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class PromotionComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let tabBarLabel = 'Home';
    let tabBarIcon = () => (
      <Image
        //source={require('./../../images/new.png')}
        style={{ width: 26, height: 26, tintColor: '#e97600' }}
      />
    );
    return { tabBarLabel, tabBarIcon };
  }
  
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#e97600',
        alignItems: 'center',
        justifyContent: 'center'
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>This is Promotion Screen</Text>
      </View>
    );
  }
}