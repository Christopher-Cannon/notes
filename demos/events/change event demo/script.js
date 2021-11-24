const input = document.querySelector("#input");
const output = document.querySelector("#output");

let array = [];

// Type inside the input, then press enter - the 
// contents of the text input will be added to 
// the above array.
// Each element of the array is then written to 
// the document inside a <h1> element.
input.addEventListener("change", function() {
  array.push(input.value);

  let toWrite = "";

  for (const elem of array) {
    toWrite += `<h1>${elem}</h1>`;
  }

  output.innerHTML = toWrite;

  // Empty the text input afterwards to make next 
  // entry easier to add.
  input.value = "";
});