//Note: this in Context of object Method

const loggedInUser = {
  username: "steve",
  email: "ab@gmail.com",
  welcomeMessage: function () {
    // console.log(`${username}, is now logged in`);
    //===> ReferenceError: username is not defined

    console.log(`${this.username}, is now logged in`);
    //===> steve, is now logged in
    console.log(this);
    /*===> 
    {
   *** username: 'steve',
    email: 'ab@gmail.com',
    welcomeMessage: [Function: welcomeMessage]
  }

  {
  ***  username: 'sam',
    email: 'ab@gmail.com',
    welcomeMessage: [Function: welcomeMessage]
     }*/
  },
};

// loggedInUser.welcomeMessage();
// loggedInUser.username = "sam";
// loggedInUser.welcomeMessage();

//Note: this in context of global object inside nodeJs
// console.log(this);
//===> {}

//Note: this in context of normal function definition

// function chai() {
//   let username = "hitesh";
//   console.log(this);

//Note: notice that this is working as a reference of global object . But we cannot access current context inside a global object reference
// e.g this.username is not allowed.

/*====>
    <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 27.083955999929458,
      nodeStart: 1.5412429999560118,
      v8Start: 3.7031379998661578,
      bootstrapComplete: 21.579026999883354,
      environment: 10.57371799997054,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1738489820199.388
  },
  fetch: [AsyncFunction: fetch]
}
  */

//Note: as we were discussing this.username is not allowed inside a global object reference. hence,
//   console.log(this.username);
//===> undefined
// }

// chai();

//Note: Absolute same circumstances of this for a function holding variable that of a simple function definition, e.g function()
// const chai = function () {
//   let username = "hitesh";
//   console.log(this);
//   console.log(this.username);
// };

// Note: in case of an arrow function this is not returning a global object reference, instead returning an empty object. Same context of a global scope. Still this.username does not work in a single arrow function unless it is a method of an object.

const chai = () => {
  let username = "hitesh";
  console.log(this);
  //===> {}
  console.log(this.username);
  //===> undefined
};

// chai();

//******Arrow function definition******//

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwo(5, 8)); //===> 13

//****Implicit Return ***//

// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(12, 16)); //==> 28

//****Implicit Return with parenthesis***//
// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(12, 11)); //===> 23

//****Implicit Return with must use  parenthesis, like returning an obj***//
// const addTwo = (num1, num2) => ({ username: "hitesh" });

// console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
