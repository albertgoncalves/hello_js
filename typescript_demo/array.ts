// https://www.typescriptlang.org/docs/handbook/basic-types.html

// tsc array.ts ; node array.js

const numToArray = (a: number) => (b: number) => {
    let returnArray: number[] = [a, b]
    return returnArray;
};

console.log(numToArray (1) (2));
