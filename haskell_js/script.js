/* jshint esversion: 6 */
/* jshint -W014 */

// https://www.youtube.com/watch?v=pUN3algpvMs

// http://jshint.com/docs/
// global-like syntax will disable specifc jshint warnings

// to lint script and evaluate console output (http://jshint.com/docs/cli/)
// $ jshint --verbose script.js
// $ node script.js


(
    function () {
        'use strict';

        function add (a) {
            return function(b) {
                return a + b;
            };
        }

        const addArrow = (a) => (b) => a + b;
        const subtract = (a) => (b) => a - b;

        const pair = (first) => (second) => {
            return { 'first' : first
                   , 'second': second
                   };
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

        const foldlFromFoldr = (z) => (f) => (xs) => foldr (z) (flip (f)) (xs);
        const foldrFromFoldl = (z) => (f) => (xs) => foldl (z) (flip (f)) (xs);

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

        const loop = (f) => (x) => (n) => n <= 0 ? x
                                                 : f (loop (f) (x) (n - 1));

        // MAIN

        let myArray = [1, 2, 3, 4, 5, 6];
        let xs      = array2list("Hello!");
        let myList  = pair (1) (
                         pair (2) (
                             pair (3) (null)
                             )
                         );

        let demos = [
            add      (1) (2),
            addArrow (1) (2),
            myList,
            fst (myList),
            snd (myList),
            array2list (myArray),
            list2array (myList ),
            list2array (array2list (myArray)),
            array2list (list2array (myList )),
            array2list ("Hello!"),
            list2array (range (1) (10)),
            list2array (map (addArrow (1))            (range (1) (10))),
            list2array (map ((x) => addArrow (x) (1)) (range (1) (10))),
            list2array (map (fizzbuzz)                (range (1) (20))),
            subtract (1) (2),
            flip (subtract) (1) (2),
            list2array (reverse (array2list (myArray))),
            foldr (1) (addArrow) (array2list (myArray)),
            foldl (1) (addArrow) (array2list (myArray)),
            foldr (2) (subtract) (array2list (myArray)),
            foldl (2) (subtract) (array2list (myArray)),
            foldrFromFoldl (2) (subtract) (array2list (myArray)),
            foldlFromFoldr (2) (subtract) (array2list (myArray)),
            foldl (2)   (subtract) (range (0) (100)),
            foldr (2)   (subtract) (range (0) (100)),
            foldl ("_") (addArrow) (xs),
            foldr ("_") (addArrow) (xs),
            foldlFromFoldr  ("_") (addArrow) (xs),
            foldrFromFoldl  ("_") (addArrow) (xs),
            foldlFromFoldr2 ("_") (addArrow) (xs),
            foldrFromFoldl2 ("_") (addArrow) (xs),
            loop (subtract (1)) (10) (100)
        ];

        demos.forEach(
            (demo) => {
                console.log(demo);
            }
        );
    } ()
);
