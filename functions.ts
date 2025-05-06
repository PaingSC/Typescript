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
