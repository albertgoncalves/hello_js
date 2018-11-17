var str = "Hello, how are you?";
var p   = str.match(/(H.*), (h.* )/);

console.log(p);
console.log(p[0]); // "Hello, how are"
console.log(p[1]); // "Hello"
console.log(p[2]); // "how are"
