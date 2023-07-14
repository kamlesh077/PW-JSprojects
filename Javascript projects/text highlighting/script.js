function highlightWords() {
    var paragraph = document.getElementById("paragraph");
    var words = paragraph.textContent.split(" ");

    for (const word of words) {
      if (word.length > 8) {
        const spanElement = document.createElement("span");
        spanElement.textContent = word;
        spanElement.style.backgroundColor = "yellow";
        paragraphElement.appendChild(spanElement);
      }
    }

    paragraph.innerHTML = words.join(" ");
  }