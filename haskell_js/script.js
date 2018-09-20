/* jshint esversion: 6 */

// https://www.youtube.com/watch?v=pUN3algpvMs

// http://jshint.com/docs/
// global-like syntax will disable specifc jshint warnings

// to lint script and evaluate console output (http://jshint.com/docs/cli/)
// $ jshint --verbose script.js
// $ node script.js

function add (a) {
    return function(b) {
        return a + b;
    };
}

const addArrow = (a) => (b) => a + b;
const subtract = (a) => (b) => a - b;

const pair = (first) => (second) => {
    return {'first' : first,
            'second': second};
};

const fst = (p) => p.first;
const snd = (p) => p.second;

function list2array(xs) {
    let result = [];

    while (xs !== null) {
        result.push(fst (xs));
        xs = snd(xs);
    }

    return result;
}

function array2list (arrayLike) {
    let result = null;
    let xs     = Array.from(arrayLike).reverse();

    for (let i = 0; i < xs.length; ++i) {
        result = pair (xs[i]) (result);
    }

    return result;
}

const range = (low) => (high) =>
    low > high ? null
               : pair (low) (range (low + 1) (high));

const map = (f) => (xs) =>
    xs === null ? null
                : pair (f (fst (xs))) (map (f) (snd (xs)));

const fizzbuzz = (n) =>
    // via dev console:
        // >  '' || 5
        // <- 5
        // >  'Hello!' || 5
        // <- "Hello!"
    (n % 3 === 0 ? 'fizz': '') + (n % 5 === 0 ? 'buzz': '') || n;

// foldr :: b -> (a -> b -> b) -> [a] -> b
const foldr = (z) => (f) => (xs) =>
    xs === null ? z
                : f (fst (xs)) (foldr (z) (f) (snd (xs)));

// foldl :: (a -> b -> a) -> a -> [b] -> a
const foldl = (z) => (f) => (xs) =>
    xs === null ? z
                : f (foldl (z) (f) (snd (xs))) (fst (xs));

const foldlFromFoldr = (z) => (f) => (xs) =>
    foldr (z) (flip (f)) (xs);

const foldrFromFoldl = (z) => (f) => (xs) =>
    foldl (z) (flip (f)) (xs);

const reverse = (xs) => rev (xs) (null);
const rev     = (xs) => (a) =>
    xs === null ? a
                : rev (snd (xs)) (pair (fst (xs)) (a));

// flip :: (a -> b -> c) -> b -> a -> c
const flip = (f) => (x) => (y) => f (y) (x);

const foldlFromFoldr2 = (z) => (f) => (xs) =>
    foldr (z) (flip (f)) (reverse (xs));

const foldrFromFoldl2 = (z) => (f) => (xs) =>
    foldl (z) (flip (f)) (reverse (xs));

const loop = (f) => (x) => (n) =>
    n <= 0 ? x
           : f (loop (f) (x) (n - 1));



// MAIN

let myList = pair (1) (
                pair (2) (
                    pair (3) (null)
                    )
                );
let myArray = [1, 2, 3, 4, 5, 6];
// let myArray = 'Hello!';

console.log(add      (1) (2));
console.log(addArrow (1) (2));
console.log(myList);
console.log(fst (myList));
console.log(snd (myList));
console.log(array2list (myArray));
console.log(list2array (myList ));
console.log(list2array (array2list (myArray)));
console.log(array2list (list2array (myList )));
console.log(array2list ("Hello!"));
console.log(list2array (range (1) (10)));
console.log(list2array (map ((x) => addArrow (x) (1)) (range (1) (10))));
console.log(list2array (map (addArrow (1))            (range (1) (10))));
console.log(list2array (map (fizzbuzz)                (range (1) (20))));
console.log(subtract (1) (2));
console.log(flip (subtract) (1) (2));
console.log(list2array (reverse (array2list (myArray))));
console.log(foldr (1) (addArrow) (array2list (myArray)));
console.log(foldl (1) (addArrow) (array2list (myArray)));
console.log(foldr (2) (subtract) (array2list (myArray)));
console.log(foldl (2) (subtract) (array2list (myArray)));
console.log(foldrFromFoldl (2) (subtract) (array2list (myArray)));
console.log(foldlFromFoldr (2) (subtract) (array2list (myArray)));
console.log(foldr (2) (subtract) (range (0) (100)));

let xs = array2list("Hello!");

console.log(foldl ("_") (addArrow) (xs));
console.log(foldr ("_") (addArrow) (xs));
console.log(foldlFromFoldr ("_") (addArrow) (xs));
console.log(foldrFromFoldl ("_") (addArrow) (xs));
console.log(foldlFromFoldr2 ("_") (addArrow) (xs));
console.log(foldrFromFoldl2 ("_") (addArrow) (xs));
console.log(loop (subtract (1)) (10) (20));
