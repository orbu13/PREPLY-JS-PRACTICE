// function add (num1,num2,num3){
//     console.log(result = "the first number is " + num1 + " the second number is " + num2 + " the third number is " + num3 + " the sum of all inputs is: " + num1+num2+num3
//     );
// }

// function sayHi(place){
// console.log(place*3);
// }

// function cyilnder(radius,height){
// const result = 3.142 * radius * radius * height
// console.log(result);

// }


// function counting (o){
//     if(o >= 50 && o <=59){
//         console.log("accepted");
//     }
//     else{
//         console.log("denied");
//     }
// }

// for (let i =0; i<= 60; i++){
//     if(i >= 50 && i <=59)
//     console.log(i);
// }

// let x = prompt("choose your number")
// let o = Math.floor(Math.random() * 20)+1;

// function chekingOnNum(){
//     let x = prompt("choose your number")
//     let o = Math.floor(Math.random() * 20)+1;
//     if(parseInt(x) === o ){
//         console.log("your number you picked is " + x + " and the number the computer choose was " + x + " both numbers are equal. YOU WIN ");
//     }else{
//         console.log("both number are not match at this time. try next.");
//         chekingOnNum()
//     }
// }
// chekingOnNum()

// console.log(Math.random()*20) +1;

// Given two sorted arrays, write a JavaScript function to merge them into a 
// single sorted array without using any built-in array methods.

// let arr1 =[1,2,3,4,5]
// let arr2 =[6,7,8,9,10]

// function concat(a,b){
//     console.log(arr1+ "," + arr2);
// }
// concat(arr1,arr2)

// Write a function in JavaScript that takes three numbers as parameters
//  and returns the larger one without using the Math.max() function.

// let x = +prompt("enter number between 1-10")
// let y = +prompt("enter number between 1-10")
// let t = +prompt("enter number between 1-10")

// function ABC (x,y,t){
//         if(y > x && y > t){
//             console.log(y);
//         }else if(x > y && x > t){
//             console.log(x);
//         }else{
//             console.log(t);
//         }
// }


function CBA(x,y,a){
    if(x < y && x < a){
        console.log(x);
    }else if(y < x && y < a){
        console.log(y);
    }else{
        console.log(a);
    }
}
