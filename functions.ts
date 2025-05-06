// I ) Argument type: any
function func(myVar) {
  let result = myVar * myVar;
  return myVar;
}
func(38);
func("Hello");
func(false);

// II) Assigning specific argument types
function greet(name: string) {
  // let result = name * name; //The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
  return `Hello ${name}!`;
}

greet("Typescript");
// greet(31); //Argument of type 'number' is not assignable to parameter of type 'string'.
// greet(true); //Argument of type 'boolean' is not assignable to parameter of type 'string'.

const myFunc = (name: string, age: number, isEngineer: boolean) => {};
myFunc("Paing Soe Chit", 28, true);

// III) Default Parameter type
let greetAPerson = (name: string = "stranger") => {
  return `Hello ${name}`;
};
greetAPerson();
greetAPerson("Sofia");

// IV) Return Type Annotations
const calcAdd = (x: number, y: number): number => x + y;
console.log(calcAdd(3, 7));

// The following function return number or string
const rando = (num: number) => {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
};

// V) Anonymous Function Contextual Typing
const pets = ["dog", "pig", "cat", "bird"];
pets.map((pet) => {
  // return pet.toFixed(); //Error
  pet.toUpperCase();
});

// VI) type: void (a return type for functions)
// A function that doesn't return anything
const printTwice = (msg: string): void => {
  console.log(msg);
  console.log(msg);
};

// type: never
// The type of the following function is never
const makeError = (msg: string) => {
  throw new Error(msg);
};

// The
function throwError(msg: string): never {
  throw new Error(msg);
}
