// via https://medium.com/dailyjs/functional-js-with-es6-recursive-patterns-b7d0813ef9e3

const head    = ([x]) => x;
const tail    = ([, ...xs]) => xs;
const push    = (xa, x) => [...xa, x];
const def     = x => typeof x !== 'undefined';
const undef   = x => !def(x);
const copy    = xa => [...xa];
const length  = ([x, ...xs], len=0) => def(x) ? length(xs, len + 1) : len;
const reverse = ([x, ...xs]) => def(x) ? [...reverse(xs), x] : [];
const first   = ([x, ...xs], n=1) =>
    def(x) && n ? [x, ...first(xs, n - 1)] : [];
const last    = (xs, n=1) => reverse(first(reverse(xs), n));
const insert  = ([x, ...xs], i, y, curr=0) =>
    def(x) ? curr === i ? [y, x, ...insert(xs, i, y, curr + 1)]
                        : [x,    ...insert(xs, i, y, curr + 1)]
           : [];
const flatten = ([x, ...xs]) =>
    def(x) ? Array.isArray(x) ? [...flatten(x), ...flatten(xs)]
                              : [x            , ...flatten(xs)]
           : [];
const swap    = (xa, i, j) => xa.map(
    (x, y) => y === i ? xa[j]
                      : y === j ? xa[i]
                                : x
);
const filter  = ([x, ...xs], f) => def(x) ? f(x) ? [x, ...filter(xs, f)]
                                                 : [   ...filter(xs, f)]
                                          : [];
const reject  = (xa, f) => filter(xa, (x) => !f(x));
const split   = (xa, f) => {
    const spl = (keep, drop, [x, ...xs], f) => {
        return def(x) ? f(x) ? spl(push(keep, x), drop, xs, f)
                             : spl(keep, push(drop, x), xs, f)
                      : [keep, drop];
    };
    return spl([], [], xa, f);
};

const array = [1, 2, 3, 4, 5];
const demos = [ "head(array)"
              , "tail(array)"
              , "push(array, 6)"
              , "length([])"
              , "length(array)"
              , "reverse(array)"
              , "first(array, 2)"
              , "last(array, 2)"
              , "insert(array, 0, 3)"
              , "flatten([array, array])"
              , "swap(array, 1, 3)"
              , "filter(array, (x) => x % 2 === 1)"
              , "reject(array, (x) => x % 2 === 1)"
              , "split(array, (x) => x % 2 === 1)"
              ];

demos.forEach((x) => {
    console.log(x);
    console.log(eval(x)); // "eval can be harmful"
});
