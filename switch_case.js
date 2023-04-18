// example one
var day = 5;

switch (day) {
    case 0: {
        console.log("sunday");
        break;
    }

    case 1: {
        console.log("monday");
        break;
    }

    case 2: {
        console.log("Thusday");
        break;
    }

    case 3: {
        console.log("wednesday");
        break;
    }

    case 4: {
        console.log("Thursday");
        break;
    }

    case 5: {
        console.log("friday");
        break;
    }
    case 6: {
        console.log("satarday");
        break;
    }
    default: {
        console.log("INvalid data");
    }
}

// second example 

var month = "june";

switch (month) {
    case"june":
    case"jul":
    case"aug":
    case"sep": {
        console.log("moonsoon");
        break;
    }
    case"oct":
    case"nov":
    case"dec":
    case"jan": {
        console.log("winter");
        break;
    }
    case"feb":
    case"mar":
    case"apr":
    case"may": {
        console.log("summer");
        break;
    }
}

// we write above in another type but this not use
// var month = "june";

// switch (month) {
//     case"june": {
//         console.log("moonsoon");
//         break;
//     }
//     case"jul": {
//         console.log("moonsoon");
//         break;
//     }
//     case"aug": {
//         console.log("moonsoon");
//         break;
//     }
    
//     case"sep": {
//         console.log("moonsoon");
//         break;
//     }
//     case"oct": {
//         console.log("winter");
//         break;
//     }
//     case"nov": {
//         console.log("winter");
//         break;
//     }
//     case"dec": {
//         console.log("winter");
//         break;
//     }
//     case"jan": {
//         console.log("winter");
//         break;
//     }
//     case"feb":case"may": {
//         console.log("summer");
//         break;
//     }
//     case"mar":case"may": {
//         console.log("summer");
//         break;
//     }
//     case"apr":case"may": {
//         console.log("summer");
//         break;
//     }
//     case"may": {
//         console.log("summer");
//         break;
//     }
// }

