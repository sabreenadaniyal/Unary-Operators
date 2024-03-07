"use strict";
//UNARY OPERATORS(++)(--)
//Post-Increment(a++):
let num = 0;
console.log(num++); //0
//update
console.log(num); //1
console.log(num); //1
//more update
console.log(num++); //1
console.log(num); //2
console.log(num = num + 5); //7
//Pre-Increment(++a):
let a = 5;
console.log(++a); //6
//update
console.log(a); //6
//more update
console.log(++a); //7
console.log(a); //7       
console.log(++a); //8
//Post-Decrement(a--):
let b = 35;
console.log(b--); //35
//update
console.log(b); //34
//more update        
console.log(b--); //34
console.log(b); //33
console.log(b = b - 10); //23
//Pre-Decrement(--a):
let c = 12;
console.log(--c); //11
//update
console.log(c); //11
console.log(--c); //10
console.log(c = c - 4); //6
