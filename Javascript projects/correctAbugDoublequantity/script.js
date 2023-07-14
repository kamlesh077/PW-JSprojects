function doubleCartQuantity(cart) {
    // Create a new array to store the updated quantities
    var updatedCart = [];
  
    // Iterate over each item in the cart
    for (var i = 0; i < cart.length; i++) {
      // Double the quantity and add it to the updated cart array
      var item = cart[i];
      var updatedQuantity = item.quantity * 2;
      var updatedItem = { ...item, quantity: updatedQuantity };
      updatedCart.push(updatedItem);
    }
  
    // Return the updated cart array
    return updatedCart;
  }
// Example cart array
var cart = [
    { item: 'item1', quantity: 2 },
    { item: 'item2', quantity: 4 },
    { item: 'item3', quantity: 3 }
  ];
  
  // Double the quantities in the cart
  var updatedCart = doubleCartQuantity(cart);
  
  // Print the updated cart
  console.log(updatedCart);
//   document.getElementById('result').innerHTML = "Double the quantities in the cart items are :- " + updatedCart;
  