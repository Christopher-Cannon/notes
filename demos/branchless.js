// https://www.youtube.com/watch?v=bVJ-mWWL7cE
// Curious example of an alternative to conditional 
// statements.

// Traditional min function
function minNumber(a, b) {
  if (a < b) return a;
  return b;
}

// Returns the smaller of the two parameters
// without using an if statement.
// Can be slower depending on the compiler - may 
// already have optimisations in place for certain 
// operations.
// Worth noting the sacrifice of readability.
const min = (a, b) => a * (a < b) + b * (b <= a);

let n1 = 15;
let n2 = 12;

console.log(min(n1, n2));