// Boolean Logic Exercises
// Exercise 1 Ternary Operator
// Write a program that takes an integer num as input and prints "Even" if num is even and "Odd" if it's odd using the ternary operator.



// Exercise 2: If-Else Statement
// Write a program that checks if a user's age is greater than or equal to 18. If it is, print "You are an adult." Otherwise, print "You are a minor."

let userAge = 18
if(userAge < 18){
    console.log("Sorry. You are a minor.");
}else{
    console.log("awesome. You are an adult.");
}

// Exercise 3: Else If Statement
// Write a program that takes a numerical grade (0-100) as input and prints the corresponding letter grade using the following scale:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

let grade = 50
if(grade > 90){
    console.log("your grade is: A");
}else if (grade >= 80){
    console.log("your grade is: B");
}else if( grade >= 70){
    console.log("your grade is: c");
}else if(grade >= 60){
    console.log("your grade is: D");
}else if(grade <= 59){
    console.log("your grade is: F");
}else {
console.log("youre a loser");
}

let numericalGrade = 85;
let letterGrade;

if (numericalGrade >= 90) {
letterGrade = "A";
} else if (numericalGrade >= 80) {
letterGrade = "B";
} else if (numericalGrade >= 70) {
letterGrade = "C";
} else if (numericalGrade >= 60) {
letterGrade = "D";
} else {
letterGrade = "F";
}

console.log("Your letter grade is: " + letterGrade);



// Exercise 4: Modulo Operator
// Write a program that checks if a given number x is divisible by 3 and 5, both, and prints "Divisible by both 3 and 5" if true. 
// Otherwise, print "Not divisible by both 3 and 5."

let x = +prompt("Enter your number:")
if(x % 3 === 0 &&  x % 5 === 0){
    console.log("Divisible by both 3 and 5");
}else{
    console.log("Not divisible by both 3 and 5.");
}

// Exercise 5: Switch Statement
// Write a program that takes a day of the week as input (e.g., "Monday", "Tuesday", etc.) and uses a switch statement to print a message based on the input. 
// For example, if the input is "Monday," it should print "It's the start of the workweek."

let dayOfTheWeek = "Wednesday"
switch(dayOfTheWeek){
    case "Monday":
        console.log("Today is " + dayOfTheWeek + " and this is so great!");
        break;
    case "Tuesday":
        console.log("Today is " + dayOfTheWeek + " and we're having pizza");
        break;
    case "Wednesday":
        console.log("Today is " + dayOfTheWeek + " and the weekend is just around the corner...");
        break;
    case "Thursday":
        console.log("Today is " + dayOfTheWeek + "and we most wear pink.");
        break;
    case "Friday":
        console.log("Today is " + dayOfTheWeek + "and we're off to spain!! WOOHOOO");
        break;
    case "Saturday": 
        console.log("Today is " + dayOfTheWeek + " This is sucks. i got kicked off the plain.");
        break;
    case "sunday":
        console.log("Today is " + dayOfTheWeek + "this weekend turned out to be so much better!");
        break;
        
    default:
        console.log("This is not a valid day SIR!");

}



// Exercise 6: Logical Operators
// Write a program that checks if a user's input for age is between 18 and 65 (inclusive) and if the user has a valid driver's 
// license (you can use a boolean variable hasLicense to simulate this). If both conditions are met, print "You are eligible to drive." 
// Otherwise, print "You are not eligible to drive."

let userAgeA = 70
let driveLicense = true 

if(userAgeA > 18 && userAgeA < 65 && driveLicense === true){
    console.log("You are eligible to drive." );
}else{
    console.log("You are not eligible to drive.");
}


// Exercise 7: Password Validation Write a program that asks the user to enter a password. If the password is 
// "secret123", print "Access granted." Otherwise, print "Access denied."

let y = prompt("Enter your password:")

if(y === "secret123"){
    console.log("Access granted.");
}else{
    console.log("Access denied.");
}

// Exercise 8: Leap Year Checker
// Write a program that checks if a given year is a leap year. A leap year is divisible by 4, but not divisible by 100 unless it is also divisible by 400. Print "Leap year" if it's a leap year and "Not a leap year" otherwise.

let leapYear = 2004;

if(leapYear % 4 === 0 && leapYear % 100 !== 0){
    console.log("Leap year");
}else if(leapYear % 400 === 0){
    console.log("Leap year");
}else{
    console.log(" NOT a Leap year");
}

// Exercise 9: Logical Combinations
// Write a program that takes two boolean values, isMember and isPremium, which represent whether a user is a member and whether they are a premium member. Use these values to determine if they are eligible for a discount. If both isMember and isPremium are true, print "You are eligible for a premium discount." 
// If only isMember is true, print "You are eligible for a regular discount." If neither is true, print "You are not eligible for a discount."

let isMember = false
let isPremium = false 

if(isMember === true && isPremium === true){
    console.log("You are eligible for a premium discount." );
}else if(isMember === true && isMember === false){
    console.log("You are eligible for a regular discount.");
}else{
    console.log("You are not eligible for a discount."
    );
}

let numberAB = 35
// if(numberAB == "35"){
//     console.log("correct");
// }else{
//     console.log("incorrect");
// }

numberAB === "35" ? console.log("correct"):console.log("incorrect");
