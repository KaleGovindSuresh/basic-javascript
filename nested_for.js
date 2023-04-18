// nested for

// writing for loop in another for loop is called nested for loop

/******************************* pattern (example of for loop)******************************************/
// outer for
var num = 10;
for (var i = 1; i < 4; i++) {
  // nested for
  var str = "";
  for (var j = 1; j < 4; j++, num += 10) {
    str = str + " " + num;
  }
  console.log(str);
}

// if write a program in matrix form
for (var i = 1; i < 4; i++) {
  for (var j = 1; j < 4; j++) {
    console.log(i, j);
  }
}

// write in row format
// 1 2 3
// 1 2 3
// 1 2 3
for (var i = 1; i < 4; i++) {
  var str = "";
  for (var j = 1; j < 4; j++) {
    str = str + " " + j; // if we want get value of i then use in str " " i
  }
  console.log(str);
}

// 1 1 1 1 1
// 2 2 2 2 2
for (var i = 5; i < 6; i++) {
  var str = "";
  for (var j = 1; j < 6; j++) {
    str = str + " " + i;
  }
  console.log(str);
}

// 5 5 5 5 5
// 4 4 4 4 4
for (var i = 5; i > 0; i--) {
  var str = "";
  for (var j = 1; j < 6; j++) {
    str = str + " " + i;
  }
  console.log(str);
}

// 1 2 3 4 5
for (var i = 1; i < 4; i++) {
  // i < 4 or i <= 3 both are same
  var str = "";
  for (var j = 1; j < 6; j++) {
    str = str + " " + j; // j for 1 2 3 4 5 format
  }
  console.log(str);
}

// 5 4 3 2 1
for (var i = 1; i < 4; i++) {
  var str = "";
  for (var j = 5; j > 0; j--) {
    str = str + " " + j; // j for 5 4 3 2 1 format
  }
  console.log(str);
}

// 2 4 6 8

for (var i = 1; i <= 3; i++) {
  var str = "";
  for (var j = 2; j <= 8; j += 2) {
    str += " " + j;
  }
  console.log(str);
}

// 3 6 9 12
for (var i = 1; i <= 3; i++) {
  var str = "";
  for (var j = 3; j <= 12; j += 3) {
    str += " " + j;
  }
  console.log(str);
}

// 1 2 3 4
// 2 4 6 8
// 3 6 9 12
for (var i = 1; i <= 3; i++) {
  var str = "";
  for (var j = 1; j <= 4; j++) {
    str += " " + i * j;
  }
  console.log(str);
}

// 10 20 30
// 40 50 60
// 70 80 90

// solution 1st

for (var i = 0; i < 3; i++) {
  var str = "";
  for (var j = 10; j <= 30; j = j + 10) {
    str = str + " " + (i * 30 + j);
  }
  console.log(str);
}

// solution 2nd

for (var i = 10; i <= 90; i += 30) {
  var str = "";
  for (var j = 0; j <= 2; j++) {
    str = str + " " + (i + j * 10);
  }
  console.log(str);
}

// solution 3rd

for (var i = 1; i <= 9; i += 3) {
  var str = "";
  for (var j = 0; j <= 2; j++) {
    str = str + " " + (i + j) * 10;
    // str +=" " + (i + j)*10;
  }
  console.log(str);
}

// example pattern new *******
//1
//2 2
//3 3 3
//4 4 4 4
// 5 5 5 5 5
for (var i = 1; i <= 5; i++) {
  var str = "";

  for (var j = 0; j < i; j++) {
    str += " " + i;
  }
  console.log(str);
}

// 5 5 5 5 5
//4 4 4 4
// 3 3 3
//2 2
//1

for (var i = 5; i > 0; i--) {
  var str = "";

  for (var j = 0; j < i; j++) {
    str += " " + i;
  }
  console.log(str);
}

//1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// solution 1st
for (var i = 1; i <= 6; i++) {
  var str = "";

  for (var j = 1; j < i; j++) {
    str += " " + j;
  }
  console.log(str);
}

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
for (var i = 5; i > 0; i--) {
  var str = "";

  for (var j = 1; j <= i; j++) {
    str += " " + j;
  }
  console.log(str);
}

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

for (var i = 0; i < 5; i++) {
  var str = "";

  for (var j = 5; i < j; j--) {
    str += " " + j;
  }
  console.log(str);
}

// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

for (var i = 5; i > 0; i--) {
  var str = "";
  for (var j = 5; j >= i; j--) {
    str += " " + j;
  }
  console.log(str);
}

//5
//4 5
//3 4 5
//2 3 4 5
//1 2 3 4 5

for (var i = 5; i > 0; i--) {
  var str = "";
  for (var j = i; j <= 5; j++) {
    str += " " + j;
  }
  console.log(str);
}

//1 2 3 4 5
//2 3 4 5
//3 4 5
//4 5
//5

for (var i = 1; i <= 5; i++) {
  var str = "";
  for (var j = i; j <= 5; j++) {
    str += " " + j;
  }
  console.log(str);
}

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

for (var i = 1; i <= 6; i++) {
  var str = "";

  for (var j = 1; j <= i; j++) {
    str += " *";
  }
  console.log(str);
}

//            *
//          * *
//        * * *
//    * * * * *
//  * * * * * *
//* * * * * * *

for (var i = 6; i > 0; i--) {
  var str = "";

  for (var j = i; i >= 6; j--) {
    str += " *";
  }
  console.log(str);
}
