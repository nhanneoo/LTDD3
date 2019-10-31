import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
export default class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={styles.down}>
            <View style={styles.loginButtonTitle}>
          <Text>Details Screen</Text>
          <Button style={styles.loginButton}
          title="Go to Mua Hang"
          onPress={() => this.props.navigation.navigate('MuaHang')}
        />
        </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    product: {
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: 'green',
      width: 400,
      height: 110,
      marginBottom : 10
    },   
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: "rgba(92, 99,216, 1)"
    },
    up: {
      flex: 3,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    down: {
      flex: 7,//70% of column
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    title: {
      color: 'white',
      color: 'rgb(255,119,34)',
      textAlign: 'center',
      width: 400,
      fontSize: 23
    },
    textInputContainer: {
      paddingHorizontal: 10,
      borderRadius: 6,
      marginBottom: 20,
   backgroundColor: 'rgb(221, 97, 97)'  },
    textInput: {
      width: 280,
      height: 45,
      margin: 100,
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
    loginButtonTitle: {
      fontSize: 18,
      color: 'white'
    },
    divider: {
     
      height: 40,
      width: 298,
      justifyContent: 'center',
      alignItems: 'center'
    } 
});

