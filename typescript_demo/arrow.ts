// $ tslint arrow.ts ; tsc arrow.ts ; node arrow.js

const add     = (a: number, b: number): number => a + b;
const addPart = (a: number) => (b: number) => {
    const  retVal: number = a + b;
    return retVal;
};
const addAlt: (baseValue: number, increment: number) => number =
    (x, y) => x + y;

let logs = [ add     (1,  2)
           , addPart (8) (2)
           , addAlt  (3,  6)
           ];

logs.forEach(
    (log) => {
        console.log(log);
    }
);
