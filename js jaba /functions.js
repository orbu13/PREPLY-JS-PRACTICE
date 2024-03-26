// Function Exercises
// Exercise 1: logFullName
// Write a function called myName that logs your full name. Save your full name to a variable inside of the
// function body, then use console.log to print your name to the console.

function myName(a,b){
    const result = "My full name is " + a + " " + b;
    return result
}
console.log(myName("Orel", "Butbul"));


function logFullName() {
    const fullName = "John Doe"; // Replace with your full name
    console.log(fullName);
    }
    
    logFullName(); // Call the function to log your full name



// Exercise 2:  randomFood
// Create an array called favoriteFoods which contains the strings "pizza" and "ice cream".
// • Write a function called randomFood . The function should use Math.random to randomly choose a favorite
// food in your favoriteFoods array to return. For example, your function will return either pizza or ice cream,
// depending on what you get back from Math.random .

let favoriteFoods = ["Pizza", "Ice Cream"]

function randomFood(){
    let randomNumber = Math.floor(Math.random()*favoriteFoods.length)
    console.log(favoriteFoods);
    console.log(favoriteFoods[0]);
    console.log(favoriteFoods[1]);
    let randomFood = favoriteFoods[randomNumber]
    console.log(randomNumber);
    return randomFood
}
console.log(randomFood());


// Exercise 3: displayOddNumbers
// Create a variable called numbers which is an array that contains the numbers 1 through 10.
// • Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd. 

let numbers = [1,2,3,4,5,6,7,8,9,10]

function displayOddNumbers(){
    console.log(numbers);
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 1){
            console.log(numbers[i]);
        }
    }
}
console.log(displayOddNumbers());


// Exercise 4:  displayEvenNumbers
// Write a function called displayEvenNumbers which iterates over the numbers array and console.logs out all of the numbers that are even.

function displayEvenNumbers (){
    console.log(numbers);
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            console.log(numbers[i]);
        }
    }
}
displayEvenNumbers();


// Exercise 5: returnFirstOddNumber
// Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds.

function returnFirstOddNumber (){
    console.log(numbers);
    for(let i = 0; i < numbers.length; i ++){
        if(numbers[i] % 2 != 0){
            return numbers[i]
        }
    }
}
console.log(returnFirstOddNumber());


// Exercise 6: returnFirstEvenNumber
// • Create a function called returnFirstEvenNumber which iterates over the numbers array and returns the first even number it finds

function returnFirstEvenNumber (){
    console.log(numbers);
    for (let i = 0; i < numbers.length; i ++){
        if(numbers[i] % 2 === 0){
            return numbers[i]
        }
    }
}
console.log(returnFirstEvenNumber());


// Exercise 7: returnFirstHalf
// • Create a function called returnFirstHalf which returns the first half of the numbers array.

function returnFirstHalf (){
    console.log(numbers.length / 2);
    console.log(numbers.slice(0, numbers.length / 2));}
returnFirstHalf()


// Exercise 8: 
// Create a function called returnSecondHalf which returns the second half of the numbers array.

function returnSecondHalf() {
    // console.log(numbers.length / 2);
    // console.log(numbers.slice(numbers.length / 2));
    return numbers.slice(numbers.length / 2)
}
console.log(returnSecondHalf())
