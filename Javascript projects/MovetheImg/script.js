var image = document.getElementById("image");
    var stepSize = 10; // Adjust this value to control the movement speed

    function moveImage(event) {
      var key = event.key;

      switch (key) {
        case "ArrowUp":
          image.style.top = parseInt(image.style.top) - stepSize + "px";
          break;
        case "ArrowDown":
          image.style.top = parseInt(image.style.top) + stepSize + "px";
          break;
        case "ArrowLeft":
          image.style.left = parseInt(image.style.left) - stepSize + "px";
          break;
        case "ArrowRight":
          image.style.left = parseInt(image.style.left) + stepSize + "px";
          break;
      }
    }

    document.addEventListener("keydown", moveImage);