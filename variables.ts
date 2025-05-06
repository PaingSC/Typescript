// I) type : string
let movieTitle: string = "Dangel";
movieTitle = "Three Idiots";
movieTitle = 9; // Cannot re-assign to a different type
movieTitle.toUpperCase();

// II) type: number
let num: number = 9;
num += 1;
num = "9"; // Cannot re-assign to a different type

// III) type: boolean
let isLoading = true;
isLoading = false;
isLoading = 1; // Cannot re-assign to a different type
// isLoading = "true"; // Cannot re-assign to a different type

// IV) Type Inference
let myVar = 21;
myVar = 100;
myVar = "Hello"; // Type 'string' is not assignable to type 'number'.

// V) type: any
let someVar: any = "Hello, I was typed to 'any'!";
someVar = 1;
someVar = false;
someVar();
someVar.toUpperCase();

// V.a) Delayed initialization & Implicit Any;
const names = ["Mg Mg", "Mg Mya", "Ma Hla", "Than Naing"];

// let foundPerson;
let foundPerson: string;

for (let name of names) {
  if (name === "Ma Hla") {
    foundPerson = name;
  }
}

//

// Logging to console
console.log(movieTitle, num, isLoading);
