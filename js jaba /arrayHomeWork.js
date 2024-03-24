// Array Exercises

// Exercise 1: Loop through an Array
// Use a for loop to iterate through the fruits array and print each fruit on a separate line.

let arrayOfFruits = ["banana", "apple", "kiwi", "orange", "avocado"]
console.log(arrayOfFruits);

for(let i = 0; i < arrayOfFruits.length; i ++){
    console.log(arrayOfFruits[i]);
    console.log(arrayOfFruits[i] = arrayOfFruits[i].toUpperCase())
        if(arrayOfFruits[i] = arrayOfFruits[i].toUpperCase()){
            console.log(console.log(arrayOfFruits[i].charAt(0).toLocaleLowerCase()));
        }
    }


// Exercise 2: Sum of Numbers
// Create an array of numbers and use a for loop to calculate and print the sum of all the numbers in the array.

let arrayOfNumbers =[100,200,300,400,500,600,700]
let sum = 0

for(let i = 0; i < arrayOfNumbers.length; i ++){
    console.log(arrayOfNumbers[i]);
    sum = sum + arrayOfNumbers[i]
}
console.log("The sum of all numbers in the array is: " + sum);


// Exercise 3: Even Numbers
// Create an array of numbers and use a for loop to print all the even numbers from the array.

let arrayOfEvenNumbers =[2,45,43,200,95,42,76,43,876,567,33,1000,432,8976543,4,5,6,8,9]
console.log(arrayOfEvenNumbers);
console.log(arrayOfEvenNumbers.length);
let EvenArray = []
let OddArray = []

for(let i = 0; i < arrayOfEvenNumbers.length; i ++){
    if(arrayOfEvenNumbers[i] % 2 === 0){
        EvenArray.push(arrayOfEvenNumbers[i])
    }else{
        OddArray.push(arrayOfEvenNumbers[i])
    }
}
console.log(EvenArray);
console.log(OddArray);


// Exercise 4: Find Maximum
// Create an array of numbers and use a for loop to find and print the maximum value in the array.

let arrayOfMaxNumber =[2,45,43,200,95,42,76,43,876,567,33,1000,432,8976543,4,5,6,8,9]
let max = arrayOfMaxNumber[0]

for(let i = 0; i < arrayOfMaxNumber.length; i ++){
    if(arrayOfMaxNumber[i] > max){
        console.log(max = arrayOfMaxNumber[i]);
    }
} console.log("The maximum value in the array is: " + max);


// Exercise 5: Reverse a String
// Write a program that takes a string and uses a for loop to reverse the characters in the string. Print the reversed string.

let originalString = "Hello, good morning!"
console.log(originalString);

let NewString = ""

for (let i = originalString.length - 1; i >= 0; i --){
    console.log(originalString[i]);
    NewString += NewString = originalString[i]
}
console.log(NewString);

