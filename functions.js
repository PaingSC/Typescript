// I ) Argument type: any
function func(myVar) {
    var result = myVar * myVar;
    return myVar;
}
func(38);
func("Hello");
func(false);
// II) Assigning specific argument types
function greet(name) {
    // let result = name * name; //The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    return "Hello ".concat(name, "!");
}
greet("Typescript");
// greet(31); //Argument of type 'number' is not assignable to parameter of type 'string'.
// greet(true); //Argument of type 'boolean' is not assignable to parameter of type 'string'.
var myFunc = function (name, age, isEngineer) { };
myFunc("Paing Soe Chit", 28, true);
// III) Default Parameter type
var greetAPerson = function (name) {
    if (name === void 0) { name = "stranger"; }
    return "Hello ".concat(name);
};
greetAPerson();
greetAPerson("Sofia");
// IV) Return Type Annotations
var calcAdd = function (x, y) { return x + y; };
console.log(calcAdd(3, 7));
