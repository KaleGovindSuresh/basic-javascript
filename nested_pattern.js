
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

// for (var i = 1; i <= 6; i++) {
//     var str = "";

//     for (var j = 1; j <= i; j++) {
//         str += " *";
//     }
//     console.log(str);

// }


//            *
//          * *
//        * * *
//      * * * *
//    * * * * *
//  * * * * * *
// for (var i = 4; i >= 0; i--) {
//     var str = "";

//     for (var j = 1; j <= 5; j++) {
//         if (j <= i) str += "   ";
//         else str += "  *"
//     }
//     console.log(str);

// }



//            *
//          * * *
//        * * * * *
//      * * * * * * *
//    * * * * * * * * *
//  * * * * * * * * * * *


var rows = 5;
var cols = rows * 2;
for (var i = 0; i < rows; i++) {
    var str = " ";

    for (var j = 1; j <= cols; j++) {
        if (j >= rows - i && j <= rows + i) {
            str += "  *";
        }
        else {
            str += "   "
        }
    }
    console.log(str);

}


var rows = 10;
var cols = rows * 2;
for (var i = 0; i < rows; i++) {
    var str = " ";

    for (var j = 1; j <= cols; j++) {
        if (j >= rows - i && j <= rows + i) {
            str += "  *";
        }
        else {
            str += "   "
        }
    }
    console.log(str);

}

// *
//   *
//     *
//       *
//         *

for (var i = 1; i <=5 ; i++) {
    var str = "";

    for (var j = 1; j <= 5; j++) {
        if (j == i) str += "  *";
        else str += "   "
    }
    console.log(str);

}

//   *         *
//      *    *
//        *
//     *    *
//   *        *

for (var i = 1; i <=5 ; i++) {
    var str = "";

    for (var j = 1; j <= 5; j++) {
        if (j == i || j==6-i) str += "  *";
        else str += "  "
    }
    console.log(str);

}

//  M           M
//    M     M
//       M
//    M     M
//  M           M

for (var i = 1; i <=5 ; i++) {
    var str = "";

    for (var j = 1; j <= 5; j++) {
        if (j == i || j==6-i) str += "  M";
        else str += "   "
    }
    console.log(str);

}


//   M  F  F  F  M
//   F  M  F  M  F
//   F  F  M  F  F
//   F  M  F  M  F
//   M  F  F  F  M

for (var i = 1; i <=5 ; i++) {
    var str = "";

    for (var j = 1; j <= 5; j++) {
        if (j == i || j==6-i ) str += "  M";
        else str += "  F"
    }
    console.log(str);

} 
// M  F  F  F  M
// F  M  C  M  F
// F  C  M  C  F
// F  M  C  M  F
// M  F  F  F  M


for (var i = 1; i <=5 ; i++) {
    var str = "";

    for (var j = 1; j <= 5; j++) {
        if (j == i || j==6-i ) str += "  M";
        else if (i==1 || i==5||j==1||j==5) str += "  F";
        else ( str += "  C")
    }
    console.log(str);

} 

//                               *
//                            *  *  *
//                         *  *  *  *  *
//                      *  *  *  *  *  *  *
//                   *  *  *  *  *  *  *  *  *
//                *  *  *  *  *  *  *  *  *  *  *
//             *  *  *  *  *  *  *  *  *  *  *  *  *
//          *  *  *  *  *  *  *  *  *  *  *  *  *  *  *
//       *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *
//    *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *
//       *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *
//          *  *  *  *  *  *  *  *  *  *  *  *  *  *  *
//             *  *  *  *  *  *  *  *  *  *  *  *  *
//                *  *  *  *  *  *  *  *  *  *  *
//                   *  *  *  *  *  *  *  *  *
//                      *  *  *  *  *  *  *
//                         *  *  *  *  *
//                            *  *  *
//                               *


var rows = 10;
var cols = rows * 2;
for (var i = 0; i < rows; i++) {
    var str = " ";

    for (var j = 1; j <= cols; j++) {
        if (j >= rows - i && j <= rows + i) {
            str += "  *";
        }
        else {
            str += "   "
        }
    }
    console.log(str);

}

for (var i = rows -2; i >=0; i--) {
    var str = " ";

    for (var j = 1; j <= cols; j++) {
        if (j >= rows - i && j <= rows + i) {
            str += "  *";
        }
        else {
            str += "   "
        }
    }
    console.log(str);

}