//---------------class-------------------
class Parent {
  constructor(name) {
    this.name = name;
    // this.sayHi = function () {
    //   console.log("hi");
    // };
  }
  sayHi() {
    console.log("hi");
  }
  sayHello() {
    console.log("hello");
  }
}

let child = new Parent("jo");
// console.log(child.__proto__);
// console.log(Object.getPrototypeOf(child));

//-----------------extends / super-------------------
class GrandFather {
  constructor(name) {
    this.성 = "kim";
    this.이름 = name;
  }
}
let grandFather1 = new GrandFather("hoho");

class Father extends GrandFather {
  constructor(name) {
    super(name);
    this.age = 50;
  }
}
let father1 = new Father("lili");

//-----------------getter / setter-------------------
let person = {
  name: "Park",
  age: 30,
  get nextAge() {
    return this.age + 1;
  },
  set setAge(age) {
    this.age = parseInt(age);
  },
};

console.log((person.setAge = "20"));
console.log(person);
