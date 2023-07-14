let cars = document.getElementById("cars");
let submit = document.getElementById('submit');
let result = document.getElementById('result');

submit.addEventListener('click', function(e) {
  e.preventDefault();
  
  var daysRented = prompt("Enter no. of days");
  var carType = cars.selectedIndex;

  

function calculateRentalCost(daysRented, carType) {
  var rentalCost = 0;
  
  switch (carType) {
    case 1:
      rentalCost = 4000;
    
      break;
    case 2:
      rentalCost = 10000;
    
      break;
    case 3:
      rentalCost = 20000;
      
      break;
    default :
      rentalCost = alert('Invalid car type.');
      return 0;
  }
  
  var totalCost = rentalCost * daysRented;
  return totalCost;
}

var totalCost = calculateRentalCost(daysRented, carType);


document.getElementById('result').innerHTML = `The total cost of ${cars.options[carType].text} car for ${daysRented} days is ${totalCost} ₹`;
});
