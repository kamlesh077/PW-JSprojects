// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.


// prices are in dollars 
let exchangeRate = 80;


const items = {
    mango: 2,
    banana: 4,
    apple: 1,
    orange: 3
}
console.log(items);

function USDtoRupee(items) {
    let newItems = Object.keys(items).map((key) => {
        return { [key]: items[key] * exchangeRate }
    })
    return newItems;
}
console.log(USDtoRupee(items));    




function USDtoIND(params) {
    const exchangeRate = 80;
    const convertedItems = {};
    for (const item in items) {
        convertedItems[item] = items[item] * exchangeRate;
    }
    return convertedItems;
}

console.log(USDtoIND(items));
