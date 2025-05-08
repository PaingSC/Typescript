// Union Types
// use single "|" (pipe)
let age: number | string;
age = 3; // number no problem
age = "45"; // string no problem
// age = true // boolean: Error

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc;
coordinates = { x: 2, y: 4 }; // Point no problem
coordinates = { lat: 323.323, long: 124.425 }; // Loc no problem

// Type Narrrowing
// Assuming that price my be string(eg; "&132") or number, then

function calculateTag(price: number | string, tax: number): number {
  // return price * tax; // Error
  // return price.replace("$", "") // Error
  // Type Narrowing
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
    return price * tax;
  } else {
    return price * tax;
  }
}

console.log(calculateTag(30, 10));
console.log(calculateTag("30", 10));
console.log(calculateTag("$30", 10));

// Union types with array

// type: any[]
let anyArray: any[] = [
  1,
  2,
  3,
  "hello",
  "hi",
  true,
  { name: "steel cup", price: 1 },
];

// type: number|string[]
// this means the type is a single number or array of strings
let array1: number | string[];
array1 = 10;
array1 = ["a", "b", "c"];
array1 = ["a", 1] //Error
array1 = [1, 2]  Error
array1= [10] //Error

// type (number|string)[]
// array that may contains numbers and or strings
let array2: (number|string)[];
array2 = ["a", "b", "c"]
array2 = [1, 2, 3]
array2 = ["a", "b", "c", 1, 2, 2]

// type: literal
let zero: 0 = 0
// zero = 1 //Error
let hello: "hello";
// hello = "hi" error
hello = "hello"

// Union type with literal type

let mood: "Happy" | "Sad" = "Happy"
mood = "Sad";
mood = "Sick!" // Error

type DayOfWeek = "Monday" | "Tuseday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"

let today: DayOfWeek = "Monday"
today = "Thursday"


// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore: number | boolean;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
let stuff: number[] | string[];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number

type RGB = {
  r: number;
  g: number;
  b: number;
};

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number
type HSL = {
  h: number;
  s: number;
  l: number;
};

// Create an array called colors that can hold a mixture of RGB and HSL color types
let colors: (RGB | HSL)[];

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format

const greet = (name: string | string[]): void => {
  if (typeof name === "string") {
    console.log(`Hello, ${name}`);
  } else {
    console.log(name.map((n) => console.log(`Hello, ${n}`)));
  }
};
