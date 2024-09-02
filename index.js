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

// console.log((person.setAge = "20"));
// console.log(person);

//-----------------class, extends, getter, setter 연습문제-------------------

class Puppy {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  eat1year() {
    if (this instanceof Cat) {
      this.age++;
      return this.age;
    }
  }
}

let puppy1 = new Puppy("말티즈", "white");
let puppy2 = new Puppy("진돗개", "brown");

// console.log(puppy1.eat1year());
class Cat extends Puppy {
  constructor(type, color, age) {
    super(type, color);
    this.age = age;
  }
}

let cat1 = new Cat("코숏", "white", 5);
let cat2 = new Cat("러시안블루", "brown", 5);
// console.log(cat1.eat1year());

class Unit {
  constructor() {
    this.공격력 = 5;
    this.체력 = 100;
  }
  get battlePoint() {
    return this.공격력 + this.체력;
  }
  set heal(num) {
    this.체력 = this.체력 + num;
  }
}

const aa = new Unit();
aa.heal = 50;
// console.log(aa);

let data = {
  odd: [1, 3],
  even: [2, 4, 6],
  setter: function (...num) {
    num.forEach((ele) => {
      if (ele % 2 == 1) {
        this.odd.push(ele);
      } else {
        this.even.push(ele);
      }
    });
  },
  // getter: function (...num) {
  //   num.sort((a, b) => a - b);
  // },
  get getter() {
    return [...this.odd, ...this.even].sort((a, b) => a - b);
  },
};
// data.setter(1, 2, 3, 4, 5);
// console.log(data.getter);

// console.log(data.setter(1,2,3,4));

//-----------------Destructuring -------------------
// const [a, b, c = 5] = [2, 3];

// let { name, age } = { name: "kim", age: 30 };

let name = "kim";
let age = 30;
let obj = { name, age };
// console.log(obj);

var [number, address] = [30, "seoul"];
var { address: a, number = 20 } = { address, number };
// console.log(number);

let 신체정보 = {
  body: {
    height: 190,
    weight: 70,
  },
  size: ["상의 Large", "바지 30인치"],
};

// let [height, weight, 상의사이즈, 하의사이즈] = [
//   신체정보.body.height,
//   신체정보.body.weight,
//   신체정보.size[0],
//   신체정보.size[1],
// ];

let {
  body: { height, weight },
  size: [상의사이즈, 하의사이즈],
} = 신체정보;

console.log(height, weight, 상의사이즈, 하의사이즈);
