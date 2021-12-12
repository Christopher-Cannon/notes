const arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 12, 7];

const myReduce = function(array, cb, initial = null) {
  let index = 1;
  let prev = array[index - 1];

  if (initial) {
    index--;
    prev = initial;
  }

  for (let i = index; i < array.length; i++) {
    prev = cb(prev, array[i], i, array);
  }
  return prev;
}

// Built-in reduce
let largestOddNumber = arr.reduce((prev, current) => current % 2 && current > prev ? current : prev);

let sumOfArray = arr.reduce((prev, current) => current += prev);

let averageOfArray = arr.reduce((prev, current, i, array) => {
  if (i === array.length - 1) {
    return (current + prev) / array.length;
  }
  return current += prev;
});

// myReduce
let myLargestOddNumber = myReduce(arr, (prev, current) => current % 2 && current > prev ? current : prev);

let mySumOfArray = myReduce(arr, (prev, current) => current += prev);

let myAverageOfArray = myReduce(arr, (prev, current, i, array) => {
  if (i === array.length - 1) {
    return (current + prev) / array.length;
  }
  return current += prev;
});

let max = myReduce(arr, (prev, current) => current > prev ? current : prev);

console.log("Largest odd number:", largestOddNumber);
console.log("Sum of array:", sumOfArray);
console.log("Average of array", averageOfArray);

console.log("My largest odd number:", myLargestOddNumber);
console.log("My sum of array:", mySumOfArray);
console.log("My average of array:", myAverageOfArray);
console.log("Max:", max);
