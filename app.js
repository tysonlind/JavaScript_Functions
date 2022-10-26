console.log("Hello World!\n==========\n");

console.log("EXERCISE 1:\n==========\n");

// Exercise 1 Section
function printOdds (count){
    // BONUS
    if (count < 0){
        return;
    }
    //BONUS END
for (i = 1; i <= count; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}
}
printOdds(5);



console.log("EXERCISE 2:\n==========\n");
// Exercise 2 Section

function checkAge (userName, age){
    //BONUS
    if(!userName || !age){
       return console.log("Please enter both a username and age");
    }
    //BONUS END
let aboveSixteen = `Congrats ${userName}, you can drive!`
let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
if (age > 15){
    return console.log(aboveSixteen);
} else {
    return console.log(belowSixteen);
}
}
checkAge('Bill');
checkAge("bill",19);


console.log("EXERCISE 3:\n==========\n");
// Exercise 3 Section

function quadrant (x,y){
    
switch (true){
    case x == 0 && y == 0:
        console.log("Point is at origin.");
        break;
    case x == 0:
        console.log("Point is on the y axis");
        break;
    case y == 0:
        console.log("Point is on the x axis");
        break;
    case x > 0 && y > 0:
        console.log("Quadrant 1");
        break;
    case x < 0 && y > 0:
        console.log("Quadrant 2");
        break;
    case x > 0 && y < 0:
        console.log("Quadrant 3");
        break;
    case x < 0 && y < 0:
        console.log("Quadrant 4");
        break;
    default:
        console.log("Invalid input.")
    }
}

quadrant(-1,4);
quadrant(1,5);
quadrant(-1,-3);
quadrant(1,-4);
quadrant(0,5);
quadrant(5,0);

console.log("EXERCISE 4:\n==========\n");
// Exercise 4 Section

function triangleType (x,y,z){
    if ((x + y) <= z || (x + z) <= y || (y + z) <= x){
        return console.log("invalid triangle");
     }
    if (x == y  && y == z) {
        console.log("equilateral triangle");
    }
    if (x != y && y != z && z != x) {
        console.log("scalene triangle");
    }
    if ( x == y && x != z || y == z && x != y || x == z && y != z){
        console.log("isosceles triangle");
    }
}

triangleType(3,3,3);
triangleType(1,1,2);
triangleType(3,4,6);
triangleType(1,2,2);

console.log("EXERCISE 5:\n==========\n");
// Exercise 5 Section

function dataPlanStatus (planLimit, day, usage) {
let remainingDays = 30 - day;
let avgUse = Math.round((usage/day) * 100)/100;
let netAvg = Math.round((planLimit/30) * 100) / 100;
let exceedUse = Math.round((avgUse * 30) * 100)/100;
let avgRemaining = Math.round(((planLimit - usage)/remainingDays) * 100)/100;

console.log(`${day} days used, ${remainingDays} days remaining`);
console.log(`Average daily use: ${avgUse}GB`);

if (avgUse > netAvg) {
    console.log(`You are EXCEEDING your average daily use (${netAvg}GB/day), continuing this high usage, you'll exceed your data plan by ${exceedUse}GB.`);
    console.log(`To stay below your data plan, use no more than ${avgRemaining}GB/day`);
}

}

dataPlanStatus(100,12,55);