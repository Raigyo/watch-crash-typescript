"use strict";
/* Basic Types */
Object.defineProperty(exports, "__esModule", { value: true });
var id = 5;
var company = "Raigyo-dev";
var isPublished = true;
var fruits = ["Apple", "Orange", "Banana"];
var fruits2 = ["Apple", "Orange", "Banana"];
var arrayMixed = ["Apple", 2, "Orange", 3, 4, "Banana"];
var arrayAny = [1, 2, "Banaba", true];
// fruits.push("Kiwi"); // OK
// fruits.push(2); // KO
/* Tuple = array with a fixed number of elements whose types are known, but need not be the same*/
var person = [1, "Vincent", true];
/* Tuple array */
var employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Vincent"],
];
/* Union */
var pid;
pid = "22";
/* Enum */
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Up);
// `node ./dist/index.js` => Output: 1
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
/* Objects */
var user = { id: 1, name: "John" };
var user1 = { id: 1, name: "John" };
/* Type assertion */
/* Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does.
 Usually, this will happen when you know the type of some entity could be more specific than its
 current type. */
var cid = 1;
var customerId = cid;
var customerId2 = cid;
/* Functions */
function addNum(x, y) {
    return x + y;
}
/* Void */
function log(message) {
    console.log(message);
}
var user2 = { id: 1, name: "John" };
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x + y; };
// const add2: MathFunc = (x: number, y: string): number => x + y; // Error
/* Interfaces with classes */
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var vincent = new Person(1, "Vincent");
var daniel = new Person(2, "Daniel");
console.log(vincent, daniel);
