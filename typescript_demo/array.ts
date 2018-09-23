// https://www.typescriptlang.org/docs/handbook/basic-types.html

// tsc array.ts ; node array.js

const numToArray = (a: number) => (b: number) => {
    let returnVar: number[] = [a, b]
    return returnVar
}

console.log(numToArray (1) (2))
