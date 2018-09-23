// $ tsc arrow.ts ; node arrow.js
var add = function (a, b) { return a + b; };
var addPart = function (a) { return function (b) {
    var retVar = a + b;
    return retVar;
}; };
var logs = [add(1, 2),
    addPart(1)(2)
];
logs.forEach(function (log) {
    console.log(log);
});
