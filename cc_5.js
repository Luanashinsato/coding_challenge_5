// Task 1: Object Properties
let customer = { name: "John Doe", age: 35, email: "john.doe@email.com" }; // Declaring an object customer
for (let key in customer) {
    console.log(`${key}: ${customer[key]}`);
}; // Logging each property and value using for...in loop 

// Task 2: Object Methods
let order = { 
    orderId: 12345, 
    totalAmount: 150, 
    status: "Processing",
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
      }
}; // Declaring an object order
order.displayOrder(); // Calling the method to log the order

// Task 3: Array Manipulation 
let cartItems = ["Tshirt", "Pants", "Hoodie"]; // Declaring an array cartItems 
cartItems.push("Skirt"); // Adding a new product
cartItems.pop(); // Removing the last item
cartItems.unshift("Dress"); // Adding an item at the beginning 
cartItems.shift(); // Removing the first item 
console.log("Shopping Cart:", cartItems); // Logging the final array

// Task 4: Map Method 
let prices = [100, 200, 300]; // Declaring an array prices
let discountedPrices = prices.map(price => price * 0.9); // Applying a 10% discount to each product price
console.log("Original Prices: ", prices);
console.log("Discounted Prices: ", discountedPrices); // Logging the original and discounted prices 

// Task 5: Filter Method 
let inventory = [12, 8, 0, 20, 15]; // Declaring an array inventory 
let availableProducts = inventory.filter(quantity => quantity > 0); // Using the .filter() method to remove products with zero stock
console.log("Inventory:", availableProducts); // Logging the filtered array

// Task 6: Reduce Method
let sales = [500, 300, 200, 400]; // Declaring a sales array 
let totalRevenue = sales.reduce((total, sale) => total + sale, 0); // Calculating the total revenue using the .reduce() method 
console.log("Total Revenue:", totalRevenue); // Logging the total revenue

// Task 7: find() Method
const customers = ["Alice", "Bob", "Charlie", "David"]; // Declaring a customers array 
const found = customers.find(customer => customer === "Charlie") // Using the .find() method to locate the customer "Charlie"
console.log(found); // Logging the result 

// Task 8: Function Declaration
function calculateTax(amount, taxRate) {
    return amount * taxRate;
} // Declaring the function
let tax = calculateTax(200, 0.07); // Calling the function 
console.log(`Calculated Tax: $${tax.toFixed(2)}`); // Logging the calculated tax

// Task 9: Function Expression 
const applyDiscount = function(price, discount) {
    return price - (price * discount / 100);
}; // Declaring the function expression 
let discountedPrice = applyDiscount(150, 20); // Calling the function
console.log(`Discounted Price: $${discountedPrice}`); // Logging the discounted price 

// Task 10: Arrow Function
const calculatePoints = purchaseAmount => purchaseAmount / 10; // Writing the arrow function
let points = calculatePoints(300); // Calling the function
console.log (`Earned Points: ${points}`); // Logging the results 
