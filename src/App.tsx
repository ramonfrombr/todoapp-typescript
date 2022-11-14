import React from 'react';
import './App.css';

// String
let name: string;
// Number
let age: number;
// Boolean
let isStudent: boolean;
// Array
let hobbies: string[];
// Tuple - !! The order of the elements matter when assigning
let roles: [number, string, string];

name = 'test';
age = 1;
isStudent = true;
hobbies = ['string'];
roles = [0, 'teacher', 'student'];

// Defining a type

type Person={
  name: string;
  age: number;
}

let person3: Person = {
  name: 'João',
  age: 10
}

let person1: Person;

person1 = {
  name: 'Ramon',
  age: 26
};

// For declaring optional properties, write a ? after the property name
type PersonWithOptionalAgeProperty = {
  name: string;
  age?: number;
}

let person2: PersonWithOptionalAgeProperty = {
  name: 'Fernando'
}

// Array of Objects
let lotsOfPeople: Person[];
lotsOfPeople = [person1, person3];

// Union
let year: number | string;
year = 1999;
year = "one";


// Defining functions

function printName(name: string) {
  console.log(name);
}

printName(name);

// Declaring functions

let printPerson: Function;

// void returns undefined (see never)
let printTodo: (todo: string) => void;

// returns number
let calculateSum: (num1: number, num2: number) => number;

// returns object
let createPerson: (name: string, age: number) => Person;

// while void returns undefined, never doesn't return anything
let functionWithUnknownReturnType: (arg1: string) => never;


// Any type
let randomCrap: any;

// Unknown type
let personName: unknown;




// Defining an Interface (almost the same as type)

interface Student {
  name: string;
  age?: number;
}

interface UniversityStudent extends Student {
  isTrainee: boolean;
}

// Inheritance on types

type Animal = {
  name: string;
  group: 'mammal' | 'bird' | 'reptiles';
}

type Bird = Animal & {
  canFly: boolean;
}

type Mammal = Animal & {
  hasTail: boolean;
} 

let hawk: Bird = {
  name: 'Eagle',
  group: 'bird',
  canFly: true,
}

let dog: Mammal = {
  name: 'Rottweiler',
  group: 'mammal',
  hasTail: true,
}


function App() {
  return (
    <div className="App">
      <p>Learn TypeScript React</p>
    </div>
  );
}

export default App;
