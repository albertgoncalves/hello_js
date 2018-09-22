// https://www.typescriptlang.org/docs/handbook/basic-types.html
// tsc array.ts ; node array.js
var numToArray = function (a) { return function (b) {
    var returnArray = [a, b];
    return returnArray;
}; };
console.log(numToArray(1)(2));
