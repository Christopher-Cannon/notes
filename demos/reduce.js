const arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 12, 7];

const myReduce = function(array, cb, initial = null) {
  let index = 1;
  let prev = array[index - 1];
  let current = array[index];
  let result = 0;

  if (initial != null) {
    index = 0;
    prev = initial;
    current = array[index];
  }

  for (let i = index; i < array.length; i++) {
    result = cb(prev, current, i, array);

    if (i + 1 < array.length) {
      prev = current;
      current = array[i + 1];
    }
  }
  return result;
}

let max = myReduce(arr, function(prev, current) {
  if (current > prev) return current;
  return prev;
});

console.log(max);

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
