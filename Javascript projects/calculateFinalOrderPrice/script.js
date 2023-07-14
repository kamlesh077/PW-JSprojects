const calculateTotalCost = (cart) => {
    let totalCost = 0;
  
    cart.forEach((item) => {
      const { unitPrice, quantity } = item;
      totalCost += unitPrice * quantity;
    });
  
    return totalCost;
  };

  const cart = [
    { unitPrice: 10.99, quantity: 2 },
    { unitPrice: 15.99, quantity: 1 },
    { unitPrice: 8.99, quantity: 3 },
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log("Total Cost:", totalCost);
  
