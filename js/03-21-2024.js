console.log("___FUNCTION___");

function middleWord(name,lastName,feeling,great){
    console.log("hey " + name + " " + lastName.toUpperCase() + " how are you ? " + feeling + " today " + great + ".");
}
middleWord("orel", "butbul","great","ok")

let arr = ["one","three","fives","seven","nines"]

function middWOrd(arr){
    for( let i = 0; i< arr.length; i++){
        if(arr[i] === "one"){
            console.log("oNe");
    }else if (arr[i] === "three"){
        console.log("thRee");
    }else if(arr[i] === "fives"){
        console.log("fiVes");
    }else if(arr[i] === "seven"){
        console.log("seVen");
    }else if(arr[i] === "nines"){
        console.log("niNes");
    }else{
        console.log(middWOrd);
    }
    }
}middWOrd(arr)

let arrayOfDate =["Ontop","below","Between","aside","underneath"]
const finalOutput = []

function toLOwer(arrayOfDate){
    for(let i = 0; i < arrayOfDate.length; i ++){
        const myWord = arrayOfDate[i]
        const reminedOfMyWord = arrayOfDate[i].slice(1)
        console.log(reminedOfMyWord);

        const myData = arrayOfDate[i].charAt(0)
        console.log(myData);
            if(myData === arrayOfDate[i].charAt(0).toUpperCase()){
                finalOutput.push(myData.toLowerCase() + reminedOfMyWord)
            }else if(myData === arrayOfDate[i].charAt(0).toLowerCase()){
                finalOutput.push(myData.toUpperCase() + reminedOfMyWord)
            }else{

            }
        }
        return finalOutput
}
let result = toLOwer(arrayOfDate)
console.log(result);


