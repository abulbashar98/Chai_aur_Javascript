
let score = "hitesh"

//******** Two ways of using typof method *****//

// console.log(typeof score); //==> string
// console.log(typeof(score)); //==> string



let valueInNumber = Number(score)
//console.log(typeof valueInNumber); //==> Number
//console.log(valueInNumber); //==> NaN

// Note: NaN is a special type of Number in JS



// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// "" => 0; "anything" =>1;

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); //==>true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); //==> 33
// console.log(typeof stringNumber); //===> string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); //===> -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); //===> "hello hitesh"

// console.log("1" + 2); //==> 12
// console.log(1 + "2"); //===> 12
// console.log("1" + 2 + 2); //===> 122
// console.log(1 + 2 + "2"); //====> 32

// **** Not Recommended ***** //
// console.log( (3 + 4 * 5 % 3);

// **** Recommended ***** //
// console.log( (3 + 4) * 5 % 3 ); //====>2

// **** Not Recommended ***** //

// console.log(+true); //===> 1
// console.log(+""); //====> 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// Prefix
let gameCounter = 100
++gameCounter;
// console.log(gameCounter); //===> 101



let x = 3;
let y = ++x;

console.log(x); //==> 4
console.log(y);  //===> 4


// Postfix
let gameCounter2 = 100
gameCounter2++;
console.log(gameCounter2); //====> 101
 

/*
let x = 3;
let y = x++;

console.log(x); //==> 4
console.log(y);  //===> 3
*/


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// 