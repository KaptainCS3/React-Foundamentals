//synchronous example

console.log("I ");
console.log("Love");
console.log("Writing");
console.log("Javascript");
console.log("Code");

console.log('')
console.log('')
console.log('')
//asynchronous example

console.log('This is Asynchronous part')
setTimeout(()=>{
    console.log("This function will be executed after 3 seconds")
}, 3000)