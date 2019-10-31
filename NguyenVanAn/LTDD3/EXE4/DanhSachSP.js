import React, { Component } from 'react';
import { View } from 'react-native';
import SanPham from './SanPham';

export default class DanhSachSP extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
         <SanPham maSP ='SP01' tenSP= "Tra sua" img = 'https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg'></SanPham>
         <SanPham maSP ='SP02' tenSP= "Coffee" img = 'https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg'></SanPham>
         <SanPham maSP ='SP03' tenSP= "Nuoc uong" img = 'https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg'></SanPham>
      </View>
    );
  }
}
