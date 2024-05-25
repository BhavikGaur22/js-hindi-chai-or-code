 const accountId = 144553 
let accountEmail = " bhavikgaur22@gmail.com"
var accountPassword = "12345"
accountcity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hcjn.com"
accountPassword = "22222"
accountcity = "bengaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountcity])