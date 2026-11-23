//* A closure in js is a function that remembers and accessed variables from its outerfnction even after the outerfunction has finished executing
//! let's understand with simple example

// function outer(){
//     let a=10;

//     function inner(){
//         console.log(a);
        
//     }
//     inner()
// }
// outer()

// outer() is a parent function
// variables "a" is declared inside the outer function
// inner() is the child function
// the inner function access variable "a"  from the outerfunction



function outer(){
    let count=0

    function inner(){
        count++
        console.log(count);
        
    }
    return inner
}

let result = outer()
result()
result()
result()
result()