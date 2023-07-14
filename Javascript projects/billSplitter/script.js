let res =  document.getElementById('result')

function calculateBill(costPerDish, numberOfPeople) {
    // Calculate the total bill.
    const totalBill = costPerDish * numberOfPeople;
  
    // Calculate the bill per person.
    const billPerPerson = totalBill / numberOfPeople;
  
    // Create an object to store the results.
    const result = {
      totalBill: totalBill,
      billPerPerson: billPerPerson,
    };
  
    // Return the results.
    return result;
  }
  
  // Example usage.
  const costPerDish = prompt('Enter cost per Dish');
  const numberOfPeople = prompt('Enter no. of People');
  
  const result = calculateBill(costPerDish, numberOfPeople);
let TotalBill = result.totalBill;
let persons = result.billPerPerson;

document.getElementById('totalbill').innerHTML = `Total Bill Of dish is ₹${TotalBill}`
document.getElementById('billperperson').innerHTML = ` Bill per person is ₹${persons}`