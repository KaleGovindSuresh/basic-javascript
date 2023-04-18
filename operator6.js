// ternary operator 

// condition ? sucess : failure

var isActive = false;

console.log(isActive == true ? "Active" : "Inactive");
console.log(isActive  ? "Active" : "Inactive");

var a = 10,
b = 0 ;

console.log(a / (b == 0 ? 1 : b));  // if value is 0  then output is  10 means value
console.log(a / (b == 10 ? 1 : b)); // if value expect 0 then o/p is infinity