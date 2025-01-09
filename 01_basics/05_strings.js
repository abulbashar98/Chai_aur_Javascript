const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

     //******** String Interpolation *****//

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//Note: Declaring string using string Object*
const gameName = new String('The morning is upon us.')


//Note: Access Value for Key in String Object*
// console.log(gameName[0]);


// Note: Access ptotype object in a declared string Object(in console)
// console.log(gameName.__proto__);


console.log(gameName.length);

   //********  Some Methods(functions) inside string prototype *****//

// console.log(gameName.charAt(3));

const str1 = "Hello";
const str2 = "World";

// console.log(str1.concat('-',str2));


// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

// Note use of negatinve value in Slice Method.

const anotherString1 = gameName.slice(4)
console.log(anotherString1); // mornig is upon us.

const anotherString2 = gameName.slice(4, -1)
console.log(anotherString2); // mornig is upon us
const anotherString3 = gameName.slice(-3)
console.log(anotherString3); // us.

const anotherString4 = gameName.slice(-6, -1)
console.log(anotherString4); // on us


const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split(' '));
// [ 'The', 'morning', 'is', 'upon', 'us.' ]