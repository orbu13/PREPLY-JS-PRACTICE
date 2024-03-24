// let arrayOfNumbers = [120,240,360,480,500]
let nums = [7,12,16,21,31,5,9,22,11,49,33,51,12,26,9,3,12]
let newNumArr =[]

for(let i = 2; i < nums.length; i +=3){
    newNumArr.push(nums[i])
}
console.log(newNumArr);

// repeat
// Write a function called repeat, which accepts a string and a number and returns a new string with the
// string repeated that number of times.
// Do not use the built in repeat method
// Examples:

// repeat('Matt', 3) // 'MattMattMatt'
// repeat('Elie', 2) // 'ElieElie'
// repeat('Michael', 0) // ''


function repeat (a,b){
    if (b === 0){
        return ""
    }else{
    let newString = ""
    for (let i = 0; i < b; i ++){
        console.log("looping");
        console.log(newString);
        newString = newString + a
    }
    return newString 
    }
}
console.log(repeat("=-", 9));

let str = ""
str = str + "=-"
console.log(str);

str = str + "?"
console.log(str);


// removeFromString
// Write a function called removeFromString, which accepts a string, a starting index (number) and a
// number of characters to remove.
// The function should return a new string with the characters removed.
// Examples:
// removeFromString('Elie', 2, 2) // 'El'
// removeFromString('Elie', 0, 1) // 'lie'
// removeFromString('Rithm School', 0, 6) // 'School'
// removeFromString('Rithm School', 2, 4) // 'RiSchool'
// removeFromString('Rithm School', 6, 400) // 'Rithm '

function removeFromString (a,b,c){

}



// // indexOf
// Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// Do not use the built in Array.indexOf() function!
// Examples:
// let arr = [5, 10, 15, 20];
// indexOf(arr, 20); // 3
// let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // 1
// let arr3 = [1, 2];
// indexOf(arr3, 10); // -1

let newODDs = [11,17,5,21,27,13]

function indexOf (newODDs){
    if(newODDs[3] === 21){
        console.log(3);
    }
} 
indexOf(newODDs)


// Using for loop iterate through an array of letters and swap the case for each letter.

let arrayOfLetters = ["a","b","K","P","E","Y","F"]
let arrayOfNothingA = []
let arrayOfNothingB = []

for(let i = 0; i <arrayOfLetters.length; i ++){
    if(arrayOfLetters[i] === arrayOfLetters[i].toUpperCase()){
        console.log("yes");
        arrayOfLetters[i] = arrayOfLetters[i].toLowerCase()
    }else{
        arrayOfLetters[i] = arrayOfLetters[i].toUpperCase()
    }
}
console.log(arrayOfLetters);

let letter ="l"
letter = letter.toUpperCase()
console.log(letter);