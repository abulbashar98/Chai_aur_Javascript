const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
//====> [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3][1]);
//===> flash

// const combination = marvel_heroes.concat(dc_heroes);
// console.log(combination);
//===> [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes];

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(1);
// console.log(real_another_array);
//===> [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);
/* [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("creating_array"));
// console.log(Array.from({ name: "hitesh" })); // interesting
//====> []

// console.log(Array.from(5));
//===> []

// console.log(Array.from(""));
//===> []

// console.log(Array.from("A"));
//===> ['A']

let score1 = 100;
let score2 = 200;
let score3 = 300;
let sam = { name: "sam", age: 20 };

// console.log(Array.of(score1, score2, score3, sam));
//===> [ 100, 200, 300, { name: 'sam', age: 20 } ]
