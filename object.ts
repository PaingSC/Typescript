function printNmae(name: { first: string; last: string }) {
  console.log(`${person.first} ${person.last}`);
}
printNmae({ first: "Thomas", last: "Edison" });
// printNmae({ first: "Thomas", age: 33, last: "Edison" }); // Error: excess type: age

const person = {
  first: "Paing",
  age: 33,
  last: "Chit",
};
printNmae(person); // No Error

let coordinate: { x: number; y: number } = {
  x: 23,
  y: 32,
};


const randomCoordinate = ():{x: number, y:number} {
  return {x: Math.random(), y: Math.random()}
}

// Type: alias
 type Point = {
  x: number;
  y: number;
 }

 function doublePoint(Point: {x: number, y: number}): {x: number, y:number} {
  return {x: Point.x * 2, y: Point.y *2}
 }