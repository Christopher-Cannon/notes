const numOne = document.querySelector("#numberOne");
const numTwo = document.querySelector("#numberTwo");

const btnAdd = document.querySelector("#add");
const btnSubtract = document.querySelector("#subtract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");

const output = document.querySelector("#output");

btnAdd.addEventListener("click", function() {
  output.textContent = Number(numOne.value) + Number(numTwo.value);
});

btnSubtract.addEventListener("click", function() {
  output.textContent = Number(numOne.value) - Number(numTwo.value);
});

btnMultiply.addEventListener("click", function() {
  output.textContent = Number(numOne.value) * Number(numTwo.value);
});

btnDivide.addEventListener("click", function() {
  output.textContent = Number(numOne.value) / Number(numTwo.value);
});