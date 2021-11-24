const button = document.querySelector("button");

function changeText() {
  const heading = document.querySelector("h1");
  
  heading.textContent = "Something interesting here";
}

button.addEventListener("click", function() {
  changeText();
});

