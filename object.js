function printNmae(name) {
    console.log("".concat(name.first, " ").concat(name.last));
}
printNmae({ first: "Thomas", last: "Edison" });
// printNmae({ first: "Thomas", age: 33, last: "Edison" }); // Error: excess type: age
var person = {
    first: "Paing",
    age: 33,
    last: "Chit",
};
printNmae(person); // No Error
var coordinate = {
    x: 23,
    y: 32,
};
var randomCoordinate = function () {
    return { x: Math.random(), y: Math.random() };
};
function doublePoint(Point) {
    return { x: Point.x * 2, y: Point.y * 2 };
}
// Nested Objects
function printSong(song) { }
var aSong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};
var aSong2 = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        writer: "Alex North",
    },
};
var calculateSongPayout = function (song) {
    return song.numStreams * 0.0033;
};
var pringSongName = function (song) {
    console.log("".concat(song.title));
};
console.log(calculateSongPayout(aSong));
pringSongName(aSong);
var prism1 = {
    width: 10,
    length: 6,
};
var user = {
    id: 12387,
    username: "redFlagGirl",
};
console.log(user.id); // enable reading
var redCircle = {
    radius: 8,
    color: "red",
};
var whiteFullMoonWine = {
    brandName: "Full Moon",
    color: "white",
    lifetime: 3,
    price: 33, // this is optional type
};
