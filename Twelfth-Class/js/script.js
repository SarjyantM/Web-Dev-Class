console.log("Hello World");

var p = 5;
var s = 7;
var q = p + s;
console.log("The sum of", p, "+", s, "is", q);

console.log("Find remainder of x/y where x=25 and y=4");
var x = 25;
var y = 4;
var ans = x % y;
console.log("The remainder of", x, "/", y, "is", ans);

let a = 4;
if (true) {
    let a = 5;
}
console.log(a)

let qa = 5;
if (true) {
    let qa = 7;
    console.log(qa)
}
console.log(qa)

let a1=5;
let b1=6;
let c1=7;

function Sum(a1,b1){
    return a1+b1;
}
console.log(Sum(a1, b1));
console.log(Sum(b1, c1));
console.log(Sum(a1, c1));