// Task 1: Object Properties
let customer = { name: "John Doe", age: 35, email: "john.doe@email.com" }; // Declaring an object customer
for (let key in customer) {
    console.log(`${key}: ${customer[key]}`);
}; // Logging each property and value using for...in loop 
