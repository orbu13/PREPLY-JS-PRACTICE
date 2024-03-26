// Function Exercises 
// Exercise 1: Math Operations
// • Make a function for add , subtract , multiply , and divide . Each of these functions should accept two parameters and return the sum, difference, product and quotient.

function add (num1, num2){
    return num1 + num2
}
 console.log(add(9,7));

 function subtract (num1, num2){
    return num1 - num2
 }
 console.log(subtract(9,7));

 function multiply ( num1, num2){
    return num1 * num2
 }
 console.log(multiply(9,7));

 function divide (num1, num2){
    return num1 / num2;
 }
console.log(Math.ceil(divide(9,7)));


// Exercise 2: sayHello
// • Write a function called sayHello that takes in a string as a parameter. If the parameter passed to the function is your first name, it should return "Hello Boss", but if the parameter passed to the function is any other name, it should return the string "Hello" and the name parameter

let myName = "OREL"

function sayHello (name){
    if(name === "OREL"){
        return "Hello BOOS"
    }else{
        return "HELLO" + " " + name
    }
}
console.log(sayHello("OREL"));

// Exercise 3: averageNumber
// • Write a function called average which accepts an array as a parameter. The function should return the average of all of the numbers in the array (you can assume that the array passed to the function will contain only numbers)

let arrayOfNumbers = [120,240,360,480,520]
let x = [6543,6432,2,45678,0]

function average (arr){
    console.log(arr);
    let sum = 0
    for(let i = 0; i < arr.length; i ++){
        sum = sum + arr[i]
    }
    return sum / arr.length
}
console.log(average(arrayOfNumbers));
console.log(average([8,9,7,65]));


// Exercise 4: createStudent
// • Write a function called createStudent , which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName and the values should be each of The provided strings representing the first name and last name of the student.

function createStudent(First,Last){
    return studentInfo = {
        firstName: First,
        lastName: Last
    }
}

// • Using your createStudent function, create three students and save them each in a variable. Then create a variable called students , which is an array that will store your three students

let studentONE = createStudent("DAVID","SMITH")
console.log(studentONE);

let studentTWO = createStudent("MOSES", "ATIA")
console.log(studentTWO);

let studentTHREE = createStudent("TONY", "THOMAS")
console.log(studentTHREE);

let students = []

students.push(studentONE, studentTWO, studentTHREE)
console.log(students);

// • Write a function called findStudentByFirstName , which accepts one parameter, a string. This function should iterate through the students array you just made and if the parameter passed to the function is the same as one of the first name's of the students, the function should return true . Otherwise it should return false . This function should be case insensitive so that you can search successfully regardless of capitalization



function findStudentByFirstName(name){
    for(let i = 0; i < students.length; i ++){
            console.log(name);
            console.log(students[i].firstName);
    }
}
findStudentByFirstName("")


// Exercise 5: extractEveryThird
// • Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.

let arrayOfThinhgs = [ 10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100]
let emptyArrayOfThings = []

function extractEveryThird (arr){
    for(let i = 2; i < arr.length; i += 3){
        emptyArrayOfThings.push(arrayOfThinhgs[i])
    }
}
extractEveryThird(arrayOfThinhgs)
console.log(emptyArrayOfThings);


// Exercise 6: countEvensAndOdds
// • Write a function called countEvensAndOdds which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys oddCount and evenCount.

let arrayOfMixedNumrbes = [54,32,4,6,78,9,9,54,2]

function countEvensAndOdds (arr){
    let obj = {evenNumbers: 0, oddNumbers: 0}
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            console.log("HEE");
            obj.evenNumbers += 1
        }else{
        obj.oddNumbers += 1
        }
    }
    return obj
} 
console.log(countEvensAndOdds(arrayOfMixedNumrbes));


// let evenCount = {evens:0, odds:0}
// evenCount.evens = 5
// console.log(evenCount);

// evenCount.odds =+1 
// console.log(evenCount);