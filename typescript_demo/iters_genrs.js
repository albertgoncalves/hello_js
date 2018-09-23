/* tslint:disable: no-string-literal */
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var e_1, _a, e_2, _b;
// $ tsc --lib 'es5, es6, dom' --downlevelIteration iters_genrs.ts
var list = [4, 5, 6];
for (var i in list) {
    if (list.hasOwnProperty(i)) {
        console.log(i); // "0", "1", "2"
    }
}
try {
    for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
        var i = list_1_1.value;
        console.log(i); // "4", "5", "6"
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (list_1_1 && !list_1_1.done && (_a = list_1["return"])) _a.call(list_1);
    }
    finally { if (e_1) throw e_1.error; }
}
var pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (var pet in pets) {
    if (pets.hasOwnProperty(pet)) {
        console.log(pet); // "species"
    }
}
try {
    for (var pets_1 = __values(pets), pets_1_1 = pets_1.next(); !pets_1_1.done; pets_1_1 = pets_1.next()) {
        var pet = pets_1_1.value;
        console.log(pet); // "Cat", "Dog", "Hamster"
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (pets_1_1 && !pets_1_1.done && (_b = pets_1["return"])) _b.call(pets_1);
    }
    finally { if (e_2) throw e_2.error; }
}
