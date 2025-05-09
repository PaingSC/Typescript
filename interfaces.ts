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
personA.id = 382; // Error: readonly property

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
    const newPrice = this.proce * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));
