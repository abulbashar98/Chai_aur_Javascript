// Note: ()() IIFE- immediately invoked function expression, used for two reasons
// 1. immediately invoke a function.
// 2. not to be manipulated by global object properties, ()() first parenthesis in iife creates a scope for the function that cannot get manipulated by parent scope or parent global scope.

(function iife1() {
  //named iife
  console.log("i am inside of an iife function definition");
})();

//Note: important not to forget the ; after iife function, as javascript engine invokes the function but we need to end the invoked function properly.

((name) => {
  // anonymous iife
  console.log(
    `My name is ${name}, i am inside an arrow function used as an iife function`
  );
})("bashar");
