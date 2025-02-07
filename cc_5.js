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
