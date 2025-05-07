function printNmae(name: { first: string; last: string }) {
  console.log(`${name.first} ${name.last}`);
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

const randomCoordinate = (): { x: number; y: number } => {
  return { x: Math.random(), y: Math.random() };
};

// Type: alias
type Point = {
  x: number;
  y: number;
};

function doublePoint(Point: { x: number; y: number }): {
  x: number;
  y: number;
} {
  return { x: Point.x * 2, y: Point.y * 2 };
}

// Nested Objects
function printSong(song: {
  title: "Unchained Melody";
  artist: "Righteous Brothers";
  numStreams: 12873321;
  credits: {
    producer: "Phil Spector";
    writer: "Alex North";
  };
}) {}

let aSong = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

let aSong2 = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    writer: "Alex North",
  },
};

type SongType = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

const calculateSongPayout = (song: SongType): number => {
  return song.numStreams * 0.0033;
};

const pringSongName = (song: SongType): void => {
  console.log(`${song.title}`);
};

console.log(calculateSongPayout(aSong));
pringSongName(aSong);
// pringSongName(aSong2); // Error

//Optional property
type rectangularPrism = {
  width: number;
  length: number;
  height?: number; // optional property
};

let prism1: rectangularPrism = {
  width: 10,
  length: 6,
};

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12387,
  username: "redFlagGirl",
};

console.log(user.id); // enable reading
// user.id = 937393; // Error: disable wirting

// type: intersection
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful; // Intersection Type

const redCircle: ColorfulCircle = {
  radius: 8,
  color: "red",
};

type Lifetime = {
  lifetime: number;
};

type Brand = {
  brandName: string;
};

type Color = {
  color: string;
};

type Wine = Brand & Color & Lifetime & { price?: number }; // intersection

const whiteFullMoonWine: Wine = {
  brandName: "Full Moon",
  color: "white",
  lifetime: 3,
  price: 33, // this is optional type
};
