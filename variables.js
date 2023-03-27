// 3 ways to declare variables [var, let, or const]
// Javascript ends with a semicolon (however they are optional)

// prettier-ignore
var   firstName  =   "Rob";
//(1)   (2)     (3)   (4)  

/* 
1. JS keyword denotes the creation of the variable (var, let, or const)
2. The name of the variable that the developer will reference in order to use the value that is stored. 
3. Assigment Operator
4. Initial Value it gets set to. 
*/

console.log("firstName", firstName);

// ! 15 variables are CASE SENSITIVE

console.log("firstName", firstName);

// console.log("firstName", FirstName); // code breaks casing matters 

// ? Reassigment of a variable
// No need for a [var, let, or const] because the variable has already been declared.
// Only the variable name folled by an - you can reassign the value.

// ! using var and let you CAN reassign however using const you CANNOT
firstName = "Jordan";
console.log("firstName", firstName);

// CONST example

const pi = 3.14;

pi = 4.2;
//pi = 4.2;// error cannot reassign a const

// ? Can you declare a variable without assigning it?

var lastName;
console.log("lastName", lastName);

lastName = "Smith";

console.log("lastName", lastName);

// ? Create variable used to store a current temp, console.log the current temp. 

// Naming your variables is important. Stay away from single letters. 

//60 * 60 * 24
let seconds = 60
let minutes = 60
let hours = 24
let totalSeconds = seconds * minutes * hours 
console.log("totalSeconds", totalSeconds);

// ? Create variable used to store a current temp, console.log the current temp. 

let currentTemp ="38";