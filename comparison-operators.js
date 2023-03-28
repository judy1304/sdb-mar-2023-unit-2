// Comparison Operators

/* 
double equal (====)
tripe equal (===)

Not Equal 
(!=)
(!==) - not equal 

For Numbers (Greater than, less than)
    (>) - greater than
    (<) - less than
    (>=) - greater than or equal to 
    (<=) - less than or equal to 

Logical Operators 
    && - and
    || - or 

 */

let helicopter1 = "blackHawk";
let helicopter2 = "Blackhawk";

console.log(helicopter1.toUpperCase() === helicopter2.toUpperCase());

let myAge = 42;
let friends = "42";

console.log("my age double", myAge == friendAge);
console.log("my age triple", myAge === friendAge);

let name1 = "Robin";
let name2 = "Bathman";

console.log(name1 != name2);

console.log("not age", myAge !== friendAge); 

let num1 = 10;
let num2 = 5;

console.log(num1 > num2);

let joiningMilitaryAge = 18;
let maxJoinMilitaryAge= 34

let bethAge = 17;
let hankAge = 38;

console.log(bethAge >= joiningMilitaryAge);

console.log("hank", hankAge >= joiningMilitaryAge && hankAge <= maxJoinMilitaryAge);

let person1Permissons = "admin"
let person2Permissions = "user"
let person3Permissions = "guest"

let isViewable = person1Permissions === "admin" || person2Permissions === "user";

console.log("isViewableAdmin", isViewableAdmin)''

// ? Mini Challenge:
// Create a variable Called isEven
// the variable will be true if th value is even
// false if it is odd
// test it out with 33 and 122

let isEven1 = 33 % 2 === 0;
let isEven2 = 122 % 2 == 0;

console.log(isEven1);
console.log(isEven2);
