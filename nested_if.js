var a = 50;
b = 40;
c = 30;

// c > b && c> b; 

if (a > b && a > c) console.log("a is greater");
else if (b > a && b > c) console.log("b is greater");
if (c > a && c > b) console.log("c is greater");


// we written in another type  :--  we take if else then if else
// if (a > b && a > c){ console.log("a is greater");
// } else {
//     if (b > a && b > c) {
//         console.log("b is greater");
//     }
//     else { (c > a && c > b)
//         console.log("c is greater");
//     }
// }
// second example 
var num = 0;
if(num > 0)console.log("num is positive");
else if(num < 0)console.log("num is negative");
else console.log("num is zero");