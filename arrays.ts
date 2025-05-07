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
