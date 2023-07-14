const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
const colorName = document.getElementById("colorname");
const inputColor = document.getElementById("inputcolorname");

inputColor.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstColor = color1.value.toLowerCase();
  const secondColor = color2.value.toLowerCase();
  let mixedColor;

  switch (firstColor) {
    case "red":
      switch (secondColor) {
        case "blue":
          mixedColor = "purple";
          break;
        case "yellow":
          mixedColor = "orange";
          break;
        default:
          mixedColor = "Invalid Color Combination";
      }
      break;
    case "blue":
      switch (secondColor) {
        case "red":
          mixedColor = "purple";
          break;
        case "yellow":
          mixedColor = "green";
          break;
        default:
          mixedColor = "Invalid Color Combination";
      }
      break;
    case "yellow":
      switch (secondColor) {
        case "red":
          mixedColor = "orange";
          break;
        case "blue":
          mixedColor = "green";
          break;
        default:
          mixedColor = "Invalid Color Combination";
      }
      break;
    default:
      mixedColor = "Invalid Color Combination";
  }

  if (mixedColor == "invalid color combination") {
    result.style.backgroundColor = "white";
  } else {
    result.style.backgroundColor = mixedColor;
  }
  colorName.textContent = mixedColor;
});
