//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

//*******Learn With Sumit on Let,var,const and Block scope,function scope,parent and child scope******//

/*-------------- *\
  📔 Main Notes 📔
\*-----------------*/

// 1. var is function scoped, while let and const both are block scoped...
// 2. using var variable we can create multiple references of a variable, but with let and const we cannot re assign the same named variable more than once....
// 3. let variable declaration can later have changed value.... But const declared variable can not be changed (value) again....
// 4. though we can not re assign or change the value of const we can mutate it's value like mutating an object value....
// 5. let and var defined variables can get  or change the value of course inside child scope..

// INSTANCE1️⃣:

if (true) {
  var varVariable = "This is var";
}
// console.log(varVariable); //====> "This is let"

if (true) {
  let letVariable = "This is Let";
}
// console.log(letVariable); //=====> ReferenceError: letVariable is not defined

// INSTANCE2️⃣:

var varVariable = "This is var";
// console.log(varVariable); //====> "This is let"

if (true) {
  var varVariable = "This is var again";
}
// console.log(varVariable); //====> "This is var again"

if (true) {
  let letVariable = "This is Let";
  //   console.log(letVariable); //====> "This is let"
  const constVariable = "This is Const";
  //   console.log(constVariable); //====> "This is constVariable"

  //   let letVariable = "This is letVariable again";
  //   console.log(letVariable); //=====> SyntaxError: Identifier 'letVariable' has already been declared

  // const constVariable = "This is constVariable again";
  // console.log(constVariable); //=====> SyntaxError: Identifier 'constVariable' has already been declared
}
// console.log(letVariable); //=====> ReferenceError: letVariable is not defined

// INSTANCE3️⃣:

let letVariableDef;
// console.log(letVariableDef);  //====> undefined

if (true) {
  letVariableDef = "THis is how we can change or assign value later";
  //   console.log(letVariableDef); //===>"THis is how we can change or assign value later"
  letVariableDef =
    "THis is how we can change or assign value later more than once";
  //   console.log(letVariableDef); //====> "THis is how we can change or assign value later more than once"
}

const constVariableDef = "This is first def and val of con";
// console.log(constVariableDef); //====> "This is first def and val of con"
// constVariableDef =
//   "We can not redefine with same name and also cannot change value like let";
// console.log(constVariableDef); //=====> TypeError: Assignment to constant variable.

// INSTANCE4️⃣:

const person = {
  name: "Steve Smith",
  age: 31,
};
console.log(person); //====> { name: 'Steve Smith', age: 31 }

person.name = "Sam Curran";
person.age = 26;
console.log(person); //=====> { name: 'Sam Curran', age: 26 }

// ++++++++++++++++++ interesting ++++++++++++++++++

//Note: Basic hint of hoisting and execution context in Javascript.

console.log(addone(5));
//===> 6

function addone(num) {
  return num + 1;
}

addTwo(5);
//===> ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};
