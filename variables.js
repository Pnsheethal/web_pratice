//^ declare and initialization of an variables by using 
//! let, var , const keywords

//? var keyword

var name;  //& only declaration is possible
console.log('JavaScript');



var name1   //& declaration
name1 ='JAvascript is a wonderful language'  //&initialization
console.log(name1);    //& both can be done in different line

var name='Javascript'  //& both initialization and  declaration is possible in same line
console.log(name);

var name ='Java'  //& re- initialization is possible but it will over-write the previous data
name ='Script'   
console.log(name);


var name='java'    //& re - declaration is also possible
var name='Script'
console.log(name);



^ let keyword

let name ='Somu'  //& initialization and declaration is possible on same line
console.log(name);


let name   //& declaration is possible
console.log(name);


let name   //& declaration and initialization is possible in different line
name='Somu'
console.log(name);


let name ='somu'  //& re-declaration is nor possible
let name='Java'
console.log(name);

let name='somu'   //& re-initialization is possible
name='java'
console.log(name);



^ const keyword

const name   //& only declarazition is not possible
console.log(name);


const name='somu'  //& declarazition and intialization on same line is possible
console.log(name);


const name   //& declarazition and intialization on different line is not-possible
name='Smou'
console.log(name);


const name='somu'  //& re-declarazition is not possible
const name='java'
console.log(name);


const name='somu' //& re-intialization is not possible
name='java'
console.log(name);











