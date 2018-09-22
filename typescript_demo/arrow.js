// $ tsc arrow.ts ; node arrow.js
var add = function (a) { return function (b) { return a + b; }; };
console.log(add(1)(2));
