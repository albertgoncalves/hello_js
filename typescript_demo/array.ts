// https://www.typescriptlang.org/docs/handbook/basic-types.html

// $ tslint array.ts ; tsc array.ts ; node array.js

const numToArray = (a: number) => (b: number) => {
    const returnVar: number[] = [a, b];
    return returnVar;
};

console.log(numToArray (1) (2));
console.log(numToArray (3) (2));
