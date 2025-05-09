var _this = this;
var pt = { x: 323, y: 3324 };
var personA = {
    id: 397287438,
    first: "Hla",
    last: "Yin",
    nickname: "Pinky", // optional
};
personA.nickname = "Pigy";
personA.id = 382; // Error: readonly property
var personB = {
    id: 2384774,
    first: "Hnin",
    last: "Mya",
    // omitted optional interface property: nickname
    sayHi: function () { return "Hello, ".concat(_this.first, " ").concat(_this.last); },
};
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.proce * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(shoes.applyDiscount(0.4));
