// $ tslint arrow.ts ; tsc arrow.ts ; node arrow.js
var add = function (a, b) { return a + b; };
var addPart = function (a) { return function (b) {
    var retVal = a + b;
    return retVal;
}; };
var addAlt = function (x, y) { return x + y; };
var logs = [add(1, 2),
    addPart(8)(2),
    addAlt(3, 6)
];
logs.forEach(function (log) {
    console.log(log);
});
