const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the discount.
    const discount = originalPrice - discountedPrice;
  
    // Calculate the percentage of the discount.
    const percentageDiscount = discount / originalPrice * 100;
  
    // Round the percentage discount to two decimal places.
    const roundedPercentageDiscount = Math.round(percentageDiscount * 100) / 100;
  
    // Return the rounded percentage discount.
    return roundedPercentageDiscount;
  };
  
  // Example usage.
  const originalPrice = 1000;
  const discountedPrice = 50;
  
  const percentageDiscount = calculateDiscountPercentage(originalPrice, discountedPrice);
  
  console.log("The percentage discount is: {}%",percentageDiscount);
  