class Customer {
    constructor(name, balance) {
      this.name = name;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount <= 0) { 
        console.log("Deposit amount must be greater than zero.");
      } else {
        this.balance += amount;
        console.log(`Deposit of ${amount} successful. New balance: ${this.balance}`);
      }
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be greater than zero.");
      } else if (amount > this.balance) {
        console.log("Insufficient funds. Cannot complete withdrawal.");
      } else {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
      }
    }
  }
  
  // Create a customer object
  const customer = new Customer("John Doe", 1000);
  
  // Deposit some money
  customer.deposit(500); // Output: Deposit of 500 successful. New balance: 1500
  
  // Withdraw some money
  customer.withdraw(200); // Output: Withdrawal of 200 successful. New balance: 1300
  