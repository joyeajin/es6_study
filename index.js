function Machine(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = `안녕하세요 ${name}입니다.`;
}

Machine.prototype.gender = "male";

let student1 = new Machine("kim", 15);
let student2 = new Machine("jo", 14);

student1.toString();

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.부가세 = function () {
    console.log(this.price * 0.1);
  };
}

let product1 = new Product("shirts", 50000);

let parent = { name: "kim" };
let child = {};
child.__proto__ = parent;
