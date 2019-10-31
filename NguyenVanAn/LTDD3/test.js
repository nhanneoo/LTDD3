
const person = {
    Ten: 'Nguyen Van An',
    Lop: 'CD17TT8',
    Ma:"17211TT3235", 
    Nganh: "Cong nghe thong tin",
    Tuoi: 20,
    Sothich: "Soccer, Game, Watch TV",
  }
const { Ten, Lop, Ma, Nganh, Tuoi, Sothich } = person;
console.log("\tDANH SACH SINH VIEN"); 
console.log("Ho va ten: " + Ten); 
console.log("Lop: "+ Lop); 
console.log("Ma: "+ Ma);
console.log("Nganh: "+ Nganh);
console.log("Tuoi: "+ Tuoi);
console.log(person); 


var other1 = ["Ho va ten: " + Ten + "\t" + "Lop: " +Lop + "\tMa: " + Ma + "\tNganh: " + Nganh + "\tTuoi: " + Tuoi + "\tSo Thich: " + Sothich ];
var params = [ "hello!"].concat(other1);
console.log(params);








