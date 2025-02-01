function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }

  return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("hitesh"))

// Note: ! this sign cannot be used in git bash commit message.

// Rest operator(...)
// function handleCartPrice(...prices) {
function handleCartPrice(val1, val2, ...prices) {
  return prices;
}

console.log(handleCartPrice(200, 400, 600, 800));

function handleUserObject(an_obj) {
  console.log(`username is ${an_obj.username} and price is ${an_obj.price}`);
}

handleUserObject({
  username: "Bashar",
  price: 999,
});

const myArray = [2, 4, 6, 8, 9];

function getSecondValueOfArray(getArray) {
  return getArray[1];
}

// console.log(getSecondValueOfArray(myArray));
console.log(getSecondValueOfArray([1, 578, 5, 6, 7]));
