const listItems = ["What you'll learn", "Introduction to Python", "Data types", "Conditional statements", "Loops", "Functions", "Classes", "Object-oriented programming", "Modules", "Packages"];
const  Input = document.getElementById("input").value;
const button = document.getElementById("add-item");

button.addEventListener("click", function() {
  // Get the next list item from the array.
  const nextListItem = listItems.shift();

  // If there are no remaining items, display a message.
  if (!nextListItem) {
    alert("All items have been added.");
    return;
  }

  // Add the new list item to the DOM.
  const listItemElement = document.createElement("li");
  listItemElement.textContent = nextListItem;
  document.getElementById("list").appendChild(listItemElement);
});
