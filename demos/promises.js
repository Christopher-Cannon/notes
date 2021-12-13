// Allows asynchronous operations to return values like 
// synchronous operationa
let myPromise = new Promise((resolve, reject) => {
  let a = 1 + 2;

  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

myPromise
  .then((message) => console.log("This is in the then: " + message))
  .catch((error) => console.log("This is in the catch: " + error));

// Promise.all()
// Promise.race()