// let arrayA = [1,2,3,4,5,6,7,8,9,10]
// let arrayB = ["orel", "banana", "pizza", "milk" ,"school", "class"]
// let arrayC = []
// let arrayOfNumber = [12,8,42,14,68,16,22]

// console.log(arrayB[3]);
// console.log(arrayA.length);
// console.log(arrayC[0]);
// console.log(arrayB[arrayB.length -1]);
// console.log(arrayB[5])
// console.log(arrayA[3]);
// console.log(arrayB[2] = "fish");
// arrayA.push("bread")
// console.log(arrayA);
// console.log(arrayOfNumber.splice(2,3));
// console.log(arrayOfNumber);
// arrayB.splice(3,0,"onion","curet")

let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];
let arr3 = ["g", "h", "i"];

let arrayL = arr1.concat(arr2,arr3)

let greeting = ["hello", "hey", "my", "name", "is", "orel"]
let sentens = greeting.join(" ")
console.log(sentens);
console.log(typeof greeting);

console.log(arrayL.indexOf("f"));
let prices = [2,3,4,5,6,2,3,4,5,6,2,3,4,5,6]

console.log(prices.indexOf(6));
console.log(prices.lastIndexOf(6));

let people = ["thomas", "liam", "aviv", "bar"]
let morePeople = people

people.unshift("benjamin")
morePeople.push("allen")

console.log(people);
console.log(morePeople);

let newPeople = ['Benjamin', 'thomas', 'liam', 'aviv', 'bar', 'allen']
console.log(newPeople === people);
console.log(people === morePeople);

console.log(people.toString() === newPeople.toString());

