// var isPrime;
// for (var num = 1; num <= 100; num++){
//     // isPrime =1;
// {
//     isPrime=0;
//     for(var num1=2;num1<=num/2;num1++){

//         if (num % num1 ==0 );{
//             isPrime == 1;
//             break;
//         }
//     }

//     if(isPrime==0){

//     }
// }
// }
// var num = 5

// for (var i = 1,n=num; i <= 10; i++, n=n+num) {
//     console.log(n);
// }

// var num = 13

// // solution 1

// for ( var i = 1,n=num; i <= 5;i++, n += num ){
//     console.log(n);
// }

// for(i=10,j=100;i<=100;i+=10,j-=10){
//     console.log(i+" "+j);
// }

// var i=5
// for(var num=i;num<=50;num+=i ){
//     console.log(num);
// }


// for (num =1; num<=100; num++)
//     if(num%3==0) console.log(num,". Topper");
//     else if(num%5==0) console.log(num,". Skills");
//     else (num%5==0 && num%3==0); console.log(num,". Topper skills");



// var num = 15;
// var isPrime = true;

// for (var i = 2; i < num; i++ ) {
//     if (num % i == 0) {
//         isPrime = false;
//         break;
//     }
// }

// if (isPrime) console.log(num, "is Prime");
// else console.log(num, "is not Prime");



// for(var i=1;i<=10;i++){
//     console.log("hi");
//     for(var j=1; j<=7;j++){
//         console.log("hello");
//     }
// }

// var num=10
// for(i=1;i<=3;i++){
// var str = "";
// for(j=1;j<=3;j++, num+=10){
//     str=str+" "+num;
// }
// console.log(str);
// }

// for (i=1;i<4;i++){
//     for(j=1;j<4;j++){
//         console.log(i,j);
//     }
// }


// for (i=1;i<10;i++){
//     var str="";
//     for(j=1;j<i;j++){
//         str = str + " "+ j;
//     }
//     console.log(str);
// }

// 1 2 3 4
// 2 4 6 8
// 3 6 9 12
for (var i = 1; i <= 3; i++) {
    var str = ""
    for (var j = 1; j <= 4; j++) {
        str += " " + i*j ;
    }
    console.log(str); 
   
}