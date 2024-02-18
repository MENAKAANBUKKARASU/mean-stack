
let fs = require('fs')

let total =0
// I/O cycle
fs.readFile(',/index.js',()=>{
    setTimeout(print1, 0) // setTimeout functions delay of calling function print so 'n' get initialized 
    setImmediate(print2) // in presence of i/o cycle setimmediate gets priority
    
})
 // setTimeout(print1, 0) setImmediate(print2) if both the functions are outside the function it would run alternatively in the terminal when we run frequently
let n=1



function print1(){
    total = n*10;
    console.log ("Total 1 : ", total)
    n++;
}
function print2(){
    total = n*10;
    console.log ("Total 2 : ", total)
}