 function capitalizeName(name) {
    return name[0].toUpperCase() + name.slice(1);
  }
  
  // Test the function
  var user_input = prompt("Enter your name:");
  var capitalized_name = capitalizeName(user_input);
  document.getElementById('result').innerHTML = "The Capitalized String is:- " + capitalized_name;

