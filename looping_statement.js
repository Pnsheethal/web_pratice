//* 1. For loop
//? A for loop is used when we know how many times we want to execute a block of code.

//syntax
// for(initialization; condition; increment/decrement) {
//     // statements
// }

for(let i = 1; i <= 5; i++) {
    console.log(i);
}


//* A while loop is used when we don't know in advance how many times the loop needs to execute.
// syntax

// initialization;

// while(condition) {
//     // statements

//     increment/decrement;
// }


let i = 1;

while(i <= 5) {
    console.log(i);
    i++;
}


//* A do...while loop is used to execute a block of code at least one time, even if the condition is false.
// do {
//     // statements
//     // increment/decrement
// } while(condition);


let i = 1;

do {
    console.log(i);
    i++;
} while(i <= 5);