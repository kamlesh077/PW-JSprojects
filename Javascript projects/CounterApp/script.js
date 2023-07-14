// getting the html elements
const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const resetBtn = document.getElementById("reset");
const displayValue = document.getElementById("displayValue");

// for decrement button click
dec.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

// for increment button click
inc.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayValue.innerText = value + 1;
  }
});

// for reset button click
resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});