// type: alias
type PointAlias = {
  x: number;
  y: number;
};

// type: interface
interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 323, y: 3324 };

// type: interface with optional & readonly properties & methods
interface Person {
  readonly id: number; // readonly
  first: string;
  last: string;
  nickname?: string; // optional
  sayHi?: () => string; // method
  sayHello?(): string; // method
}

let personA: Person = {
  id: 397287438,
  first: "Hla",
  last: "Yin",
  nickname: "Pinky", // optional
};

personA.nickname = "Pigy";
// personA.id = 382; // Error: readonly property

let personB: Person = {
  id: 2384774,
  first: "Hnin",
  last: "Mya",
  // omitted optional interface property: nickname
  sayHi: () => `Hello, ${this.first} ${this.last}`,
};

// Interface Methods with Parameters
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    // const newPrice = this.price * (1 - amount);
    // this.price = newPrice;
    // return this.price;
    return this.price * (1 - amount);
  },
};

console.log(shoes.applyDiscount(0.4));

// Re-opening Interfaces
// a) Difining type: interface Dog
interface Dog {
  name: string;
  age: number;
}

// b) Re-opening interface Dog (Not overwriting or redeclaring)
interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "Woof Woof!";
  },
};

// Extending Interfaces (Inheritance)
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "guide dog",
};

// Interface Multiple Inheritance
interface Employee {
  email: string;
}

interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}

const paingSoe: Engineer = {
  id: 775639,
  first: "Paing",
  last: "Chit",
  level: "mid-level",
  email: "paingchit@gmail.com",
  languages: ["Myanmar", "English", "Japanese"],
};
