import React, { Component } from 'react';
import {StyleSheet, FlatList, StyleSheet, Text, View } from 'react-native';
import SanPham from './SanPham';



export default class DemoFlatlist extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <FlatList
          data={arraySanPham}
          renderItem={({item}) =>
          <SanPham maSP = {item.masp} tenSP= {item.tensp} img = {item.hinhAnh}></SanPham>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    red:{
        color: 'red',
        fontSize: 20,
    },
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
