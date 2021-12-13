// Spread in arrays
let people = ["John", "Jane", "Joseph", "Julia"];

let newPerson = "Jason";

people = [...people, newPerson];

let morePeople = ["Janet", "Jack", "Juliet", "Jeff"];

people = [...people, ...morePeople];

console.log(people);

// Spread in function calls
const sum = (x, y, z) => x + y + z;

let numbers = [1, 2, 3];

console.log( sum(...numbers) );

// Rest syntax to place objects into an array
const merge = (...obj) => [...obj];

let obj1 = {
  name: "Apples",
  price: 1.50
};

let obj2 = {
  name: "Oranges",
  price: 2.10
};

let fruit = merge(obj1, obj2);

console.log(fruit);