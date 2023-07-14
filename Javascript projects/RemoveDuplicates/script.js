  var shoppingCart = ['apple', 'banana', 'apple', 'orange', 'banana', 'grape'];
  var uniqueItems = [...new Set(shoppingCart)];
  console.log("Unique items in the cart:", uniqueItems);
  
  document.getElementById('result').innerHTML = "Duplicate items are deleted and Unique items are :- " + uniqueItems;