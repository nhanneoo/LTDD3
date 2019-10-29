import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  StatusBar
} from 'react-native';

var URL = "http://192.168.97.2:81/shirt/LoadData.php"

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.dataSource({rowHasChanged:(r1, r2) => r1 !== r2})
    }
  }

  fetchData(){
      fetch(URL, {method: "POST", body: null})
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseData)
          });
      })
      .done()
  }

  componentDidMount(){
      this.fetchData();
  }

  taohang(property){
    return(
        <View style={styles.hang}>
        <View style={styles.hienthi}>
            <Text>{property.title}</Text>
        </View>
        <View style={styles.hienthi}>
            <Text>{property.price}</Text>
        </View>
         </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
          <StatusBar hidden = {true} />
          <view style = {styles.danhsach}>
              <ListView dataSource={this.state.dataSource}
              renderRow={this.taohang}/>
          </view>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    danhsach: {
        flex: 1
    },
    hang: {
        flexDirection: 'column',
        flex: 1
    }, 
    hienthi: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

AppRegistry.registerComponent('PhamVanNhan', () => PhamVanNhan)
