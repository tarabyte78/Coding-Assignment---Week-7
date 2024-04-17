// QUESTION 1 //
//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Programmatically subtract the value of the first element in the array from the value in the last element of the array. Do not use numbers to reference the last element, find it programmatically. ages[7] - ages[0] is not allowed! 

    const lastIndex = ages.length - 1;
    const difference = ages[lastIndex] - ages[0];
    console.log("Difference between last and first element:", difference);

// Add a new age to the array
    ages.push(42);
    console.log (ages);

// Subtract the first element from the last element again with the updated array
    const newLastIndex = ages.length - 1;
    const newDifference = ages[newLastIndex] - ages[0];
    console.log("Difference with the updated array:", newDifference);

// Calculate the average age
    let sum = 0;
    for (let age of ages) {
        sum += age;
    }
    const average = sum / ages.length;
    console.log(average);

//QUESTION 2//

//Use a loop to iterate through the array and calculate the average number of letters per name.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalLetters = 0;

for (let name of names) {
totalLetters += name.length;
}

const averageLetters = totalLetters / names.length;
console.log(averageLetters);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatenatedNames = '';

for (let i = 0; i < names.length; i++){
    concatenatedNames += " " + names [i];
    if (i < names.legth -1){
        concatenatedNames + " ";
    }
}  

console.log (`${concatenatedNames}`);

//QUESTION 3//
//How do you access the last element of any array?
    //ANSWER: array index -1
    
//QUESTION 4//
//How do you access the first element of any array?
    //ANSWER: array index 0

//QUESTION 5//
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log(nameLengths);


//QUESTION 6//
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

console.log (nameLengths.reduce ((a, b) => a + b));

//QUESTION 7//
//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

const myWord = "Goodbye";
var howManyTimes = 5;

console.log (myWord.repeat(howManyTimes));


//QUESTION 8//    
//Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

const firstName = 'Tara';
const lastName = 'Mueller';

console.log (firstName + " " + lastName);

//QUESTION 9//    
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

const sumOfAllNums = [5, 9, 100, 5, 2,];

console.log (sumOfAllNums.reduce ((a, b) => true)) ;

     
//QUESTION 10//
//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function calculateAverage(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

console.log(calculateAverage(sumOfAllNums));

//QUESTION 11//    
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


let freckles = [2, 4, 6, 34, 1];
let moles = [3, 6, 38, 2, 7];

function calculateAverage(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}

function compareAverages(arr1, arr2) {
    const avg1 = calculateAverage(arr1);
    const avg2 = calculateAverage(arr2);
    return avg1 > avg2;
}

console.log(compareAverages(freckles, moles));

//Question 12//
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let isHotOutside = false;
let moneyInPocket = 12;

const willBuyDrink = (isHotOutside, moneyInPocket) => {
    return isHotOutside && moneyInPocket > 10.50;
}

console.log(willBuyDrink(isHotOutside, moneyInPocket));

//Question 13//
//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//Comments: We will go on vacation if the kids are no longer in school and the month is July.

let kidsInSchool = 'no';
let month = 'July';

 const goOnVacation = (kidsInSchool, month) => {
    return kidsInSchool === 'no' && month === 'July';
    };

console.log (goOnVacation (kidsInSchool, month))

//end


