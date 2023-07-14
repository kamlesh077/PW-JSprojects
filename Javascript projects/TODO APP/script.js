function addTodo() {
    var input = document.getElementById("todoInput");
    var todoList = document.getElementById("todoList");

    var todoItem = document.createElement("li");
    todoItem.className = "todo-item";
    todoItem.textContent = input.value;
    todoList.appendChild(todoItem);

    input.value = "";
  }

  function updateTodoList() {
    var todoList = document.getElementById("todoList");
    todoList.innerHTML = ""; // Clear the existing list

    for (var i = 0; i < todoItems.length; i++) {
      var todoItem = document.createElement("li");
      todoItem.className = "todo-item";
      todoItem.textContent = todoItems[i];
      todoList.appendChild(todoItem);
    }
  }

  var todoItems = [];

  document.getElementById("addButton").addEventListener("click", function() {
    var input = document.getElementById("todoInput");
    if (input.value.trim() !== "") {
      todoItems.push(input.value);
      updateTodoList();
      input.value = "";
    }
  });