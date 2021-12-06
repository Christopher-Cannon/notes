function flatten(...arr) {
  let flatArr = [];

  for (let i = 0; i < arr.length; i++) flatArr.push(...arr[i]);

  return flatArr;
}

console.log( flatten([1, 2, 3], [3, 4, 5], [2, 9, 9]) );