// Show the contents of a box when you place the 
// mouse cursor over it, hiding it again when you 
// remove the mouse cursor.
const hidden = document.querySelector("#hidden");

function reveal() {
  hidden.classList.add("whiteText");
}

function hide() {
  hidden.classList.remove("whiteText");
}

hidden.addEventListener("mouseover", function() {
  reveal();
});

hidden.addEventListener("mouseout", function() {
  hide();
});