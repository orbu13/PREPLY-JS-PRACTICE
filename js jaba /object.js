// Object Exercises
// Exercise 1: Creating an Object
// Create an object that has your firstName, lastName, and
// occupation as keys.

let info = {
    firstName: "Orel",
    lastName: "Butbul"
}

// Exercise 2: Accessing Object Properties
// Access each value from your object using both dot notation and
// bracket notation.

info.firstName 

// Exercise 3: Adding Properties
// Add a key for hobby to your object. Remove the key and value for
// Occupation.

 info.hobby = "painting"

// exercise 4: Iterating Through Object
// Given the following object below, write code to print the value then
// the key to the console separated by '=>':

let namesAndHobbies = {
elie: "JavaScript",
matt: "jogging",
janey: "table building",
tim: "sailing"
}

for (let key in namesAndHobbies){
    console.log(namesAndHobbies[key] + " => " + key);
}
// exercise 5: Object Comparison
// Create two objects obj1 and obj2 with the same properties and values. Compare the two objects to check if they are equal and log the result.

let productsA = {
    name: "Mac",
    category: "Electronics",
    price: 8.99,
    stock: 18,
    warranty: "One year",
    manoFacytor: "HP",
    model: "AB12"
}
if("model" in productsA){
    console.log("yes");
}else{
    console.log("no");
}

let productsB = {
    name: "Mac",
    category: "Electronics",
    price: 8.99,
    stock: 18,
    warranty: "One year",
    manoFacytor: "HP",
    rating: 8
}

let isEqual = true

for(let key in productsA){
    if(productsA[key] != productsB[key]){
        isEqual = false
    }
}
console.log(isEqual);

for(let key in productsB){
    if(productsB[key] != productsA[key]){
        isEqual = false
    }
}
console.log(isEqual);



let vegetables = ["tomato", "beats", "lemon", "curet"]

let costumer = 
"{ id: 1234567, firstName: Thomas, age: 28}"

console.log(Array.isArray(vegetables));

if(typeof costumer === "object" && costumer != null && Array.isArray(costumer) === false){
    console.log("costumer is object");
}
