/* Basic Types */

let id: number = 5;
let company: string = "Raigyo-dev";
let isPublished: boolean = true;
let fruits: string[] = ["Apple", "Orange", "Banana"];
let fruits2: Array<string> = ["Apple", "Orange", "Banana"];
let arrayMixed: Array<string | number> = ["Apple", 2, "Orange", 3, 4, "Banana"];
let arrayAny: any = [1, 2, "Banaba", true];

// fruits.push("Kiwi"); // OK
// fruits.push(2); // KO

/* Tuple = array with a fixed number of elements whose types are known, but need not be the same*/

let person: [number, string, boolean] = [1, "Vincent", true];

/* Tuple array */

let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Vincent"],
];

/* Union */

let pid: string | number;
pid = "22";

/* Enum */

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

// console.log(Direction1.Up);
// `node ./dist/index.js` => Output: 1

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

/* Objects */

const user: {
  id: number;
  name: string;
} = { id: 1, name: "John" };

// or: custom type

type User = {
  id: number;
  name: string;
};

const user1: User = { id: 1, name: "John" };

/* Type assertion */

/* Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does.
 Usually, this will happen when you know the type of some entity could be more specific than its
 current type. */
let cid: any = 1;
let customerId = <number>cid;
let customerId2 = cid as number;

/* Functions */

function addNum(x: number, y: number): number {
  return x + y;
}

/* Void */

function log(message: string | number): void {
  console.log(message);
}

/* Interfaces */
/* Interface is a structure that defines the contract in your application. It defines the syntax
for classes to follow. Classes that are derived from an interface must follow the structure provided
 by their interface. The TypeScript compiler does not convert interface to JavaScript.*/
/* Cannot be used with primitive or union */

type UserInterface = {
  readonly id: number;
  name: string;
  age?: number;
};

const user2: UserInterface = { id: 1, name: "John" };
// user2.id = 5 // => error

/* Interfaces with function */

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x + y;
// const add2: MathFunc = (x: number, y: string): number => x + y; // Error

/* Interfaces with classes */

class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const vincent = new Person(1, "Vincent");
const daniel = new Person(2, "Daniel");

console.log(vincent, daniel);
// Output: Person { id: 1, name: 'Vincent' } Person { id: 2, name: 'Daniel' }

/* Access modifiers and Data modifiers */

export {};
