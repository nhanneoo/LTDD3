// Hàm này có tác dụng sao chép thuộc tính của các đối tượng sources vào target
const a = { name: 'foo' }
const b = Object.assign({}, a, { name: 'bar', age: 1 }, { id: 9 })
console.log(b) // { name: 'bar', age: 1, id: 9 }

//
const developer = {
    firstName: 'Nhân',
    lastName: 'Phạm Văn',
    developer: true,
    age: 20,
  }
const { firstName, lastName } = developer;
console.log(firstName);
console.log(lastName);
console.log(developer);

//Arow
var hello = (name, massage) =>{
    console.log("Chào " + name + ", bạn thật " + massage);
};
hello('Nhân', 'đẹp trai quá đi')

// dem so
function Person() {
    this.age = 0;
    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}
var user = new Person();

