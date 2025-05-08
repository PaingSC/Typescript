// Array
const stuff: string[] = ["asd", "adfkj", "akfjsd"];

// type: tuple
const color: [number, number, number] = [255, 0, 255];

type HTTPResponseTuple = [number, string];

const goodRes: HTTPResponseTuple = [200, "OK"];
// goodRes[0] = 404;
// goodRes.push(123)
// goodRes.pop()
// goodRes.pop()
// const goodRes: HTTPResponse = ["Ok", 200]; //Error: the order of values
const responses: HTTPResponseTuple[] = [
  [404, "Not found"],
  [200, "OK"],
  [500, "Internal server error"],
];
