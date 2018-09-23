/* tslint:disable: no-string-literal */

// $ tsc --lib 'es5, es6, dom' --downlevelIteration iters_genrs.ts

let list = [4, 5, 6];

for (const i in list) {
    if (list.hasOwnProperty(i)) {
        console.log(i); // "0", "1", "2"
    }
}

for (const i of list) {
    console.log(i); // "4", "5", "6"
}

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (const pet in pets) {
    if (pets.hasOwnProperty(pet)) {
        console.log(pet); // "species"
    }
}

for (const pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}
