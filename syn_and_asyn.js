//^ synchronous code execution

// console.log("progrsm started");
// console.log("program mid");
// for (let i =0;i<102345;i++){
//     console.log("programming is loading....");
    
// }
// console.log("dealing with data");
// console.log("programm is ended");

//&  here the problem is it will take to much time to execute

//* the Asynchronous will handle by the we-api/node-api these provide the
//^ timmer api,promises,fetch

//& Asynchronous code execution
console.log("progrsm started");
console.log("program mid");
// function handling(){
//     // for (let i=0;i<12;i++)
//     console.log("done with the programm");
// }
// clearTimeout(handling)
// setTimeout(handling,5000) //? handling the asynchronous task in web-api/node-api
// setInterval(handling,2000)


let interval = setInterval(()=>{
    console.log("program .....");
    
},1000)

setTimeout(()=>{
    clearInterval(interval)
},5000)   //* here it will take n-1 which is 5000-1000(it will execute at 4 times not 5 times)


console.log("dealing with data");
console.log("programm is ended");



