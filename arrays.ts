// type: empty array
const activeUsers: [] = [];
// activeUsers.push("Tony"); // Error: assigning to type empty array

// type: array of strings
const studentList: string[] = [];
studentList.push("Mg Mg");
// studentList.push(34); // Error

// type: array of number
const someOddNumbers: number[] = [1, 3, 5, 7];

// Alternate Array Syntax
// const names: string[] = ["Mg Hla", "Mya Mya", "Hla Hla"];
const names: Array<string> = ["Mg Hla", "Mya Mya", "Hla Hla"];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 34, y: 22 });

// type: Multidimensional Array
// 2 dimensional array
let matrix: string[][] = [[], [], []];
matrix = [
  ["2x", "3y", "z"],
  ["4x", "2y", "2z"],
  ["2x", "3y", "4z"],
];

// 3 dimensional array
let tirMatrix: number[][][] = [[[23, 84, 9]]];

// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
let ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
let gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "Coffee Mug",
  price: 11.5,
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(products: Product[]): number {
  let sum = products.reduce((acc, cur) => acc + cur.price, 0);
  return sum;
}
