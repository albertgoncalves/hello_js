// $ tsc arrow.ts ; node arrow.js

const add = (a: number) => (b: number) => a + b;

console.log(add (1) (2));
