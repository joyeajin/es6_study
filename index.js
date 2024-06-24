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
console.log(child.__proto__);
console.log(Object.getPrototypeOf(child));
