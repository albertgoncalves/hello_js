/*jshint esversion: 6 */

// The let statement declares a block scope local variable, optionally
// initializing it to a value.
let x = 1;

console.log('ground floor');
console.log(x);

if (x === 1) {
    // Attempting to retrieve a value for x here will return ReferenceError.
    // console.log(x);

    let x = 2;

    console.log('1 level down');
    console.log(x);
    // expected output: 2

    if (x !== 1) {
        let x = 3;

        console.log('2 levels down');
        console.log(x);
    }

    if (x === 2) {
        console.log(
            'if there is no new value for x, sadly there is inheritance'
        );
        console.log(x);
    }
}

console.log('back to ground floor');
console.log(x);
// expected output: 1


// Conversely, the var statement declares global variable.
var y = 1;

if (y === 1) {
    console.log(y);
    // expected output: 1

    var y = 2;

    console.log(y);
    // expected output: 2
}

console.log(y);
// expected output: 2


// Variables defined with const behave similarly to those defined with var,
// though they are immutable and do not permit re-assignment.
const z = 1;

// This will yield a TypeError.
// z = 2;
