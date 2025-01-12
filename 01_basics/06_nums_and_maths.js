const score = 400;
// console.log(score); //==> 400

const balance = new Number(100);
// console.log(balance); //===> [Number: 100]

//***** Useful Methods in Number Proto *****//
// console.log(balance.toString().length);
//===> 3

// console.log(balance.toFixed(2)); //===> 100.00

// console.log(typeof balance); //===> object

const otherNumber1 = 23.896567;
// console.log(otherNumber1.toPrecision(3));
//===> 23.9

const otherNumber2 = 123.896567;
// console.log(otherNumber2.toPrecision(3));
//===> 124

const otherNumber3 = 1123.896567;
// console.log(otherNumber3.toPrecision(3));
//===> 1.12e+3

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
//==> 1,000,000

// console.log(hundreds.toLocaleString("en-IN"));
//===> 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

/*
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
*/

//Note: Math.random()

// console.log(Math.random());
//====> 0.4852048400682727
//===> 0.23104239907179713

//*===> 0.06907895371336759

// console.log(Math.random() * 10);
//===> 6.3496313281098615
//==> 8.247443271111374
//===> 2.7921221559890186

//*====> 0.49959047174441995

//Solve:

// console.log((Math.random() * 10) + 1);
//====> 5.273117140031117
//====> 10.69711510347998

console.log(Math.floor(Math.random() * 10 + 1));
//===> 1
//===> 8
//===> 1
//===> 1
//===> 1
//===> 2
//===> 5
//===> 9
//===> 8
//===> 3

//******** Declare a random in a range *****//

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

//==> 12
//==> 18

//==> 10
