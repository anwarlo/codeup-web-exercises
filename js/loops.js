"use strict";

// let number = 1;
//
// while( number <== 50 ) {
//     if (number % 2 === 0){
//         console.log(number);
// }
// number++;
// }
//
// function squares(x) {
//     return x*x;
// }
//
// let x = 1;
// while (x <==10) {
//     console.log("The square of " + x + "is" + squares(x));
//     x++;
// }
// var i = 1;
//
// do{
//     console.log("The number is " + i);
//     i++;
//
// }while (i <= 25);
// var i = 100;
//
// do{
//     console.log(i);
//     i -= 10;
//
// }while (i >= -50);


// for (initialize; condition; change)

// for (var count = 1; count <= 25; count++){
//     console.log("The number is " + count);
// }

// log down all numbers from 1-100
// if divisible by 3: Fizz
// if divisible by 5: Buzz
// if divisible by both: FizzBuzz
// else log number

// for (var number = 1; number % 3 console.log("Fizz") || number % 5 console.log("Buzz") || ;++number){
//     console.log(number <= 100 && !== FizzBuzz)
// }
//
// for (var i = 1; i < 101; i++){
//     if(i % 15 === 0) console.log("FizzBuzz");
//     else if (i % 5 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("FizzBuzz");
//
// - Write a while loop that logs numbers 1-50 but backwards.

// let i = 50;
//
// while (i > 0) {
//     console.log('while loop iteration #' + i);
//     i--;
// }

// - Refactor with a do while loop

// do {
//     console.log('while loop iteration #' + i);
//     i--;
// } while (i > 0);


// - Refactor with a for loop

//
// for (var count = 50; count >= 1; count--){
//     console.log("The number is " + count);
// }

//
// let randomNumber = Math.floor(Math.random()*25)*1;
//
// for(let x=1; x <=25; x++){
//     console.log(x);
//     // console.log(randomNumber); generates another random number if inserted inside for loop and also kept outside.
//
//     if (x === randomNumber){
//         console.log("The number is: " + x);
//         break;//would keep going to 25 if break was not here
//     }
// }

// for (var i = 1; i <= 100; i++){
//
//     if (i % 2 === 0){
//         continue;
//     }
//     console.log("The odd number is " + i);
// }

// for (var i = 0; i <= 100; i++){
//
//     if (i % 2 !== 0){
//         continue;
//     }
//     console.log("The even number is " + i);
// }


function cubed(x) {
    for (let a = 1; a <= x; a++){
        if(a % 2 === 0){
            continue;
        }
        if (a === x){
            break;
        }
        console.log("The cube of " + a + " is " + a*a*a);
    }
}
cubed(35);