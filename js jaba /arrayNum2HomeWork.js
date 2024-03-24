// Create an array of product prices and using for loop calculate the average product price.
// Solution:

let arrayOfProducts = [15,25,35,45,55,65,75,85,95,105]
let sum = 0

for(let i = 0; i < arrayOfProducts.length; i ++){
    console.log(arrayOfProducts[i]);
    console.log("calculating");
    sum = sum + arrayOfProducts[i]
    console.log(sum);
}console.log(" the average price for out shopping cart is: " + sum / arrayOfProducts.length);


// You are given an array of product prices. Your task is to apply discounts based on the following conditions:
// If the price of a product is less than $20, apply a 10% discount.
// If the price of a product is $20 or more, apply a 5% discount.
// Modify the prices array accordingly and print the modified prices.

console.log("___ New task ___");
let prices = [15.99, 25.50, 10.75, 18.25, 22.99, 5.50, 30.00, 12.49];

for(let i =0; i < prices.length; i ++){
    if(prices[i] <= 20){
        console.log("discount price " + prices[i]/10);
        prices[i] -= prices[i] / 10;
    }else{
        console.log("discount price " + prices[i]/5);
        prices[i] -= prices[i] / 20;
    }
}
console.log(prices);

// Check if all elements in an array are positive.
// Solution:

let arrayOfMixedNumbers = [-1,543,543,-543,234,-678,-1000,9387]
let allPositive = true;

for(let i = 0; i < arrayOfMixedNumbers.length; i ++){
    if(arrayOfMixedNumbers[i] <= 0){
        console.log("not all numbers are positive: " + arrayOfMixedNumbers[i]);
    }
};

for (let i = 0; i < arrayOfMixedNumbers.length; i++) {
    if (arrayOfMixedNumbers[i] < 0) {
        allPositive = false;
        break;
    }
}
console.log(allPositive);

// Create an array with duplicated values and then remove all duplicates from the array.
// Solution:

let duplicatedArray = [1, 2, 2, 3, 4, 4, 5]
console.log(duplicatedArray);
let newEmptyArray = []

for(let i =0; i < duplicatedArray.length; i ++){
    console.log(newEmptyArray);

    if(newEmptyArray.includes(duplicatedArray[i])){
        console.log(newEmptyArray);

    continue
    }else{
    newEmptyArray.push(duplicatedArray[i])
    }
}
console.log(newEmptyArray);

// Create an array of numbers and replace all even numbers in the array with their square roots.

let arrayOfEven = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for(let i = 0; i < arrayOfEven.length; i ++){
    if(arrayOfEven[i] % 2 === 0){
        console.log(Math.sqrt(arrayOfEven[i]));
        arrayOfEven[i] = Math.sqrt(arrayOfEven[i])
    }
}
console.log(arrayOfEven);

// Replace each element with the difference between its value and the next element's value.
// Solution:

let arrayOfElements = [5, 8, 12, 3, 9];

for(i = 0; i < arrayOfElements.length -1; i ++){
    console.log(arrayOfElements[i] - arrayOfElements[i +1]);
    arrayOfElements[i] = arrayOfElements[i] - arrayOfElements[i +1];
}
console.log(arrayOfElements);
