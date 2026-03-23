const prompt = require("prompt-sync")();
let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));
let c = Number(prompt("Enter c: "));
if ( a>b && a> c) {
    console.log( a + " is largest");
} else if ( b > a && b> c) {
    console.log( b + " is largest");
} else if ( c > b && c> a ){
    console.log(c + " is largest");
} else if ( a === b && a> c ) {
    console.log( a + " and " + b + " both are largest");
} else if ( a===c && a>b) {
    console.log(a + " and "+ c + " both are largest");
} else if ( b===c && b>a) {
    console.log( b + " and " + c + " both are largest");
} else {
    console.log( a + " and " + b + " and " + c + " all are equal");
}