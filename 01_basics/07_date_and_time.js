// Dates

let myDate = new Date();
// console.log(myDate.toString());
//==> Sun Jan 12 2025 17:19:43 GMT+0000

// console.log(myDate.toDateString());
//===> Sun Jan 12 2025

//console.log(myDate.toLocaleDateString());
//===> 1/12/2025

//console.log(myDate.toLocaleString());
//===> 1/12/2025, 5:26:09 PM

//console.log(myDate.toJSON());
//===> 2025-01-12T17:23:36.679Z

//console.log(myDate.toISOString());
//===> 2025-01-12T17:28:52.304Z

//console.log(myDate.toLocaleTimeString());
//====> 5:30:01 PM

//console.log(myDate.toTimeString());
//===> 17:31:00 GMT+0000

// console.log(typeof myDate); //==> object

//let myCreatedDate = new Date(2023, 0, 23);
//console.log(myCreatedDate.toDateString());
//===> Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 14, 7, 2);
// console.log(myCreatedDate.toLocaleString());
//==> 1/14/2023, 7:02:00 AM

// yy/mm/dd
let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleDateString());
//==> 1/14/2023

// mm-dd-yy
// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleDateString());
//===> 1/14/2023

// dd-mm-yy is not Supported****
// let myCreatedDate = new Date("14-01-2023");
// console.log(myCreatedDate.toLocaleDateString());
//===> Invalid Date

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
//===> 1736709887054

// console.log(myCreatedDate.getTime());
//===> 1673654400000

// In Seconds:
//console.log(Date.now() / 1000);
//====> 1736710072.864
// console.log(Math.floor(Date.now() / 1000));
//===> 1736710148

let newDate = new Date();
// console.log(newDate.toLocaleDateString());
//===> 1/12/2025

// console.log(newDate.getMonth());
//===> 0
// Note: Month starts from 0 like array index in JS

// to be more user friendly,
// console.log(newDate.getMonth() + 1);
//==> 1

// console.log(newDate.getDate());
//===> 12

// `${newDate.getDay()} and the time `

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
  })
);

//===> Sunday 7:42 PM
