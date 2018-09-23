// $ tslint arrow.ts ; tsc arrow.ts ; node arrow.js

const add     = (a: number, b: number): number => a + b;
const addPart = (a: number) => (b: number) => {
    const retVar: number = a + b;
    return retVar;
};

let logs = [ add     (1,  2)
           , addPart (8) (2)
           ];

logs.forEach(
    (log) => {
        console.log(log);
    }
);
