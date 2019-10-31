/* eslint-disable no-unused-vars */

// WeakMap
// Khởi tạo
var weak = new WeakMap();

// h Danh sáckey
var key1 = {};
var key2 = {};

// Thêm phần tử
weak.set(key1, "Giá trị 01");
weak.set(key2, "Giá trị 02");

// Lấy giá trị
console.log(weak.get(key1));
console.log(weak.get(key2));

// Kiểm tra tồn tại
var other_key = {};
console.log(weak.has(key1));
console.log(weak.has(other_key));

// Xóa phần tử
weak.delete(key1);


var PhepToan = (a, b) => {
  var pheptinh = a + b;
  console.log("Phép Cộng: " + pheptinh);
  var pheptinh2 = a - b;
  console.log("Phép Trừ: " + pheptinh2);
  var pheptinh3 = a * b;
  console.log("Phép Nhân: " + pheptinh3);
  var pheptinh4 = a / b;
  console.log("Phép Chia: " + pheptinh4);
};

PhepToan(5, 2);






