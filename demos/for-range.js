// Callback has access to loop counter
const forRange = (start, end, cb) => {
  for (let i = start; i < end; i++) cb(i);
};

let arr = [];

// forRange(1, 11, (n) => arr.push(n * 2));
forRange(1, 11, (n) => arr = [...arr, n * 2]);

console.log(arr);