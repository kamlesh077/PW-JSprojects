function printTriangle(height) {
  for (var i = 1; i <= height; i++) {
    var row = '';
    for (var j = 6; j >= i; j--) {
      row += '*';
    }
    console.log(row);
  }
}

// Test the function
var triangleHeight = 6;
printTriangle(triangleHeight);
