/* jshint esversion: 6 */

// https://medium.com/dailyjs/functional-js-with-es6-recursive-patterns-b7d0813ef9e3

(
    function () {
        // 'use strict';

        const add = (x, y) => x + y;

        const divide = (x, y) => x / y;

        const double = x => x * 2;

        const head = ([x]) => x;

        const tail = ([, ...xs]) => xs;

        const def = (x) => typeof x !== 'undefined';

        const under = (x) => !def(x);

        const even = (x) => x % 2 === 0;

        const odd = (x) => !even(x);

        const first = ([x, ...xs], n = 1) =>
            def(x) && n ? [x, ...first(xs, n - 1)]
                        : [];
        const last = (xs, n = 1) => reverse(first(reverse(xs), n));
        const copy = (array) => [...array];

        const length = ([x, ...xs], len = 0) => def(x) ? length(xs, len + 1)
                                                       : len;

        const reverse = ([x, ...xs]) => def(x) ? [...reverse(xs), x]
                                               : [];

        const slice = ([x, ...xs], i, y, curr = 0) =>
            def(x) ? curr === i ? [y, x, ...slice(xs, i, y, curr + 1)]
                                : [x,    ...slice(xs, i, y, curr + 1)]
                   : [];

        const isArray = x => Array.isArray(x);

        const flatten = ([x, ...xs]) =>
            def(x) ? isArray(x) ? [   ...flatten(x), ...flatten(xs)]
                                : [x, ...flatten(xs)]
                   : [];

        const map = ([x, ...xs], fn) => def(x) ? [fn(x), ...map(xs, fn)]
                                               : [];

        const swap = (a, i, j) => (map(a, (x) => {if(x === i) return a[j];
                                                  if(x === j) return a[i];
                                                  return x;
                                                  }));

        const filter = ([x, ...xs], fn) =>
            def(x) ? fn(x) ? [x, ...filter(xs, fn)]
                           : [   ...filter(xs, fn)]
                   : [];

        const reject = ([x, ...xs], fn) =>
            def(x) ? fn(x) ? [   ...reject(xs, fn)]
                           : [x, ...reject(xs, fn)]
                   : [];

        const reduce = ([x, ...xs], f, memo, i = 0) =>
            def(x) ? reduce(xs, f, f(memo, x, i), i + 1)
                   : memo;

        const reduceRight = (xs, fn, memo) =>
            reduce(reverseReduce(xs), fn, memo);

        const sum = (memo, x) => memo + x;

        const partial = (fn, ...args) => (...newArgs) =>
            fn(...args, ...newArgs);

        const spreadArg = (fn) => (...args) => fn(args);

        const addArgs = spreadArg(
            ([x, ...xs]) => def(x) ? parseInt(x + addArgs(...xs))
                                   : []
        );

        const reverseArgs = (fn) => (...args) => fn(...reverse(args));

        const pluck = (key, object) => object[key];

        // Each function consumes the return value of the function that came before.
        const flow = (...args) => (init) =>
            reduce(args, (memo, fn) => fn(memo), init);

        const compose = (...args) => flow(...reverse(args));

        // Returns Infinity if array supplied is empty.
        const min = ([x, ...xs], result = Infinity) =>
            def(x) ? x < result ? min(xs, x)
                                : result
                   : result;

        const max = ([x, ...xs], result = -Infinity) =>
            def(x) ? x > result ? max(xs, x)
                                : max(xs, result)
                   : result;

        const factorial = (x, acum = 1) =>
            x ? factorial(x - 1, x * acum)
              : acum;

        const fib = (x) => x > 2 ? fib(x - 1) + fib(x - 2)
                                 : 1;

        const quicksort = (xs) =>
            lengthReduce(xs) ? flatten(
                              [quicksort(filter(tail(xs), x => x <= head(xs))),
                               head(xs),
                               quicksort(filter(tail(xs), x => x >  head(xs)))]
                             )
                             : [];

        const reverseReduce = (xs) =>
            reduce(xs, (memo, x) => [x, ...memo], []);

        const lengthReduce = (xs) => reduce(xs, (memo, x) => memo + 1, 0);

        const mapReduce = (xs, fn) =>
            reduce(xs, (memo, x) => [...memo, fn(x)], []);

        const filterReduce = (xs, fn) =>
            reduce(xs, (memo, x) => fn(x) ? [...memo, x]
                                          : [...memo], []);

        const rejectReduce = (xs, fn) => reduce(xs, (memo, x) =>
            fn(x) ? [...memo]
                  : [...memo, x], []);

        const firstReduce = (xs, n) =>
            reduce(xs, (memo, x, i) => i < n ? [...memo, x]
                                             : [...memo], []);

        const lastReduce = (xs, n) =>
            reduce(
                xs, (memo, x, i) => i >= (lengthReduce(xs) - n) ? [...memo, x]
                                                                : [...memo], []
            );

        const mergeReduce = spreadArg(
            xs => reduce(xs, (memo, x) => [...memo, ...x], [])
        );

        const flattenReduce = (xs) =>
            reduce(xs, (memo, x) =>
                x ? isArray(x) ? [...memo, ...flattenReduce(x)]
                               : [...memo, x]
                  : [], []);

        const addReduce = spreadArg(
            ([x, ...xs]) => reduce(xs, (memo, y) => memo + y, x)
        );

        const divideReduce = spreadArg(
            ([x, ...xs]) => reduce(xs, (memo, y) => memo / y, x)
        );

        const multiplyReduce = spreadArg(
            ([x, ...xs]) => reduce(xs, (memo, y) => memo * y, x)
        );

        // MAIN

        const array1         = [1, 2, 3];
        const array2         = [4, [5, [6]]];
        const add5to         = partial(add, 5);
        const reverseDivide  = reverseArgs(divide);
        const percentToDec   = partial(reverseDivide, 100);
        const product        = {price: 15};
        const getPrice       = partial(pluck, 'price');
        const products       = [{price: 10},
                                {price: 5 },
                                {price: 1 }];
        const discount       = (x) => x * 0.9;
        const tax            = (x) => x + (x * 0.075);
        const flowFinalPrice = flow(getPrice, discount, tax);
        const compFinalPrice = compose(tax, discount, getPrice);

        let demos = [
            filter(swap(flatten([array1, array2]), 1, 4), even),
            reject(swap(flatten([array1, array2]), 1, 4), odd ),
            filter(swap(flatten([array1, array2]), 1, 4), odd ),
            reject(swap(flatten([array1, array2]), 1, 4), even),
            reduce(flatten([array1, array2]), sum, 0),
            add5to(10),
            addArgs(1, 2, 3, 4, 5, 6),
            reverseDivide(100, 10),
            percentToDec(25),
            pluck('price', product),
            map(products, getPrice),
            map(products, flowFinalPrice),
            map(products, compFinalPrice),
            min(flatten([array1, array2])),
            max(flatten([array1, array2])),
            factorial(5),
            fib(15),
            quicksort(flatten([array1, array2])),
            reverseReduce(array1),
            lengthReduce(array1),
            mapReduce(array1, double),
            filterReduce(array1, even),
            rejectReduce(array1, even),
            firstReduce(array1, 2),
            lastReduce(array1, 2),
            mergeReduce(array1, array2),
            flattenReduce([1, [2, 3, [4, [5, [[6]]]]]]),
            addReduce(1, 2, 3, 4, 5),
            multiplyReduce(2, 5, 10),
            divideReduce(100, 2, 5),
            reduceRight(
                [[0, 1], [2, 3], [4, 5]], (memo, x) => memo.concat(x), []
            )
        ];

        demos.forEach(
            (demo) => {
                console.log(demo);
            }
        );
    } ()
);
