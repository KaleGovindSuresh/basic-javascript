// Print all the numbers whivh are fully divisible by 5 from 1 to 100

for ( var i = 1; i <= 100;i++ ){
    if (i % 5 == 0)
    console.log(i);
}

// Print all even number from 1 to 100

for ( var i = 1; i <= 100;i++ ){
    if (i % 2 == 0)
    console.log(i);
}

// print all odd number

for ( var i = 1; i <= 100;i++ ){
    if (i % 2 != 0)
    console.log(i);
}


// print a  number with its number upto 10  it means 2*2  


var num = 13   

// solution 1

for ( var i = 1,n=num; i <= 10;i++, n += num ){
    console.log(n);
}
// solution 2
for ( var i = num; i<=num*10; i += num) console.log(i);

// solution 3
for ( var i = 1; i<=10; i++) console.log(i * num);



/**************example************ */

var i = "topper"

// for ( var i = 1; i <= 100;i++ ){
//     if (i % 3 == 0)
//     console.log(i,". Topper");
//     if (i % 5 == 0)
//     console.log(i,". skills");
// }

for ( var i = 1; i <= 100;i++ )
    if (i % 3 == 0 && i % 5 == 0){
    console.log(i,". Topper skills");}
 else if ( i % 3 == 0){
    console.log(i,".Topper");}
    else if ( i % 5 == 0){
        console.log(i,".Skills");
}
    else if ( i % 2 == 0){
        console.log(i,".MERN");
}


// check whether the given number isnprime or not 

var num = 15;
var isPrime = true;

for (var i = 2; i < num; i++ ) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) console.log(num, "is Prime");
else console.log(num, "is not Prime");