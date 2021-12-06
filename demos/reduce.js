const arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 12, 7];

let largestOddNumber = arr.reduce((prev, current) => current % 2 && current > prev ? current : prev, 0);
let sumOfArray = arr.reduce((prev, current) => current += prev, 0);
let averageOfArray = arr.reduce((prev, current, i, array) => {
  if (i === array.length - 1) {
    return (current + prev) / array.length;
  }
  return current += prev;
}, 0);

console.log("Largest odd number:", largestOddNumber);
console.log("Sum of array:", sumOfArray);
console.log("Average of array", averageOfArray);
