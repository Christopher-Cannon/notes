const arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 12, 7];

function myMap(array, cb) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(cb(array[i], i, array));
  }
  return newArr;
}

let mapArr = arr.map(elem => elem % 2 ? elem ** 2 : elem);
let myMapArr = myMap(arr, elem => elem % 2 ? elem ** 2 : elem);

console.log(".map() - square even nums:", mapArr);
console.log("myMap() - square even nums:", myMapArr);