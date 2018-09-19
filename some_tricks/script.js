/*jshint esversion: 6 */

// https://medium.freecodecamp.org/9-neat-javascript-tricks-e2742f2735c3

const arr1 = [11, 22, 33, 44, 55, 66];
console.log(arr1);

// truncate array
var arr2    = arr1;
arr2.length = 3;
console.log(arr2);

var arr3    = arr1;
arr3.length = 0;
console.log(arr3);

// assign new variables via object unpacking
const  csvLike   = '1997,John Doe,US,john@doe.com,New York';
const {2: country,
       4: state} = csvLike.split(',');
console.log(csvLike);
console.log(country);
console.log(state  );

// ES2015 with the spread operator can be used to remove duplicate items from
// given array
const removeDuplicateItems = (arr) => [...new Set(arr)];

const someDupes = [42, 'foo', 42, 'foo', true, true];
const noDupes   = removeDuplicateItems(someDupes);
console.log(someDupes);
console.log(noDupes  );

// arrays can be flattened with spread operator
const nestedArr = [11, [22, 33], [44, 55], 66];
const flatArr   = [].concat(...nestedArr);
console.log(nestedArr);
console.log(flatArr );

// this will only work with bidimensional arrays -- with recursion we can go
// deeper
function flattenArray(arr) {
    let flattened = [].concat(...arr);
    return flattened.some(item => Array.isArray(item)) ?
        flattenArray(flattened) : flattened;
}

// this above function works by checking if any item within the given array
// is itself an array; if so, the list is flattened again
console.log(nestedArr.some((item) => Array.isArray(item)));
console.log(flatArr  .some((item) => Array.isArray(item)));

const deepArr = [1, [2, [3, [4, 5]]]];
console.log(deepArr);
console.log(flattenArray(deepArr));

const range = (a) => (b) => Array.from(new Array(b), (x,i) => i + a);
xs  = range (1) (5);
xs2 = xs.map((x) => x + 1);
console.log(xs);
console.log(xs2);

const fib = (x) =>
    (x === 0 || x === 1) ? x
                         : fib(x - 1) + fib(x - 2);
console.log(fib (10));

var string1 = "";
const object1 = [1, 2, 3];
for (let property1 in object1) {
  string1 = string1 + object1[property1];
}
console.log(string1);
