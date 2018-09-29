/*jshint esversion: 6 */

// https://www.youtube.com/watch?v=Ys_YcUF_MyQ

console.log('1' -   1 );
console.log('1' +   1 );
console.log('1' - (-1));
console.log('0' +   1 );
console.log('0' -   1 );

let True  = (a, b) => a;
let False = (a, b) => b;

console.log(True  (1, 2));
console.log(False (1, 2));

var B = {
    true:  True,
    false: False
};

let and = (x, y) => x(y, False);
let or  = (x, y) => x(True, y );

console.log(and (True , True ) ('True', 'False'));
console.log(and (True , False) ('True', 'False'));
console.log(and (False, True ) ('True', 'False'));
console.log(and (False, False) ('True', 'False'));

console.log(and (True , True ) ('True', 'False'));
console.log(and (True , False) ('True', 'False'));
console.log(and (False, True ) ('True', 'False'));
console.log(and (False, False) ('True', 'False'));

and (B[true], B[!!'Hello, bool!']) (
    () => console.log('True' ),
    () => console.log('False')
    ) ();
