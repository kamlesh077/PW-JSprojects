const generateRandomNumber = () => {
    // Generate a random number between 1 and 100.
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    // Return the random number.
    return randomNumber;
  };
  
  // Generate and print the random number.
  const randomNumber = generateRandomNumber();
  console.log("The random number is:", randomNumber);
  