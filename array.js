//* array is all collection of data which are contain homogenous and heterogenous
//* 2 ways to create an array
//* by using literals[] and constructor()
let array =[1,2,3,4]
console.log("By using the array literals",array);

let array1=new Array(10,20,30,40)
console.log("By using the constructor" , array1);


//* length function
console.log(array.length); //^ 4
//* accessing the specified length of an array
let n =[1,2,3,4,5]
n.length=3
console.log(n);   //? [ 1, 2, 3 ]

//* setting the expand an array
n.length=5
console.log(n);  //? [ 1, 2, 3, <2 empty items> ]

//* dynamically creating the array
let fruits=['apple','banana','cherry']
fruits[fruits.length]='mango'
console.log(fruits);  //? [ 'apple', 'banana', 'cherry', 'mango' ]

//^ static Methods
//* 1 Array.from()
let str ='Hello'
let arr=Array.from(str)
console.log(arr);  //? [ 'H', 'e', 'l', 'l', 'o' ]

//*2 Array.isArray(): check for the substring in array
let arr1=[1,2,3,4,5]
console.log(Array.isArray(arr1));   //? true
console.log(Array.isArray(str));   //? false

//* 3 Array.of()
console.log(Array.of(1,2,3,4));  //? [ 1, 2, 3, 4 ]
console.log(Array.of(10)); //? [10]
console.log(Array.of('hello')); //? ['hello']



//^ Array instance method
//! push() add element at end of an array
let a=[1,2,3,4,5]
a.push('somu')
console.log(a);  //? [ 1, 2, 3, 4, 5, 'somu' ]

//! pop() remove the element at end
a.pop()
console.log(a); //? [ 1, 2, 3, 4, 5 ]

//! shift() remove the element at thr start of an array
// a.shift()
// console.log(a);  //? [ 2, 3, 4, 5 ]


//! unshift() add the element at begin of an array
a.unshift()
console.log(a); //? [ 1, 2, 3, 4, 5 ]










