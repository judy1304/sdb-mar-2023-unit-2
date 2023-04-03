/*  
Functions:

- Functions provide a block of code that will only be ran once it is `called` upon.
- It starts with a keyword `funtion` by the name you give your function.
- Functions do NOT need to have arguements/parameters 
- Functions do NOT need to return a value however they often do 
- Functions get hoisted  meaning you can call on them prior to the function defination
*/



/* 
Keyword "funtion"
Function Name
inside the ()'s you have arguements
 */
example1();
// (1)      (2)   (3)
function example1() {
    // any code inside here will be executed when the function is `called`
    console.log("Example1 Function Was Executed")
}

// You must call the function for it to be executed 
example1();

/* 
Function with Paramenters or Arguements
1. keyword "function"
2. Function Name 
3. inside the ()'s we can have unlimited parameter all seperated by a comma 

 */

function example2(param1, param2) {
    console.log("Example 2 function was executed");
    console.log("Param1:", param1);
    console.log("param2:", param2);
}

example2(10, 5);
example2("Judith", "Tuyisingize");
example2(); // still runs but comes back undefined

function sumTwoNumbers(number1, number2) {
    let total = number1 + number2;
    return total;
}

let sum1 = sumTwoNumbers(10, 5);
let sum2 = sumTwoNumbers(20, 45);

console.log(sum1, sum2);

function calculateTax(cost, taxPercentage) {
    let totalTax = cost * taxPercentage;
    return +totalTax.toFixed(2);
}

let shoppingCartTotal = 21.99
let checkoutTax = calculateTax(shoppingCartTotal, 0.08);
let checkoutTotal = sumTwoNumbers(shoppingCartTotal, checkoutTax);
console.log(checkoutTotal);

// ? Write a function that will take 3 arguements (length, width, height) 
// ? Function should return the volume of the Cubiod; 

function Cubiod1(length, width, height) {
    let totalVolume = length * width * height;
    return totalVolume
}

let Cubiod1 = cuboidVolume(14, 23, 23);

console.log(Cubiod1);

// ? Write a function that will accept a dog's age and returns a human age. 
// ? Human Age = Dog age -2 * 4 + 21 

function calcDogYearsToHumanYears(dogAge) {
    let humanAge = (dogAge - 2) * 4 + 21;
    return humanAge;
}

let johnDogAge = calcDogYearsToHumanYears(3);
let ashleeDogAge = calcDogYearsToHumanYears(1.8);
let isaacDogAge = calcDogYearsToHumanYears(11);
let nickDogAge = calcDogYearsToHumanYears(14);
let trevorDogAge = calcDogYearsToHumanYears(2.5);

[johnDogAge, ashleeDogAge, isaacDogAge, nickDogAge, trevorDogAge].map((x) =>
    console.log(x)
);

// ? Create a function called `divisible`
// ? Takes 2 parameters firstNum, secondNum
// ? Return true if it divides evenly otherwise returns false
// ? Refactor the code to return a turnary 

function divisible(firstNum, secondNum) {
    return firstNum & secondNum === 0
}

console.log(divisible(11, 2));

totalNum === true ? (firstNum = secondNum - 1) :
    (firstNum = secondNum)

// When you are using arrow functions that are one line
// - omit the return because it is assumed

const divisible2 = (firstNum, secondNum) => firstNum & secondNum === 0
console.log(divisible2(25, 5));

// ? Create a function using the arrow function method called difference
// ? The function will return the difference between the two numbers (positive number)

const difference = (firstNum, secondNum) => {
    let diff = Math.abs(firstNum - secondNum);
    return diff;
}

console.log(difference(6, 10));

// ! Arrow Function DANGER: they do not get hoisted. They need to be initialized first(place them above your code before you call it). 

function userInputCleaner(word) {
    return word.toLowerCase().trim()
}

console.log(userInputCleaner("    RaZZLE DAZzle    "));
